export function createPlayerControls({
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
}) {
  function playAudio() {
    playCurrentTrackAudio().catch((error) => {
      console.error("Playback failed:", error);
      state.isPlaying = false;
      updatePlayButton();
      renderQueue();
      visualizer.stop();
    });
  }

  function pauseAudio() {
    const activeAudio = getActiveAudioElement();
    activeAudio.pause();

    if (state.activeAudioType === "dj") {
      stopDjVoicePlayback();
    }

    state.isPlaying = false;
    updatePlayButton();
    renderQueue();
    visualizer.stop();
  }

  function togglePlay() {
    if (state.isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }

  function getNextTrackIndex() {
    const station = getCurrentStation();
    const totalTracks = station.tracks.length;

    if (state.isShuffle && totalTracks > 1) {
      let nextIndex = state.currentTrackIndex;
      while (nextIndex === state.currentTrackIndex) {
        nextIndex = Math.floor(Math.random() * totalTracks);
      }
      return nextIndex;
    }

    return (state.currentTrackIndex + 1) % totalTracks;
  }

  function getPreviousTrackIndex() {
    const station = getCurrentStation();
    const totalTracks = station.tracks.length;
    return (state.currentTrackIndex - 1 + totalTracks) % totalTracks;
  }

  function changeTrack(nextIndex, { autoplay = state.isPlaying } = {}) {
    const currentTrack = getCurrentTrack();
    pushRecentTrack(currentTrack);
    stopDjVoicePlayback();

    state.currentTrackIndex = nextIndex;
    setAudioSourceForCurrentTrack();
    syncUI();

    if (autoplay) {
      playAudio();
    }
  }

  function playNextTrack({ autoplay = state.isPlaying } = {}) {
    changeTrack(getNextTrackIndex(), { autoplay });
  }

  function playPreviousTrack({ autoplay = state.isPlaying } = {}) {
    if (state.activeAudioType === "dj") {
      changeTrack(getPreviousTrackIndex(), { autoplay: true });
      return;
    }

    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      updateProgressUI();
      return;
    }

    changeTrack(getPreviousTrackIndex(), { autoplay });
  }

  function toggleShuffle() {
    state.isShuffle = !state.isShuffle;
    updateShuffleButton();
  }

  function toggleFavorite() {
    const station = getCurrentStation();
    const track = getCurrentTrack();
    const key = getTrackKey(station.id, track);

    if (state.favorites.has(key)) {
      state.favorites.delete(key);
    } else {
      state.favorites.add(key);
    }

    saveFavorites();
    updateFavoriteButton();
  }

  function toggleMute() {
    const activeAudio = getActiveAudioElement();

    if (activeAudio.muted || activeAudio.volume === 0) {
      audio.muted = false;
      djVoiceAudio.muted = false;
      const restoredVolume = state.lastVolume > 0 ? state.lastVolume : 0.8;
      audio.volume = restoredVolume;
      djVoiceAudio.volume = restoredVolume;
      selectors.volumeSlider.value = String(restoredVolume);
    } else {
      state.lastVolume = activeAudio.volume || 0.8;
      audio.muted = true;
      djVoiceAudio.muted = true;
      selectors.volumeSlider.value = "0";
      audio.volume = 0;
      djVoiceAudio.volume = 0;
    }

    updateMuteButton();
    updateVolumeSliderUI();
  }

  function handleVolumeChange(event) {
    const value = Number(event.target.value);
    audio.volume = value;
    djVoiceAudio.volume = value;
    audio.muted = value === 0;
    djVoiceAudio.muted = value === 0;

    if (value > 0) {
      state.lastVolume = value;
    }

    updateMuteButton();
    updateVolumeSliderUI();
  }

  function seekTrack(clientX) {
    if (state.activeAudioType !== "track") return;

    const rect = selectors.progressBar.getBoundingClientRect();
    const percentage = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));

    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      audio.currentTime = audio.duration * percentage;
    }

    updateProgressUI();
  }

  function handleProgressInteraction(event) {
    seekTrack(event.clientX);
  }

  function handlePresetSelection(event) {
    const button = event.target.closest("[data-station-index]");
    if (!button) return;

    const nextStationIndex = Number(button.dataset.stationIndex);
    if (Number.isNaN(nextStationIndex)) return;

    stopDjVoicePlayback();

    state.currentStationIndex = nextStationIndex;
    state.currentTrackIndex = 0;
    state.recentHistory = [];
    setAudioSourceForCurrentTrack();
    syncUI();
    playStationDjIntroThenTrack();
  }

  function handleQueueSelection(event) {
    const row = event.target.closest("[data-track-index]");
    if (!row) return;

    const nextTrackIndex = Number(row.dataset.trackIndex);
    if (Number.isNaN(nextTrackIndex)) return;

    if (nextTrackIndex === state.currentTrackIndex && state.activeAudioType === "track") {
      togglePlay();
      return;
    }

    changeTrack(nextTrackIndex, { autoplay: true });
  }

  function handleQueueKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") return;

    const row = event.target.closest("[data-track-index]");
    if (!row) return;

    event.preventDefault();

    const nextTrackIndex = Number(row.dataset.trackIndex);
    if (Number.isNaN(nextTrackIndex)) return;

    if (nextTrackIndex === state.currentTrackIndex && state.activeAudioType === "track") {
      togglePlay();
      return;
    }

    changeTrack(nextTrackIndex, { autoplay: true });
  }

  function attachEventListeners() {
    selectors.playButton.addEventListener("click", togglePlay);
    selectors.previousButton.addEventListener("click", () => playPreviousTrack());
    selectors.nextButton.addEventListener("click", () => playNextTrack());
    selectors.shuffleButton.addEventListener("click", toggleShuffle);
    selectors.favoriteButton.addEventListener("click", toggleFavorite);
    selectors.muteButton.addEventListener("click", toggleMute);
    selectors.volumeSlider.addEventListener("input", handleVolumeChange);

    selectors.progressBar.addEventListener("click", handleProgressInteraction);

    selectors.presetList.addEventListener("click", handlePresetSelection);
    selectors.queueList.addEventListener("click", handleQueueSelection);
    selectors.queueList.addEventListener("keydown", handleQueueKeydown);

    audio.addEventListener("timeupdate", updateProgressUI);
    audio.addEventListener("loadedmetadata", updateProgressUI);
    audio.addEventListener("durationchange", updateProgressUI);

    audio.addEventListener("play", () => {
      state.activeAudioType = "track";
      state.isPlaying = true;
      updatePlayButton();
      renderQueue();
      visualizer.start();
    });

    audio.addEventListener("pause", () => {
      if (state.activeAudioType !== "track") return;
      state.isPlaying = false;
      updatePlayButton();
      renderQueue();
      visualizer.stop();
    });

    audio.addEventListener("ended", () => {
      playNextTrack({ autoplay: true });
    });

    audio.addEventListener("emptied", () => {
      visualizer.stop({ clearCanvas: true });
    });

    djVoiceAudio.addEventListener("play", () => {
      state.activeAudioType = "dj";
      state.isPlaying = true;
      updatePlayButton();
      renderQueue();
      visualizer.stop({ clearCanvas: true });
    });

    djVoiceAudio.addEventListener("pause", () => {
      if (state.activeAudioType !== "dj" || state.pendingTrackAfterDj) return;
      state.isPlaying = false;
      updatePlayButton();
      renderQueue();
    });

    djVoiceAudio.addEventListener("loadedmetadata", () => {
      updateMuteButton();
    });

    window.addEventListener("keydown", (event) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      const isTyping =
        activeTag === "input" ||
        activeTag === "textarea" ||
        document.activeElement?.isContentEditable;

      if (isTyping) return;

      switch (event.key.toLowerCase()) {
        case " ":
        case "k":
          event.preventDefault();
          togglePlay();
          break;
        case "arrowright":
          playNextTrack();
          break;
        case "arrowleft":
          playPreviousTrack();
          break;
        case "m":
          toggleMute();
          break;
        case "f":
          toggleFavorite();
          break;
        case "s":
          toggleShuffle();
          break;
        default:
          break;
      }
    });

    window.addEventListener("resize", () => {
      visualizer.resizeCanvas();
    });

    syncVolumesAcrossAudio();
  }

  return {
    playAudio,
    pauseAudio,
    togglePlay,
    playNextTrack,
    playPreviousTrack,
    changeTrack,
    toggleShuffle,
    toggleFavorite,
    toggleMute,
    handleVolumeChange,
    handleProgressInteraction,
    handlePresetSelection,
    handleQueueSelection,
    handleQueueKeydown,
    attachEventListeners,
  };
}