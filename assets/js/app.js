import { stations } from "./modules/stations.js";
import { createAudioVisualizer } from "./modules/audio-visualizer.js";
import { createPlayerControls } from "./modules/player-controls.js";

const STORAGE_KEYS = {
  favorites: "musicmixx-favorites-v1",
};

const FACT_DISPLAY_INTERVAL = 90000; // Every 90 seconds
const FACT_VISIBLE_DURATION = 9000; // 9 seconds visible duration for each fact popup
const FACT_POPUP_CLASS_DURATION = 1100;

const DEFAULT_FACT = {
  label: "Music Fact",
  text: "Music history and artist trivia can make your radio experience feel more interactive and educational.",
};

const audio = new Audio();
audio.preload = "metadata";
audio.volume = 0.8;

const djVoiceAudio = new Audio();
djVoiceAudio.preload = "auto";
djVoiceAudio.volume = 0.9;

const selectors = {
  body: document.body,
  frequency: document.querySelector(".frequency-display"),
  stationName: document.querySelector(".station-name"),
  showTitle: document.querySelector(".show-title"),
  slogan: document.querySelector(".station-slogan"),
  trackTitle: document.querySelector(".track-title"),
  trackArtist: document.querySelector(".track-artist"),
  genreChip: document.querySelector(".genre-chip"),
  didYouKnowCard: document.querySelector(".did-you-know-card"),
  didYouKnowType: document.querySelector(".did-you-know-type"),
  didYouKnowText: document.querySelector(".did-you-know-text"),
  presetList: document.querySelector(".preset-list"),
  queueList: document.querySelector(".queue-card .track-list"),
  recentList: document.querySelector(".recent-list"),
  infoGrid: document.querySelector(".info-grid"),
  presetMeta: document.querySelector(".preset-card .card-meta"),
  signalMeta: document.querySelector(".broadcast-card .card-meta"),
  currentTime: document.querySelector(".current-time"),
  totalTime: document.querySelector(".total-time"),
  playButton: document.querySelector('[data-action="play-toggle"]'),
  previousButton: document.querySelector('[data-action="previous"]'),
  nextButton: document.querySelector('[data-action="next"]'),
  shuffleButton: document.querySelector('[data-action="shuffle"]'),
  favoriteButton: document.querySelector('[data-action="favorite"]'),
  muteButton: document.querySelector('[data-action="mute"]'),
  progressBar: document.querySelector(".progress-bar"),
  progressFill: document.querySelector(".progress-fill"),
  progressThumb: document.querySelector(".progress-thumb"),
  volumeSlider: document.querySelector(".volume-slider"),
  visualizerCanvas: document.querySelector("#audio-visualizer"),
};

const visualizer = createAudioVisualizer({
  audioElement: audio,
  canvas: selectors.visualizerCanvas,
});

const state = {
  currentStationIndex: 0,
  currentTrackIndex: 0,
  isPlaying: false,
  isShuffle: false,
  recentHistory: [],
  favorites: loadFavorites(),
  lastVolume: 0.8,
  currentFactIndex: 0,
  factRotationTimer: null,
  factHideTimer: null,
  factPopupCleanupTimer: null,
  activeAudioType: "track",
  pendingTrackAfterDj: false,
};

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.favorites) || "[]");
    return new Set(saved);
  } catch {
    return new Set();
  }
}

function saveFavorites() {
  localStorage.setItem(
    STORAGE_KEYS.favorites,
    JSON.stringify([...state.favorites])
  );
}

function getCurrentStation() {
  return stations[state.currentStationIndex];
}

function getCurrentTrack() {
  return getCurrentStation().tracks[state.currentTrackIndex];
}

function getTrackKey(stationId, track) {
  return `${stationId}::${track.src}`;
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function formatClock() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());
}

function setClock() {
  const clockNode = document.querySelector('[data-info="time"]');
  if (clockNode) {
    clockNode.textContent = formatClock();
  }
}

function setButtonIcon(button, iconClass) {
  if (!button) return;
  const icon = button.querySelector("i");
  if (icon) {
    icon.className = iconClass;
  }
}

function applyCurrentStationTheme() {
  const station = getCurrentStation();
  selectors.body.dataset.theme = station.theme;
  visualizer.refreshTheme();
  updateVolumeSliderUI();
}

function updatePlayButton() {
  setButtonIcon(
    selectors.playButton,
    state.isPlaying ? "ri-pause-fill" : "ri-play-fill"
  );

  selectors.playButton.setAttribute(
    "aria-label",
    state.isPlaying ? "Pause" : "Play"
  );

  selectors.body.classList.toggle("is-playing", state.isPlaying);
}

function updateShuffleButton() {
  const isOn = state.isShuffle;

  selectors.shuffleButton.classList.toggle("is-toggled", isOn);
  selectors.shuffleButton.setAttribute("title", isOn ? "Shuffle: ON" : "Shuffle: OFF");
  selectors.shuffleButton.setAttribute("aria-label", isOn ? "Shuffle On" : "Shuffle Off");
}

function updateFavoriteButton() {
  const station = getCurrentStation();
  const track = getCurrentTrack();
  const key = getTrackKey(station.id, track);
  const isFavorite = state.favorites.has(key);

  setButtonIcon(
    selectors.favoriteButton,
    isFavorite ? "ri-heart-fill" : "ri-heart-line"
  );

  selectors.favoriteButton.classList.toggle("is-toggled", isFavorite);
  selectors.favoriteButton.setAttribute(
    "aria-label",
    isFavorite ? "Remove Favorite" : "Add Favorite"
  );
}

function updateMuteButton() {
  let iconClass = "ri-volume-up-line";

  const activeAudio = getActiveAudioElement();

  if (activeAudio.muted || activeAudio.volume === 0) {
    iconClass = "ri-volume-mute-line";
  } else if (activeAudio.volume <= 0.45) {
    iconClass = "ri-volume-down-line";
  }

  setButtonIcon(selectors.muteButton, iconClass);
  selectors.muteButton.classList.toggle("is-toggled", activeAudio.muted || activeAudio.volume === 0);
  selectors.muteButton.setAttribute(
    "aria-label",
    activeAudio.muted || activeAudio.volume === 0 ? "Unmute" : "Mute"
  );
}

function updateVolumeSliderUI() {
  if (!selectors.volumeSlider) return;

  const value = Number(selectors.volumeSlider.value);
  const percentage = value * 100;

  selectors.volumeSlider.style.background = `linear-gradient(
    90deg,
    rgba(var(--accent-rgb), 0.95) 0%,
    rgba(var(--accent-rgb), 0.95) ${percentage}%,
    rgba(255,255,255,0.08) ${percentage}%,
    rgba(255,255,255,0.08) 100%
  )`;
}

function getQueueRowIconClass(index) {
  const isCurrentTrack = index === state.currentTrackIndex;

  if (!isCurrentTrack) {
    return "ri-music-2-line";
  }

  return state.isPlaying ? "ri-pause-mini-fill" : "ri-play-mini-fill";
}

function getFactsForCurrentTrack() {
  const station = getCurrentStation();
  const track = getCurrentTrack();
  const trackFacts = Array.isArray(track.facts) ? track.facts : [];
  const stationFacts = Array.isArray(station.stationFacts) ? station.stationFacts : [];
  const combinedFacts = [...trackFacts, ...stationFacts];

  return combinedFacts.length > 0 ? combinedFacts : [DEFAULT_FACT];
}

function getFactIconClass(label = "") {
  const normalized = label.toLowerCase();

  if (normalized.includes("artist")) {
    return "ri-mic-line";
  }

  if (normalized.includes("song")) {
    return "ri-music-2-line";
  }

  if (
    normalized.includes("radio") ||
    normalized.includes("history") ||
    normalized.includes("programming")
  ) {
    return "ri-radio-2-line";
  }

  if (normalized.includes("genre")) {
    return "ri-sparkling-line";
  }

  if (normalized.includes("mood")) {
    return "ri-disc-line";
  }

  if (normalized.includes("legacy")) {
    return "ri-award-line";
  }

  if (normalized.includes("production")) {
    return "ri-equalizer-line";
  }

  return "ri-information-line";
}

function buildFactTypeMarkup(label, iconClass) {
  return `
    <span class="did-you-know-type-icon-wrap" aria-hidden="true">
      <i class="${iconClass}"></i>
      <span class="fact-soundwave">
        <span class="fact-soundwave-bar"></span>
        <span class="fact-soundwave-bar"></span>
        <span class="fact-soundwave-bar"></span>
      </span>
    </span>
    <span class="did-you-know-type-label">${label}</span>
  `;
}

function getRandomFactDirectionClass() {
  return Math.random() < 0.5 ? "fact-text-from-left" : "fact-text-from-right";
}

function clearFactTimers() {
  if (state.factRotationTimer) {
    clearInterval(state.factRotationTimer);
    state.factRotationTimer = null;
  }

  if (state.factHideTimer) {
    clearTimeout(state.factHideTimer);
    state.factHideTimer = null;
  }

  if (state.factPopupCleanupTimer) {
    clearTimeout(state.factPopupCleanupTimer);
    state.factPopupCleanupTimer = null;
  }
}

function applyFactContent() {
  if (!selectors.didYouKnowType || !selectors.didYouKnowText) return;

  const facts = getFactsForCurrentTrack();
  const fact = facts[state.currentFactIndex % facts.length] || DEFAULT_FACT;
  const label = fact.label || DEFAULT_FACT.label;
  const text = fact.text || DEFAULT_FACT.text;
  const iconClass = getFactIconClass(label);

  selectors.didYouKnowType.innerHTML = buildFactTypeMarkup(label, iconClass);
  selectors.didYouKnowText.textContent = text;
}

function hideFactCard({ immediate = false } = {}) {
  if (!selectors.didYouKnowCard) return;

  if (immediate) {
    selectors.didYouKnowCard.classList.remove(
      "is-visible",
      "popup-enter",
      "popup-exit",
      "fact-is-rotating",
      "fact-text-from-left",
      "fact-text-from-right"
    );
    selectors.didYouKnowCard.setAttribute("aria-hidden", "true");
    return;
  }

  selectors.didYouKnowCard.classList.remove("popup-enter", "fact-is-rotating");
  selectors.didYouKnowCard.classList.add("popup-exit");
  selectors.didYouKnowCard.classList.remove("is-visible");
  selectors.didYouKnowCard.setAttribute("aria-hidden", "true");
}

function showFactCard() {
  if (!selectors.didYouKnowCard) return;

  const directionClass = getRandomFactDirectionClass();

  selectors.didYouKnowCard.classList.remove(
    "popup-exit",
    "fact-text-from-left",
    "fact-text-from-right",
    "fact-is-rotating"
  );

  void selectors.didYouKnowCard.offsetWidth;

  selectors.didYouKnowCard.classList.add("is-visible", "popup-enter", "fact-is-rotating", directionClass);
  selectors.didYouKnowCard.setAttribute("aria-hidden", "false");

  if (state.factPopupCleanupTimer) {
    clearTimeout(state.factPopupCleanupTimer);
  }

  state.factPopupCleanupTimer = window.setTimeout(() => {
    selectors.didYouKnowCard.classList.remove("popup-enter", "fact-is-rotating");
  }, FACT_POPUP_CLASS_DURATION);
}

function showScheduledFactPopup() {
  if (!state.isPlaying || state.activeAudioType !== "track") return;

  applyFactContent();
  showFactCard();

  if (state.factHideTimer) {
    clearTimeout(state.factHideTimer);
  }

  state.factHideTimer = window.setTimeout(() => {
    hideFactCard();

    const facts = getFactsForCurrentTrack();
    state.currentFactIndex = (state.currentFactIndex + 1) % facts.length;
  }, FACT_VISIBLE_DURATION);
}

function renderCurrentFact() {
  applyFactContent();
}

function resetFactRotation() {
  state.currentFactIndex = 0;
  clearFactTimers();
  renderCurrentFact();
  hideFactCard({ immediate: true });
}

function stopFactRotation() {
  clearFactTimers();
  hideFactCard({ immediate: true });
}

function startFactRotation() {
  stopFactRotation();

  if (!state.isPlaying || state.activeAudioType !== "track") return;

  state.factRotationTimer = window.setInterval(() => {
    showScheduledFactPopup();
  }, FACT_DISPLAY_INTERVAL);
}

function renderPresets() {
  selectors.presetList.innerHTML = stations
    .map(
      (station, index) => `
        <button
          class="preset-button ${index === state.currentStationIndex ? "active" : ""}"
          type="button"
          data-station-index="${index}"
          aria-label="Tune to ${station.frequency} ${station.name}"
        >
          <div>
            <p class="preset-frequency">${station.frequency}</p>
            <p class="preset-name">${station.name}</p>
          </div>
          <span class="preset-tag ${index === state.currentStationIndex ? "live" : ""}">
            ${index === state.currentStationIndex ? "LIVE" : station.tag}
          </span>
        </button>
      `
    )
    .join("");
}

function renderQueue() {
  const station = getCurrentStation();

  selectors.queueList.innerHTML = station.tracks
    .map(
      (track, index) => `
        <div
          class="track-row ${index === state.currentTrackIndex ? "active" : ""}"
          data-track-index="${index}"
          role="button"
          tabindex="0"
          aria-label="${index === state.currentTrackIndex && state.isPlaying ? "Pause" : "Play"} ${track.song} by ${track.artist}"
        >
          <div class="track-icon">
            <i class="${getQueueRowIconClass(index)}"></i>
          </div>
          <div class="track-copy">
            <p class="row-title">${track.song}</p>
            <p class="row-sub">${track.artist}</p>
          </div>
          <span class="row-time">${track.duration || "--:--"}</span>
        </div>
      `
    )
    .join("");
}

function renderRecent() {
  const station = getCurrentStation();
  const items =
    state.recentHistory.length > 0
      ? state.recentHistory.slice(0, 4)
      : station.recentlyPlayed.slice(0, 4);

  selectors.recentList.innerHTML = items
    .map(
      (track) => `
        <div class="track-row compact">
          <div class="track-icon">
            <i class="ri-history-line"></i>
          </div>
          <div class="track-copy">
            <p class="row-title">${track.song}</p>
            <p class="row-sub">${track.artist}</p>
          </div>
          <span class="row-time">${track.duration || "--:--"}</span>
        </div>
      `
    )
    .join("");
}

function renderInfo(station) {
  selectors.infoGrid.innerHTML = `
    <div class="info-row">
      <span class="info-label">Show</span>
      <span class="info-value">${station.showTitle}</span>
    </div>

    <div class="info-row">
      <span class="info-label">Host</span>
      <span class="info-value">${station.host}</span>
    </div>

    <div class="info-row">
      <span class="info-label">Time</span>
      <span class="info-value" data-info="time">${formatClock()}</span>
    </div>

    <div class="info-row">
      <span class="info-label">Genre</span>
      <span class="info-value">${station.name}</span>
    </div>

    <div class="info-row">
      <span class="info-label">City</span>
      <span class="info-value">${station.city}</span>
    </div>

    <div class="info-row">
      <span class="info-label">Slogan</span>
      <span class="info-value">${station.slogan}</span>
    </div>
  `;
}

function renderHero() {
  const station = getCurrentStation();
  const track = getCurrentTrack();

  selectors.frequency.textContent = station.frequency;
  selectors.stationName.textContent = station.name;
  selectors.showTitle.textContent = `Now Broadcasting: ${station.showTitle}`;
  selectors.slogan.textContent = station.slogan;
  selectors.trackTitle.textContent = track.song;
  selectors.trackArtist.textContent = track.artist;
  selectors.genreChip.textContent = station.name;
  selectors.signalMeta.textContent = station.signal;
  selectors.presetMeta.textContent = `${stations.length} Live`;
}

function updateProgressUI() {
  const current = audio.currentTime || 0;
  const duration =
    Number.isFinite(audio.duration) && audio.duration > 0
      ? audio.duration
      : 0;

  selectors.currentTime.textContent = formatTime(current);
  selectors.totalTime.textContent = duration
    ? formatTime(duration)
    : getCurrentTrack().duration || "0:00";

  const progressPercent = duration ? (current / duration) * 100 : 0;
  selectors.progressFill.style.width = `${progressPercent}%`;
  selectors.progressThumb.style.left = `${progressPercent}%`;
}

function syncUI() {
  applyCurrentStationTheme();
  renderHero();
  renderPresets();
  renderQueue();
  renderRecent();
  renderInfo(getCurrentStation());
  renderCurrentFact();
  updatePlayButton();
  updateShuffleButton();
  updateFavoriteButton();
  updateMuteButton();
  updateProgressUI();
  updateVolumeSliderUI();
  setClock();
}

function setAudioSourceForCurrentTrack() {
  const track = getCurrentTrack();
  audio.src = track.src;
  audio.load();
  updateProgressUI();
  resetFactRotation();
  visualizer.stop({ clearCanvas: true });
}

function stopDjVoicePlayback() {
  state.pendingTrackAfterDj = false;
  djVoiceAudio.pause();
  djVoiceAudio.currentTime = 0;

  if (state.activeAudioType === "dj") {
    state.activeAudioType = "track";
    state.isPlaying = false;
    updatePlayButton();
  }
}

function getActiveAudioElement() {
  return state.activeAudioType === "dj" ? djVoiceAudio : audio;
}

function syncVolumesAcrossAudio() {
  const sliderValue = Number(selectors.volumeSlider?.value ?? state.lastVolume ?? 0.8);
  audio.volume = sliderValue;
  djVoiceAudio.volume = sliderValue;
  audio.muted = sliderValue === 0;
  djVoiceAudio.muted = sliderValue === 0;
}

function playCurrentTrackAudio() {
  stopDjVoicePlayback();
  state.activeAudioType = "track";

  return audio.play().then(() => {
    state.isPlaying = true;
    updatePlayButton();
    renderQueue();
    visualizer.start();
  });
}

function playStationDjIntroThenTrack() {
  const station = getCurrentStation();
  const djVoiceSrc = station.djVoiceSrc;

  stopFactRotation();
  visualizer.stop({ clearCanvas: true });
  audio.pause();
  audio.currentTime = 0;

  if (!djVoiceSrc) {
    return playCurrentTrackAudio().catch((error) => {
      console.error("Track playback failed:", error);
      state.isPlaying = false;
      updatePlayButton();
      renderQueue();
      visualizer.stop();
    });
  }

  state.pendingTrackAfterDj = true;
  state.activeAudioType = "dj";
  state.isPlaying = true;
  updatePlayButton();
  renderQueue();

  djVoiceAudio.src = djVoiceSrc;
  djVoiceAudio.load();

  return djVoiceAudio.play().catch((error) => {
    console.error("DJ intro playback failed:", error);
    stopDjVoicePlayback();
    return playCurrentTrackAudio().catch((trackError) => {
      console.error("Track playback failed:", trackError);
      state.isPlaying = false;
      updatePlayButton();
      renderQueue();
      visualizer.stop();
    });
  });
}

function pushRecentTrack(track) {
  const station = getCurrentStation();
  state.recentHistory = [
    track,
    ...state.recentHistory.filter((item) => item.src !== track.src),
  ].slice(0, Math.max(4, station.recentlyPlayed.length));
}

const playerControls = createPlayerControls({
  audio,
  djVoiceAudio,
  state,
  selectors,
  visualizer,
  getCurrentStation,
  getCurrentTrack,
  getTrackKey,
  saveFavorites,
  pushRecentTrack,
  setAudioSourceForCurrentTrack,
  syncUI,
  updatePlayButton,
  renderQueue,
  updateShuffleButton,
  updateFavoriteButton,
  updateMuteButton,
  updateVolumeSliderUI,
  updateProgressUI,
  playCurrentTrackAudio,
  playStationDjIntroThenTrack,
  getActiveAudioElement,
  stopDjVoicePlayback,
  syncVolumesAcrossAudio,
});

function bindFactRotationToAudio() {
  audio.addEventListener("play", () => {
    state.activeAudioType = "track";
    state.isPlaying = true;
    startFactRotation();
  });

  audio.addEventListener("pause", () => {
    if (state.activeAudioType !== "track") return;
    state.isPlaying = false;
    stopFactRotation();
  });

  audio.addEventListener("ended", () => {
    state.isPlaying = false;
    stopFactRotation();
  });

  djVoiceAudio.addEventListener("play", () => {
    state.activeAudioType = "dj";
    state.isPlaying = true;
    stopFactRotation();
    updatePlayButton();
  });

  djVoiceAudio.addEventListener("pause", () => {
    if (state.activeAudioType !== "dj" || state.pendingTrackAfterDj) return;
    state.isPlaying = false;
    updatePlayButton();
  });

  djVoiceAudio.addEventListener("ended", () => {
    if (!state.pendingTrackAfterDj) {
      state.activeAudioType = "track";
      state.isPlaying = false;
      updatePlayButton();
      return;
    }

    state.pendingTrackAfterDj = false;
    playCurrentTrackAudio().catch((error) => {
      console.error("Track playback after DJ intro failed:", error);
      state.isPlaying = false;
      updatePlayButton();
      renderQueue();
      visualizer.stop();
    });
  });
}

function init() {
  syncVolumesAcrossAudio();
  updateShuffleButton();
  setAudioSourceForCurrentTrack();
  syncUI();
  hideFactCard({ immediate: true });
  playerControls.attachEventListeners();
  bindFactRotationToAudio();
  setClock();
  setInterval(setClock, 1000);
}

init();