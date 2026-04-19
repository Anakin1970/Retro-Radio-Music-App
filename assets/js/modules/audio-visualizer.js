export function createAudioVisualizer({ audioElement, canvas }) {
  const context = canvas.getContext("2d");
  let audioContext = null;
  let analyser = null;
  let sourceNode = null;
  let dataArray = null;
  let animationFrameId = null;
  let isRunning = false;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
  }

  function clear() {
    resizeCanvas();
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function ensureSetup() {
    if (audioContext) return;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    audioContext = new AudioContextClass();
    sourceNode = audioContext.createMediaElementSource(audioElement);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.82;

    sourceNode.connect(analyser);
    analyser.connect(audioContext.destination);

    dataArray = new Uint8Array(analyser.frequencyBinCount);
    resizeCanvas();
  }

  function getThemeColors() {
    const styles = window.getComputedStyle(document.body);
    const accentRgb = (styles.getPropertyValue("--accent-rgb") || "210, 154, 103").trim();

    return {
      accentRgb,
    };
  }

  function buildMainGradient() {
    const { accentRgb } = getThemeColors();
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, `rgba(${accentRgb}, 0.92)`);
    gradient.addColorStop(0.55, `rgba(${accentRgb}, 0.82)`);
    gradient.addColorStop(1, `rgba(${accentRgb}, 0.64)`);
    return gradient;
  }

  function buildGlowGradient() {
    const { accentRgb } = getThemeColors();
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, `rgba(${accentRgb}, 0.26)`);
    gradient.addColorStop(0.6, `rgba(${accentRgb}, 0.18)`);
    gradient.addColorStop(1, `rgba(${accentRgb}, 0.12)`);
    return gradient;
  }

  function getShadowColor() {
    const { accentRgb } = getThemeColors();
    return `rgba(${accentRgb}, 0.38)`;
  }

  function getDisplayBarHeight(displayIndex, displayCount) {
    const start = Math.floor((displayIndex / displayCount) * dataArray.length);
    const end = Math.max(start + 1, Math.floor(((displayIndex + 1) / displayCount) * dataArray.length));

    let sum = 0;
    let max = 0;

    for (let i = start; i < end; i += 1) {
      const value = dataArray[i];
      sum += value;
      if (value > max) max = value;
    }

    const average = sum / Math.max(1, end - start);
    const energy = Math.max(average, max * 0.92);
    const taper = 1 - (displayIndex / Math.max(1, displayCount - 1)) * 0.18;

    return Math.min(255, energy * taper);
  }

  function drawRoundedBar(x, y, width, height, radius) {
    const safeRadius = Math.min(radius, width / 2, height / 2);

    context.beginPath();
    context.moveTo(x + safeRadius, y);
    context.lineTo(x + width - safeRadius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
    context.lineTo(x + width, y + height);
    context.lineTo(x, y + height);
    context.lineTo(x, y + safeRadius);
    context.quadraticCurveTo(x, y, x + safeRadius, y);
    context.closePath();
    context.fill();
  }

  function draw() {
    if (!isRunning || !analyser) return;

    resizeCanvas();
    analyser.getByteFrequencyData(dataArray);
    context.clearRect(0, 0, canvas.width, canvas.height);

    const dpr = window.devicePixelRatio || 1;
    const displayBarCount = 72;
    const gap = Math.max(0, dpr * 0.35);
    const totalGap = gap * Math.max(0, displayBarCount - 1);
    const barWidth = (canvas.width - totalGap) / displayBarCount;
    const mainGradient = buildMainGradient();
    const glowGradient = buildGlowGradient();

    let x = 0;

    context.save();
    context.shadowBlur = 16;
    context.shadowColor = getShadowColor();
    context.fillStyle = glowGradient;

    for (let i = 0; i < displayBarCount; i += 1) {
      const energy = getDisplayBarHeight(i, displayBarCount);
      const rawHeight = (energy / 255) * (canvas.height * 0.72);
      const barHeight = Math.max(canvas.height * 0.08, rawHeight);
      const drawWidth = i === displayBarCount - 1 ? canvas.width - x : barWidth;
      const glowHeight = barHeight * 0.92;

      context.fillRect(x, canvas.height - glowHeight, drawWidth, glowHeight);
      x += drawWidth + gap;
    }

    context.restore();

    x = 0;
    context.fillStyle = mainGradient;

    for (let i = 0; i < displayBarCount; i += 1) {
      const energy = getDisplayBarHeight(i, displayBarCount);
      const rawHeight = (energy / 255) * (canvas.height * 0.78);
      const barHeight = Math.max(canvas.height * 0.1, rawHeight);
      const drawWidth = i === displayBarCount - 1 ? canvas.width - x : barWidth;
      const y = canvas.height - barHeight;
      const radius = Math.min(drawWidth / 2, 6 * dpr);

      drawRoundedBar(x, y, drawWidth, barHeight, radius);
      x += drawWidth + gap;
    }

    animationFrameId = window.requestAnimationFrame(draw);
  }

  async function start() {
    ensureSetup();
    if (!audioContext || !analyser) return;

    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    if (isRunning) return;

    isRunning = true;
    draw();
  }

  function stop({ clearCanvas = false } = {}) {
    isRunning = false;

    if (animationFrameId !== null) {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    if (clearCanvas) {
      clear();
    }
  }

  function refreshTheme() {
    if (!isRunning) {
      clear();
    }
  }

  window.addEventListener("resize", resizeCanvas);
  clear();

  return {
    start,
    stop,
    clear,
    resizeCanvas,
    refreshTheme,
  };
}