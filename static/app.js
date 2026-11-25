const form = document.querySelector("#chat-form");
const promptInput = document.querySelector("#prompt");
const messagesElement = document.querySelector("#messages");
const imageInput = document.querySelector("#image-input");
const imageAttachButton = document.querySelector("#image-attach");
const imageAttachments = document.querySelector("#image-attachments");
const scanViewButton = document.querySelector("#scan-view");
const sendButton = document.querySelector("#send-button");
const microphoneButton = document.querySelector("#voice-input");
const microphoneLabel = document.querySelector("#mic-label");
const standbyButton = document.querySelector("#voice-standby");
const standbyLabel = document.querySelector("#standby-label");
const speakerButton = document.querySelector("#voice-output");
const voiceStatus = document.querySelector("#voice-status");
const clearButton = document.querySelector("#clear-chat");
const core = document.querySelector("#core");
const coreCaption = document.querySelector("#core-caption");
const connectionStatus = document.querySelector("#connection-status");
const reactorStatus = document.querySelector("#reactor-status");
const coreStage = document.querySelector(".core-stage");
const memoryCountElement = document.querySelector("#memory-count");
const memoryStatusElement = document.querySelector("#memory-status");
const sessionStatusElement = document.querySelector("#session-status");
const memoryDialog = document.querySelector("#memory-dialog");
const memoryDialogCount = document.querySelector("#memory-dialog-count");
const memoryDialogStatus = document.querySelector("#memory-dialog-status");
const memoryList = document.querySelector("#memory-list");
const weatherPanel = document.querySelector(".weather-panel");
const weatherError = document.querySelector("#weather-error");
const forecastList = document.querySelector("#weather-forecast");
const sfxToggle = document.querySelector("#sfx-toggle");
const sfxVolumeInput = document.querySelector("#sfx-volume");
const sfxVolumeValue = document.querySelector("#sfx-volume-value");
const hudModeToggle = document.querySelector("#hud-mode-toggle");
const hudModeLabel = document.querySelector("#hud-mode-label");
const bootOverlay = document.querySelector("#boot-overlay");
const bootEnableAudioButton = document.querySelector("#boot-enable-audio");
const bootSkipButton = document.querySelector("#boot-skip");
const modeTransitionOverlay = document.querySelector("#mode-transition");
const modeBanner = document.querySelector("#mode-banner");
const missionTimerValue = document.querySelector("#mission-timer-value");
const missionTimerStatus = document.querySelector("#mission-timer-status");
const missionTimerToggle = document.querySelector("#mission-timer-toggle");
const missionTimerReset = document.querySelector("#mission-timer-reset");
const uptimeStartedAt = performance.now();
const trafficUploadWave = document.querySelector("#traffic-upload");
const trafficDownloadWave = document.querySelector("#traffic-download");
const dataScanButton = document.querySelector("#data-scan");
const opticalToggle = document.querySelector("#optical-toggle");
const opticalToggleState = document.querySelector("#optical-toggle-state");
const opticalWindow = document.querySelector("#optical-window");
const opticalVideo = document.querySelector("#optical-video");
const opticalStatus = document.querySelector("#optical-status");
const opticalCloseButton = document.querySelector("#optical-close");
const opticalDistance = document.querySelector("#optical-distance");
const opticalAnalysis = document.querySelector("#optical-analysis");
const ambientToggle = document.querySelector("#ambient-toggle");
const ambientToggleState = document.querySelector("#ambient-toggle-state");
const ambientStatus = document.querySelector("#ambient-status");
const issAltitude = document.querySelector("#iss-altitude");
const issVelocity = document.querySelector("#iss-velocity");
const issDistance = document.querySelector("#iss-distance");
const issRegion = document.querySelector("#iss-region");
const airGestureToggle = document.querySelector("#air-gesture-toggle");
const airGestureToggleState = document.querySelector("#air-gesture-toggle-state");
const airGestureHud = document.querySelector("#air-gesture-hud");
const airGestureStatus = document.querySelector("#air-gesture-status");
const airGestureIndicatorLight = document.querySelector("#air-gesture-indicator-light");
const airGestureVideo = document.querySelector("#air-gesture-video");
const gesturePreview = document.querySelector("#gesture-preview");
const cleanSlateOverlay = document.querySelector("#clean-slate-overlay");
const cleanSlateCanvas = document.querySelector("#clean-slate-sparks");
const cleanSlateCountdown = document.querySelector("#clean-slate-countdown");
const cleanSlatePhase = document.querySelector("#clean-slate-phase");
const houseAlert = document.querySelector("#house-alert");
const systemLockButton = document.querySelector("#system-lock-button");
const systemLockOverlay = document.querySelector("#system-lock-overlay");
const systemUnlockButton = document.querySelector("#system-unlock-button");
const systemLockStatus = document.querySelector("#system-lock-status");
const biometricWave = document.querySelector("#biometric-wave");
const tickerContent = document.querySelector("#ticker-content");
const tickerCopy = document.querySelector(".ticker-copy");
const systemLogLines = document.querySelector("#system-log-lines");
const simulationOpenButton = document.querySelector("#simulate-open");
const simulationDialog = document.querySelector("#simulation-dialog");
const simulationCloseButton = document.querySelector("#simulation-close");
const simulationForm = document.querySelector("#simulation-form");
const simulationTargetInput = document.querySelector("#simulation-target");
const simulationLaunchButton = document.querySelector("#simulation-launch");
const simulationStatus = document.querySelector("#simulation-status");
const simulationResultTarget = document.querySelector("#simulation-result-target");
const simulationProbability = document.querySelector("#simulation-probability");
const simulationProgress = document.querySelector(".simulation-progress");
const simulationProgressFill = document.querySelector("#simulation-progress-fill");
const simulationStrategy = document.querySelector("#simulation-strategy");
const simulationRisk = document.querySelector("#simulation-risk");
const simulationRaw = document.querySelector("#simulation-raw");
const floatingNotes = document.querySelector("#floating-notes");
const holoNoteAddButton = document.querySelector("#holo-note-add");
const crosshair = document.querySelector("#target-crosshair");
const crosshairCoordinates = document.querySelector("#crosshair-coordinates");
const sentryToggle = document.querySelector("#sentry-toggle");
const sentryToggleState = document.querySelector("#sentry-toggle-state");
const sentryStatus = document.querySelector("#sentry-status");
const sentryDialog = document.querySelector("#sentry-dialog");
const sentryContinueButton = document.querySelector("#sentry-continue");
const sentryStandbyButton = document.querySelector("#sentry-standby");
const sentryStandbyOverlay = document.querySelector("#sentry-standby-overlay");
const sentryResumeButton = document.querySelector("#sentry-resume");
const icingAlertFrame = document.querySelector("#icing-alert-frame");
const icingDismissButton = document.querySelector("#icing-dismiss");
const flightPanel = document.querySelector("#flight-panel");
const flightMach = document.querySelector("#flight-mach");
const flightAltitude = document.querySelector("#flight-altitude");
const flightTemperature = document.querySelector("#flight-temperature");
const globalRadarCanvas = document.querySelector("#global-radar");
const globalRadarStatus = document.querySelector("#global-radar-status");
const threatKp = document.querySelector("#threat-kp");
const threatGeomagneticAlert = document.querySelector("#threat-geomagnetic-alert");
const threatSolarFlux = document.querySelector("#threat-solar-flux");
const threatSolarAlert = document.querySelector("#threat-solar-alert");
const threatEarthquake = document.querySelector("#threat-earthquake");
const threatMonitorStatus = document.querySelector("#threat-monitor-status");
const analyticsRank = document.querySelector("#analytics-rank");
const analyticsPoints = document.querySelector("#analytics-points");
const analyticsProgress = document.querySelector("#analytics-progress");
const analyticsProgressFill = document.querySelector("#analytics-progress-fill");
const analyticsFocusCount = document.querySelector("#analytics-focus-count");
const analyticsTaskCount = document.querySelector("#analytics-task-count");
const analyticsConversationCount = document.querySelector("#analytics-conversation-count");
const analyticsTaskButton = document.querySelector("#analytics-task-complete");
const holoDialog = document.querySelector("#holo-dialog");
const holoOpenButton = document.querySelector("#holo-open");
const holoCloseButton = document.querySelector("#holo-close");
const holoCanvas = document.querySelector("#holo-canvas");
const holoModelSelect = document.querySelector("#holo-model");
const holoExplodeButton = document.querySelector("#holo-explode");
const holoStatus = document.querySelector("#holo-status");
const cityMapOpenButton = document.querySelector("#city-map-open");
const holoCityToggle = document.querySelector("#holo-city-toggle");
const cityScanForm = document.querySelector("#city-scan-form");
const cityPlaceInput = document.querySelector("#city-place");
const cityCurrentScanButton = document.querySelector("#city-current-scan");
const cityScanStatus = document.querySelector("#city-scan-status");
const ideaOpenButton = document.querySelector("#idea-open");
const ideaDialog = document.querySelector("#idea-dialog");
const ideaCloseButton = document.querySelector("#idea-close");
const ideaForm = document.querySelector("#idea-form");
const ideaTopicInput = document.querySelector("#idea-topic");
const ideaMapCenter = document.querySelector("#idea-map-center");
const ideaMapNodes = document.querySelector("#idea-map-nodes");
const ideaStatus = document.querySelector("#idea-status");
const veronicaDrop = document.querySelector("#veronica-drop");
const chronoTrack = document.querySelector("#chrono-track");
const chronoNow = document.querySelector("#chrono-now");
const chronoDate = document.querySelector("#chrono-date");
const chronoCurrentMarker = document.querySelector("#chrono-current-marker");
const chronoEvents = document.querySelector("#chrono-events");
const chronoForm = document.querySelector("#chrono-form");
const chronoEventTime = document.querySelector("#chrono-event-time");
const chronoEventTitle = document.querySelector("#chrono-event-title");
const chronoList = document.querySelector("#chrono-list");
const cipherDialog = document.querySelector("#cipher-dialog");
const cipherOpenButton = document.querySelector("#cipher-open");
const cipherCloseButton = document.querySelector("#cipher-close");
const cipherKeyInput = document.querySelector("#cipher-key");
const cipherInput = document.querySelector("#cipher-input");
const cipherOutput = document.querySelector("#cipher-output");
const cipherEncryptButton = document.querySelector("#cipher-encrypt");
const cipherDecryptButton = document.querySelector("#cipher-decrypt");
const cipherStatus = document.querySelector("#cipher-status");
const prototypeDialog = document.querySelector("#prototype-dialog");
const prototypeOpenButton = document.querySelector("#prototype-open");
const prototypeCloseButton = document.querySelector("#prototype-close");
const prototypeForm = document.querySelector("#prototype-form");
const prototypeTopicInput = document.querySelector("#prototype-topic");
const prototypeBuildButton = document.querySelector("#prototype-build");
const prototypeFrame = document.querySelector("#prototype-frame");
const prototypeFullscreenButton = document.querySelector("#prototype-fullscreen");
const prototypeDownloadButton = document.querySelector("#prototype-download");
const prototypeStatus = document.querySelector("#prototype-status");
const knowledgeDialog = document.querySelector("#knowledge-dialog");
const knowledgeOpenButton = document.querySelector("#knowledge-open");
const knowledgeCloseButton = document.querySelector("#knowledge-close");
const knowledgeCanvas = document.querySelector("#knowledge-canvas");
const knowledgeNodeCount = document.querySelector("#knowledge-node-count");
const knowledgeDetail = document.querySelector("#knowledge-detail");
const knowledgeStatus = document.querySelector("#knowledge-status");
const HISTORY_STORAGE_KEY = "jarvis.conversation.v1";
const MEMORY_STORAGE_KEY = "jarvis.long-term-memory.v1";
const HOLO_NOTES_STORAGE_KEY = "jarvis.holo-notes.v1";
const CHRONO_EVENTS_STORAGE_KEY = "jarvis.chrono-events.v1";
const WEATHER_CACHE_STORAGE_KEY = "jarvis.kushiro-weather.v1";
const OPERATOR_ANALYTICS_STORAGE_KEY = "jarvis.operator-analytics.v1";
const MAX_HISTORY_MESSAGES = 40;
const MAX_MEMORY_ITEMS = 80;
const MAX_PROTOTYPE_HTML_LENGTH = 250000;
const WEATHER_REFRESH_INTERVAL = 5 * 60 * 1000;
const WEATHER_REQUEST_TIMEOUT = 10000;
const WEATHER_RETRY_DELAY = 2000;
const OPEN_METEO_KUSHIRO_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=42.9849&longitude=144.3814&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo";
const SENTRY_IDLE_LIMIT = 15 * 60 * 1000;
const SENTRY_CHECK_INTERVAL = 1000;
const BOOT_SEQUENCE_DURATION = 2500;
const MODE_TRANSITION_DURATION = 1200;
const MODE_THEME_SWITCH_DELAY = 540;
const MISSION_DURATION_SECONDS = 25 * 60;
const CIPHER_ITERATIONS = 250000;
const ISS_API_URL = "https://api.wheretheiss.at/v1/satellites/25544";
const ISS_REFRESH_INTERVAL = 5000;
const ISS_REQUEST_TIMEOUT = 4200;
const ISS_MAX_TRACK_POINTS = 180;
const EARTH_RADIUS_KM = 6371;
const CITY_DEFAULT_CENTER = { latitude: 42.9849, longitude: 144.3814 };
const CITY_SCAN_RADIUS_METERS = 500;
const CITY_OSM_SCALE = 0.0044;
const CITY_BUILDING_HEIGHT_SCALE = 0.014;
const CITY_MAX_BUILDINGS = 600;
const CITY_MAX_ROADS = 1200;
const CITY_GEOLOCATION_TIMEOUT = 6500;
const CITY_REQUEST_TIMEOUT = 22000;
const CITY_OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
];
const NOMINATIM_SEARCH_URL = "https://nominatim.openstreetmap.org/search";
const NOMINATIM_MIN_INTERVAL = 1100;
const USGS_EARTHQUAKE_URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";
const NOAA_KP_URL = "https://services.swpc.noaa.gov/json/planetary_k_index_1m.json";
const NOAA_XRAY_URL = "https://services.swpc.noaa.gov/json/goes/primary/xrays-1-day.json";
const USGS_REFRESH_INTERVAL = 3 * 60 * 1000;
const NOAA_REFRESH_INTERVAL = 60 * 1000;
const THREAT_REQUEST_TIMEOUT = 10000;
const MAX_IMAGE_ATTACHMENTS = 4;
const MAX_IMAGE_BYTES = 4 * 1024 * 1024;
const MAX_TOTAL_IMAGE_BYTES = 8 * 1024 * 1024;
const OPERATOR_RANKS = [
  { name: "RANK I: TRAINEE", points: 0 },
  { name: "RANK II: AGENT", points: 250 },
  { name: "RANK III: COMMANDER", points: 750 },
  { name: "RANK IV: STARK LEVEL", points: 1800 },
];
const HAND_SKELETON_CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16],
  [13, 17], [17, 18], [18, 19], [19, 20], [0, 17],
];
const BRIEFING_PROMPT =
  "伊吹様向けに、提供された最新の北海道釧路市の天気データを確認し、本日の天気・気温・最高/最低気温を最初に報告したうえで、本日の日本の主要ニュース3つをWeb検索で調べて簡潔に報告して";
const PROTOCOLS = {
  briefing: { label: "BRIEFING", url: null },
  coding: { label: "CODING", url: "https://github.com/" },
  gaming: {
    label: "GAMING",
    url: "https://pogl.com/ja/experiences/6b4ed890-f7a4-48cc-8ee5-c8380044567f",
  },
  watching: { label: "WATCHING", url: "https://wkt-plus-axhs.onrender.com/wkt" },
};

const history = [];
let memoryItems = [];
const greeting = "お帰りなさいませ、伊吹様。システムは正常に稼働しています。ご用件をどうぞ。";
const markdownTags = [
  "a", "blockquote", "br", "code", "del", "em", "h1", "h2", "h3", "h4",
  "h5", "h6", "hr", "li", "ol", "p", "pre", "s", "strong", "table",
  "tbody", "td", "th", "thead", "tr", "ul",
];
const markdownAttributes = ["align", "class", "colspan", "href", "rowspan", "title"];
let recognition = null;
let recognitionMode = null;
let isListening = false;
let cancelRecognition = false;
let isSpeaking = false;
let voiceStandbyEnabled = false;
let wakeTransitionPending = false;
let wakeRemainder = "";
let wakeCandidate = "";
let standbyRestartTimer = null;
let pendingManualStart = false;
let wakeActivated = false;
let voiceOutputEnabled = true;
let activeUtterance = null;
let activeAudio = null;
let activeAudioUrl = null;
let speechRequestId = 0;
let speechPurpose = "reply";
let wakeAudioPromise = null;
let audioContext = null;
let sfxEnabled = true;
let sfxVolume = 0.3;
let processingSfxTimer = null;
let processingSfxStartTimer = null;
let sfxMasterGain = null;
let hudMode = "standard";
let requestInProgress = false;
let bootSequenceTimer = null;
let modeThemeSwitchTimer = null;
let modeTransitionCleanupTimer = null;
let modeTransitionVersion = 0;
let missionRemainingSeconds = MISSION_DURATION_SECONDS;
let missionTimerDeadline = 0;
let missionTimerInterval = null;
let earthquakeData = [];
let kpTelemetry = null;
let solarXrayTelemetry = null;
let usgsReceivedAt = 0;
let noaaReceivedAt = 0;
let solarReceivedAt = 0;
let usgsFeedFailed = false;
let noaaFeedFailed = false;
let solarFeedFailed = false;
let usgsRequestPromise = null;
let noaaRequestPromise = null;
let solarRequestPromise = null;
let pendingImages = [];
let imageAttachmentSequence = 0;
let operatorAnalytics = {
  completedFocusSessions: 0,
  completedFocusMinutes: 0,
  completedTasks: 0,
  conversations: 0,
};
let currentOperatorRankIndex = 0;
let icingAlertTimer = null;
let opticalStream = null;
let opticalRequestVersion = 0;
let opticalReadoutInterval = null;
let ambientBus = null;
let ambientOscillators = [];
let ambientPulseTimeout = null;
let ambientGeneration = 0;
let housePartyTimeout = null;
let housePartyPending = false;
let globalRadarFrame = null;
let holoAnimationFrame = null;
let holoRenderer = null;
let holoScene = null;
let holoCamera = null;
let holoModelGroup = null;
let cityModelGroup = null;
let holoModelParts = [];
let cityResources = new Set();
let cityPaletteMaterials = [];
let cityScanRings = [];
let cityModeActive = false;
let cityScanStartedAt = 0;
let cityScanRequestVersion = 0;
let cityOperatorLocation = null;
let cityMapCounts = { buildings: 0, roads: 0 };
let nominatimLastRequestAt = 0;
let nominatimQueue = Promise.resolve();
let cityScanController = null;
let cityScanRequestId = 0;
let holoResizeObserver = null;
let holoRotationX = -0.18;
let holoRotationY = 0.36;
let holoGestureScale = 1;
let holoExploded = false;
let holoExplodeProgress = 0;
let holoPointer = null;
let cipherOperationRunning = false;
let issTelemetry = null;
let issTrack = [];
let issRequestPromise = null;
let airGestureCamera = null;
let airGestureHands = null;
let airGestureVersion = 0;
let airGesturePending = false;
let airGestureAutoOpened = false;
let airGestureReleasePromise = null;
let airGestureSessionPromise = null;
let airIndexPosition = null;
let airOpenPalmFrames = 0;
let cleanSlatePending = false;
let cleanSlateTimers = [];
let cleanSlateAnimationFrame = null;
let systemLocked = false;
let sentryMode = false;
let sentryPromptPending = false;
let sentryStandbyActive = false;
let lastOperatorActivity = Date.now();
let sentryCheckInterval = null;
let icingWarningIssued = false;
let powerDistributionInterval = null;
let systemLogReady = false;
let holoNotes = [];
let holoNoteDrag = null;
let holoNoteZIndex = 10;
let holoNotesSaveTimer = null;
let chronoEventsData = [];
let chronoEventCounter = 0;
let chronoDisplayedDay = null;
let veronicaDropTimer = null;
let ideaNodeDrag = null;
let kushiroWeather = null;
let kushiroWeatherFetchedAt = 0;
let weatherLastAttemptAt = 0;
let weatherRefreshPromise = null;
let prototypeHtmlSource = "";
let prototypeBuildPending = false;
let knowledgeFrame = null;
let knowledgeResizeObserver = null;
let knowledgeNodes = [];
let knowledgeEdges = [];
let knowledgePointer = null;
let knowledgeSelectedIndex = -1;

function trimHistory() {
  while (history.length > MAX_HISTORY_MESSAGES) history.shift();
  if (history[0]?.role === "assistant") history.shift();
}

function updateSessionStatus(message = `SESSION // ${history.length} / ${MAX_HISTORY_MESSAGES}`) {
  sessionStatusElement.textContent = message;
}

function persistHistory() {
  try {
    window.localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
    updateSessionStatus();
  } catch (error) {
    console.error("Conversation history could not be saved to localStorage.", error);
    updateSessionStatus("SESSION SAVE FAILED");
  }
  if (knowledgeDialog.open) rebuildKnowledgeMatrix();
}

function restoreHistory() {
  try {
    const stored = window.localStorage.getItem(HISTORY_STORAGE_KEY);
    if (stored) {
      const restored = JSON.parse(stored);
      if (!Array.isArray(restored)) throw new TypeError("保存された会話履歴が配列ではありません");
      history.push(
        ...restored.filter(
          (message) =>
            message &&
            ["user", "assistant"].includes(message.role) &&
            typeof message.content === "string" &&
            message.content.trim(),
        ),
      );
      trimHistory();
    }
  } catch (error) {
    console.error("Conversation history could not be restored.", error);
    updateSessionStatus("SESSION RESTORE FAILED");
  }

  messagesElement.replaceChildren();
  if (history.length) {
    history.forEach((message) => {
      addMessage(message.role, message.content);
      if (message.role === "assistant" && message.search) addSearchReceipt(message.search);
      if (message.role === "assistant" && message.launcher_action) {
        addProtocolReceipt(message.launcher_action, message.launcher_opened);
      }
    });
  } else {
    addMessage("assistant", greeting);
  }
  if (sessionStatusElement.textContent !== "SESSION RESTORE FAILED") updateSessionStatus();
}

function setMemoryStatus(message, state = "ready") {
  memoryStatusElement.textContent = message;
  memoryStatusElement.dataset.state = state;
  memoryStatusElement.title = message;
}

function updateMemoryCount(count) {
  memoryCountElement.textContent = String(count);
  memoryDialogCount.textContent = `${count} ${count === 1 ? "FACT" : "FACTS"}`;
}

function persistMemories() {
  try {
    window.localStorage.setItem(MEMORY_STORAGE_KEY, JSON.stringify(memoryItems));
    setMemoryStatus("LOCAL STORAGE // ACTIVE");
    updateMemoryCount(memoryItems.length);
  } catch (error) {
    console.error("Long-term memory could not be saved to localStorage.", error);
    setMemoryStatus("LOCAL SAVE FAILED", "error");
    if (memoryDialog.open) memoryDialogStatus.textContent = "ブラウザーの記憶領域に保存できませんでした。";
    return false;
  }
  if (knowledgeDialog.open) rebuildKnowledgeMatrix();
  return true;
}

function restoreMemories() {
  try {
    const stored = window.localStorage.getItem(MEMORY_STORAGE_KEY);
    if (stored) {
      const restored = JSON.parse(stored);
      if (!Array.isArray(restored) || restored.length > MAX_MEMORY_ITEMS) {
        throw new TypeError("保存された記憶データの形式が正しくありません");
      }
      memoryItems = restored.filter(
        (item) =>
          item &&
          typeof item.id === "string" &&
          typeof item.text === "string" &&
          typeof item.category === "string" &&
          typeof item.created_at === "string",
      );
    } else {
      memoryItems = [];
    }
    updateMemoryCount(memoryItems.length);
    renderMemoryList(memoryItems);
    setMemoryStatus("LOCAL STORAGE // ACTIVE");
    return true;
  } catch (error) {
    console.error("Long-term memory could not be restored from localStorage.", error);
    setMemoryStatus("LOCAL RESTORE FAILED", "error");
    if (memoryDialog.open) memoryDialogStatus.textContent = error.message;
    return false;
  }
}

function memoryCategoryName(category) {
  return {
    profile: "PROFILE",
    preference: "PREFERENCE",
    goal: "GOAL",
    schedule: "SCHEDULE",
    other: "NOTE",
  }[category] || "NOTE";
}

function renderMemoryList(memories) {
  memoryList.replaceChildren();
  if (!memories.length) {
    const empty = document.createElement("li");
    empty.className = "memory-empty";
    empty.textContent = "記憶データはまだありません。会話から大切な情報を自動で保存します。";
    memoryList.append(empty);
    return;
  }

  memories.forEach((memory) => {
    const item = document.createElement("li");
    item.className = "memory-item";
    const copy = document.createElement("div");
    copy.className = "memory-item-copy";
    const meta = document.createElement("div");
    meta.className = "memory-item-meta";
    const category = document.createElement("span");
    category.textContent = memoryCategoryName(memory.category);
    const created = document.createElement("time");
    const date = new Date(memory.created_at);
    created.textContent = Number.isNaN(date.getTime())
      ? ""
      : new Intl.DateTimeFormat("ja-JP", { dateStyle: "medium" }).format(date);
    meta.append(category, created);
    const text = document.createElement("p");
    text.className = "memory-item-text";
    text.textContent = memory.text;
    copy.append(meta, text);

    const removeButton = document.createElement("button");
    removeButton.className = "memory-delete-button";
    removeButton.type = "button";
    removeButton.textContent = "DELETE";
    removeButton.setAttribute("aria-label", `記憶を削除: ${memory.text}`);
    removeButton.addEventListener("click", () => void deleteMemory(memory.id));
    item.append(copy, removeButton);
    memoryList.append(item);
  });
}

function getKnowledgeTokens(text) {
  const cleaned = String(text)
    .normalize("NFKC")
    .replace(/```[\s\S]*?```/gu, " ")
    .replace(/https?:\/\/\S+/gu, " ")
    .replace(/[\p{P}\p{S}\d_]+/gu, " ")
    .trim();
  if (!cleaned) return [];
  const segments = typeof Intl.Segmenter === "function"
    ? [...new Intl.Segmenter("ja", { granularity: "word" }).segment(cleaned)]
      .filter((segment) => segment.isWordLike)
      .map((segment) => segment.segment)
    : cleaned.match(/[ぁ-んァ-ヴー一-龠々]{2,10}|[A-Za-z][A-Za-z0-9+#.-]{1,24}/gu) || [];
  const stopWords = new Set([
    "jarvis", "assistant", "ibuki", "伊吹", "伊吹様", "ジャービス", "ください", "下さい",
    "お願い", "お願いします", "教えて", "教え", "知りたい", "作って", "作っ", "作り", "作成", "して", "する",
    "です", "ます", "ある", "いる", "こと", "もの", "これ", "それ", "ため", "よう",
    "今日", "今回", "既存", "機能", "追加", "実装", "お願いします", "について", "に関して", "くだ", "さい",
  ]);
  return [...new Set(segments
    .map((segment) => segment.trim())
    .filter((segment) => segment.length >= 2 && segment.length <= 24 && !stopWords.has(segment.toLowerCase())))];
}

function rebuildKnowledgeMatrix() {
  const memoryRecords = memoryItems.slice(-MAX_MEMORY_ITEMS).map((memory) => ({
    id: `memory-${memory.id}`,
    type: "MEMORY",
    label: memory.text.replace(/\s+/gu, " ").slice(0, 18),
    detail: `[${memoryCategoryName(memory.category)}]\n${memory.text}`,
    tokens: new Set(getKnowledgeTokens(memory.text).map((token) => token.toLowerCase())),
  }));
  const conversationMessages = history
    .filter((message) => message.role === "user" && typeof message.content === "string")
    .slice(-MAX_HISTORY_MESSAGES);
  const keywordCounts = new Map();
  conversationMessages.forEach((message, index) => {
    const snippet = message.content.replace(/\s+/gu, " ").slice(0, 180);
    getKnowledgeTokens(message.content).forEach((token) => {
      const key = token.toLowerCase();
      const entry = keywordCounts.get(key) || { label: token, count: 0, recency: index, snippets: [] };
      entry.count += 1;
      entry.recency = index;
      if (entry.snippets.length < 3 && !entry.snippets.includes(snippet)) entry.snippets.push(snippet);
      keywordCounts.set(key, entry);
    });
  });
  const keywordRecords = [...keywordCounts.entries()]
    .sort((left, right) => right[1].count - left[1].count || right[1].recency - left[1].recency)
    .slice(0, 30)
    .map(([key, entry]) => ({
      id: `keyword-${key}`,
      type: "KEYWORD",
      label: entry.label.slice(0, 18),
      detail: `会話キーワード // ${entry.count} HIT${entry.count === 1 ? "" : "S"}\n\n${entry.snippets.join("\n\n")}`,
      tokens: new Set([key]),
    }));

  knowledgeNodes = [{
    id: "knowledge-core",
    type: "CORE",
    label: "J.A.R.V.I.S.",
    detail: "NEURAL KNOWLEDGE MATRIX\nブラウザー内の長期記憶と最近の会話キーワードを可視化しています。",
    x: 0.5,
    y: 0.5,
    radius: 8,
    phase: 0,
    tokens: new Set(),
  }];
  const detailRecords = [...memoryRecords, ...keywordRecords];
  detailRecords.forEach((record, index) => {
    const isMemory = record.type === "MEMORY";
    const angle = index * 2.399963229728653;
    const radius = isMemory
      ? 0.34 + (index % 3) * 0.055
      : 0.18 + (index % 2) * 0.075;
    knowledgeNodes.push({
      ...record,
      x: 0.5 + Math.cos(angle) * radius,
      y: 0.5 + Math.sin(angle) * radius * 0.82,
      radius: isMemory ? 4.6 : 5.3,
      phase: (index * 0.173) % 1,
    });
  });

  knowledgeEdges = [];
  for (let index = 1; index < knowledgeNodes.length; index += 1) {
    knowledgeEdges.push({ from: 0, to: index, phase: (index * 0.137) % 1, strength: 0.48 });
  }
  const memoryNodeIndices = knowledgeNodes
    .map((node, index) => node.type === "MEMORY" ? index : -1)
    .filter((index) => index >= 0);
  knowledgeNodes.forEach((keyword, keywordIndex) => {
    if (keyword.type !== "KEYWORD") return;
    let linked = 0;
    memoryNodeIndices.forEach((memoryIndex) => {
      if (linked >= 5) return;
      const memory = knowledgeNodes[memoryIndex];
      const keywordToken = keyword.tokens.values().next().value;
      if (!memory.tokens.has(keywordToken)) return;
      knowledgeEdges.push({
        from: memoryIndex,
        to: keywordIndex,
        phase: ((memoryIndex + keywordIndex) * 0.119) % 1,
        strength: 0.9,
      });
      linked += 1;
    });
  });
  knowledgeNodeCount.textContent =
    `${detailRecords.length} NODES // ${memoryRecords.length} MEMORY · ${keywordRecords.length} KEYWORDS`;
  knowledgeStatus.textContent = detailRecords.length
    ? "LOCAL MEMORY + RECENT CONVERSATION ANALYSIS // LIVE SIGNALS"
    : "NO STORED MEMORY OR CONVERSATION KEYWORDS // START A CHAT TO POPULATE";
  knowledgeDetail.textContent = detailRecords.length
    ? "ノードを選択すると関連する記憶や会話を表示します。"
    : "記憶データや会話キーワードはまだありません。会話やMEMORY BANKへの保存に応じてネットワークが形成されます。";
  knowledgeSelectedIndex = -1;
  requestKnowledgeFrame();
}

function showKnowledgeNode(index) {
  const node = knowledgeNodes[index];
  if (!node) return;
  knowledgeSelectedIndex = index;
  knowledgeDetail.textContent = `${node.type} // ${node.label}\n\n${node.detail}`;
  requestKnowledgeFrame();
}

function requestKnowledgeFrame() {
  if (!knowledgeDialog.open || knowledgeFrame !== null) return;
  knowledgeFrame = requestAnimationFrame(drawKnowledgeMatrix);
}

function drawKnowledgeMatrix(time) {
  knowledgeFrame = null;
  if (!knowledgeDialog.open) return;
  const context = knowledgeCanvas.getContext("2d");
  if (!context) {
    knowledgeStatus.textContent = "CANVAS UNAVAILABLE // MATRIX OFFLINE";
    return;
  }
  const bounds = knowledgeCanvas.getBoundingClientRect();
  if (!bounds.width || !bounds.height) {
    knowledgeFrame = requestAnimationFrame(drawKnowledgeMatrix);
    return;
  }
  const width = bounds.width;
  const height = bounds.height;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const pixelWidth = Math.round(width * pixelRatio);
  const pixelHeight = Math.round(height * pixelRatio);
  if (knowledgeCanvas.width !== pixelWidth || knowledgeCanvas.height !== pixelHeight) {
    knowledgeCanvas.width = pixelWidth;
    knowledgeCanvas.height = pixelHeight;
  }
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);
  const markMode = hudMode === "mark-iii";
  const primary = markMode ? "#ffb700" : "#00f3ff";
  const secondary = markMode ? "#ff453a" : "#8bffff";
  const background = markMode ? "#17090d" : "#031017";
  context.fillStyle = background;
  context.fillRect(0, 0, width, height);
  context.strokeStyle = markMode ? "#ffb70012" : "#00f3ff12";
  context.lineWidth = 1;
  for (let x = 0; x < width; x += 24) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }
  for (let y = 0; y < height; y += 24) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }

  const pointFor = (node) => ({ x: node.x * width, y: node.y * height });
  knowledgeEdges.forEach((edge) => {
    const from = pointFor(knowledgeNodes[edge.from]);
    const to = pointFor(knowledgeNodes[edge.to]);
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.strokeStyle = markMode
      ? `rgba(255, 183, 0, ${0.08 + edge.strength * 0.17})`
      : `rgba(0, 243, 255, ${0.08 + edge.strength * 0.17})`;
    context.lineWidth = edge.strength > 0.7 ? 1 : 0.7;
    context.stroke();
    const pulse = ((time / 1800) + edge.phase) % 1;
    const pulseX = from.x + (to.x - from.x) * pulse;
    const pulseY = from.y + (to.y - from.y) * pulse;
    context.beginPath();
    context.arc(pulseX, pulseY, edge.strength > 0.7 ? 2 : 1.5, 0, Math.PI * 2);
    context.fillStyle = secondary;
    context.shadowBlur = 9;
    context.shadowColor = primary;
    context.fill();
    context.shadowBlur = 0;
  });

  const detailCount = knowledgeNodes.length - 1;
  knowledgeNodes.forEach((node, index) => {
    const point = pointFor(node);
    const selected = index === knowledgeSelectedIndex;
    const isCore = node.type === "CORE";
    const pulse = 0.8 + Math.sin(time / 420 + node.phase * Math.PI * 2) * 0.2;
    const radius = node.radius * (selected ? 1.45 : pulse);
    const color = isCore ? secondary : node.type === "MEMORY" ? primary : secondary;
    const glow = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius * (isCore ? 3 : 2.8));
    glow.addColorStop(0, isCore ? `${secondary}ee` : `${color}f2`);
    glow.addColorStop(0.35, `${color}90`);
    glow.addColorStop(1, `${color}00`);
    context.beginPath();
    context.arc(point.x, point.y, radius * (isCore ? 3 : 2.8), 0, Math.PI * 2);
    context.fillStyle = glow;
    context.fill();
    context.beginPath();
    context.arc(point.x, point.y, radius, 0, Math.PI * 2);
    context.fillStyle = isCore ? secondary : color;
    context.shadowColor = color;
    context.shadowBlur = selected ? 16 : 8;
    context.fill();
    context.shadowBlur = 0;
    if (isCore || detailCount <= 34 || selected || (node.type === "KEYWORD" && detailCount <= 55)) {
      context.font = isCore ? "600 9px monospace" : "7px monospace";
      context.textAlign = node.x > 0.5 ? "left" : "right";
      context.textBaseline = "middle";
      context.fillStyle = selected || isCore ? "#f2ffff" : markMode ? "#e5bf70" : "#8bcbd2";
      const offset = radius + 5;
      context.fillText(node.label, point.x + (node.x > 0.5 ? offset : -offset), point.y, 115);
    }
  });
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    knowledgeFrame = requestAnimationFrame(drawKnowledgeMatrix);
  }
}

function openKnowledgeMatrix() {
  [prototypeDialog, memoryDialog, holoDialog, ideaDialog, cipherDialog, simulationDialog, sentryDialog].forEach((dialog) => {
    if (dialog.open) dialog.close();
  });
  if (sentryPromptPending) {
    sentryPromptPending = false;
    lastOperatorActivity = Date.now();
    updateSentryStatus();
  }
  if (!knowledgeDialog.open) knowledgeDialog.showModal();
  rebuildKnowledgeMatrix();
  knowledgeResizeObserver?.disconnect();
  knowledgeResizeObserver = new ResizeObserver(requestKnowledgeFrame);
  knowledgeResizeObserver.observe(knowledgeCanvas);
}

function closeKnowledgeMatrix() {
  if (knowledgeFrame !== null) cancelAnimationFrame(knowledgeFrame);
  knowledgeFrame = null;
  knowledgeResizeObserver?.disconnect();
  knowledgeResizeObserver = null;
  knowledgePointer = null;
}

function formatWeatherValue(value, digits = 0) {
  return Number.isFinite(value)
    ? new Intl.NumberFormat("ja-JP", { maximumFractionDigits: digits }).format(value)
    : "--";
}

const WEATHER_CODE_DESCRIPTIONS = {
  0: "快晴",
  1: "おおむね晴れ",
  2: "一部曇り",
  3: "曇り",
  45: "霧",
  48: "着氷性の霧",
  51: "弱い霧雨",
  53: "霧雨",
  55: "強い霧雨",
  56: "弱い着氷性の霧雨",
  57: "強い着氷性の霧雨",
  61: "弱い雨",
  63: "雨",
  65: "強い雨",
  66: "弱い着氷性の雨",
  67: "強い着氷性の雨",
  71: "弱い雪",
  73: "雪",
  75: "強い雪",
  77: "細氷",
  80: "弱いにわか雨",
  81: "にわか雨",
  82: "強いにわか雨",
  85: "弱いにわか雪",
  86: "強いにわか雪",
  95: "雷雨",
  96: "ひょうを伴う雷雨",
  99: "強いひょうを伴う雷雨",
};

function isValidWeatherData(weather) {
  return Boolean(
    weather &&
      weather.location === "北海道釧路市" &&
      weather.current &&
      typeof weather.current.time === "string" &&
      Number.isFinite(weather.current.temperature_c) &&
      Number.isInteger(weather.current.weather_code) &&
      typeof weather.current.description === "string" &&
      Number.isFinite(weather.current.wind_speed_kmh) &&
      weather.today &&
      typeof weather.today.date === "string" &&
      Number.isInteger(weather.today.weather_code) &&
      typeof weather.today.description === "string" &&
      Number.isFinite(weather.today.high_c) &&
      Number.isFinite(weather.today.low_c) &&
      Array.isArray(weather.forecast) &&
      weather.forecast.length === 7 &&
      weather.forecast.every((day) =>
        day &&
        typeof day.date === "string" &&
        Number.isInteger(day.weather_code) &&
        typeof day.description === "string" &&
        Number.isFinite(day.high_c) &&
        Number.isFinite(day.low_c)) &&
      typeof weather.fetched_at === "string",
  );
}

function normalizeOpenMeteoWeather(payload) {
  const toNumber = (value) => typeof value === "number" && Number.isFinite(value) ? value : Number.NaN;
  const current = payload?.current;
  const daily = payload?.daily;
  if (
    !current ||
    !daily ||
    !Array.isArray(daily.time) ||
    !Array.isArray(daily.weather_code) ||
    !Array.isArray(daily.temperature_2m_max) ||
    !Array.isArray(daily.temperature_2m_min) ||
    daily.time.length < 7 ||
    [daily.weather_code, daily.temperature_2m_max, daily.temperature_2m_min]
      .some((values) => values.length < 7)
  ) {
    throw new TypeError("Open-Meteoから7日分の予報データを受信できませんでした。");
  }
  const currentCode = toNumber(current.weather_code);
  const temperature = toNumber(current.temperature_2m);
  const windSpeed = toNumber(current.wind_speed_10m);
  if (
    current.temperature_2m === null ||
    current.wind_speed_10m === null ||
    current.weather_code === null ||
    !current.time ||
    !Number.isInteger(currentCode) ||
    !Number.isFinite(temperature) ||
    !Number.isFinite(windSpeed)
  ) {
    throw new TypeError("Open-Meteoの現在の気象データの形式が正しくありません。");
  }
  const forecast = daily.time.slice(0, 7).map((date, index) => {
    const code = toNumber(daily.weather_code[index]);
    const high = toNumber(daily.temperature_2m_max[index]);
    const low = toNumber(daily.temperature_2m_min[index]);
    if (
      !date ||
      daily.weather_code[index] === null ||
      daily.temperature_2m_max[index] === null ||
      daily.temperature_2m_min[index] === null ||
      !Number.isInteger(code) ||
      !Number.isFinite(high) ||
      !Number.isFinite(low)
    ) {
      throw new TypeError("Open-Meteoの日別予報データの形式が正しくありません。");
    }
    return {
      date,
      weather_code: code,
      description: WEATHER_CODE_DESCRIPTIONS[code] || "天候情報",
      high_c: high,
      low_c: low,
    };
  });
  return {
    location: "北海道釧路市",
    latitude: 42.9849,
    longitude: 144.3814,
    timezone: "Asia/Tokyo",
    current: {
      time: current.time,
      temperature_c: temperature,
      weather_code: currentCode,
      description: WEATHER_CODE_DESCRIPTIONS[currentCode] || "天候情報",
      wind_speed_kmh: windSpeed,
    },
    today: {
      date: forecast[0].date,
      weather_code: forecast[0].weather_code,
      description: forecast[0].description,
      high_c: forecast[0].high_c,
      low_c: forecast[0].low_c,
    },
    forecast,
    fetched_at: new Date().toISOString(),
    source: "Open-Meteo",
  };
}

function displayWeather(weather, { cached = false, warning = "" } = {}) {
  if (!isValidWeatherData(weather)) throw new TypeError("保存または取得した天気データの形式が正しくありません。");
  kushiroWeather = weather;
  document.querySelector("#weather-current").textContent =
    formatWeatherValue(weather.current.temperature_c);
  document.querySelector("#weather-description").textContent =
    weather.current.description.toUpperCase();
  document.querySelector("#weather-wind").textContent =
    formatWeatherValue(weather.current.wind_speed_kmh, 1);
  document.querySelector("#weather-high").textContent = formatWeatherValue(weather.today.high_c);
  document.querySelector("#weather-low").textContent = formatWeatherValue(weather.today.low_c);
  const observedTime = weather.current.time.slice(11, 16);
  document.querySelector("#weather-updated").textContent =
    `DATA // ${cached ? "CACHE" : "LIVE"} ${observedTime}`;
  document.querySelector("#weather-updated").title =
    `観測時刻 ${weather.current.time} // 取得 ${weather.fetched_at}`;
  renderWeatherForecast(weather.forecast);
  weatherPanel.dataset.state = cached ? "cached" : "ready";
  weatherError.textContent = warning;
  weatherError.hidden = !warning;
  updateTelemetryTicker();
}

function restoreWeatherCache() {
  try {
    const stored = window.localStorage.getItem(WEATHER_CACHE_STORAGE_KEY);
    if (!stored) return false;
    const cached = JSON.parse(stored);
    if (!cached || !isValidWeatherData(cached.data) || !Number.isFinite(cached.fetchedAt)) {
      throw new TypeError("保存された釧路市の天気キャッシュ形式が正しくありません。");
    }
    kushiroWeatherFetchedAt = cached.fetchedAt;
    displayWeather(cached.data, { cached: true });
    return true;
  } catch (error) {
    console.error("Kushiro weather cache could not be restored.", error);
    weatherError.textContent = "保存済みの天気データを読み込めませんでした。";
    weatherError.hidden = false;
    return false;
  }
}

async function fetchOpenMeteoWeather() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEATHER_REQUEST_TIMEOUT);
  try {
    const response = await fetch(OPEN_METEO_KUSHIRO_URL, {
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Open-Meteo APIがHTTP ${response.status}を返しました。`);
    return normalizeOpenMeteoWeather(await response.json());
  } finally {
    clearTimeout(timeout);
  }
}

async function requestOpenMeteoWithRetry() {
  try {
    return await fetchOpenMeteoWeather();
  } catch (firstError) {
    console.warn("Direct Open-Meteo request failed; retrying once in two seconds.", firstError);
    await new Promise((resolve) => setTimeout(resolve, WEATHER_RETRY_DELAY));
    try {
      return await fetchOpenMeteoWeather();
    } catch (retryError) {
      retryError.message = `Open-Meteoへの再試行にも失敗しました: ${retryError.message}`;
      throw retryError;
    }
  }
}

function refreshWeather() {
  if (weatherRefreshPromise) return weatherRefreshPromise;
  weatherLastAttemptAt = Date.now();
  weatherRefreshPromise = (async () => {
    try {
      const weather = await requestOpenMeteoWithRetry();
      const fetchedAt = Date.now();
      try {
        window.localStorage.setItem(
          WEATHER_CACHE_STORAGE_KEY,
          JSON.stringify({ data: weather, fetchedAt }),
        );
      } catch (error) {
        console.error("Kushiro weather could not be cached in localStorage.", error);
      }
      kushiroWeatherFetchedAt = fetchedAt;
      displayWeather(weather);
      return weather;
    } catch (error) {
      console.error("Direct Open-Meteo weather request failed.", error);
      if (!kushiroWeather) restoreWeatherCache();
      if (kushiroWeather) {
        displayWeather(kushiroWeather, {
          cached: true,
          warning: `最新データに接続できないため、保存済みデータを表示しています。${error.message}`,
        });
        return kushiroWeather;
      }
      document.querySelector("#weather-current").textContent = "--";
      document.querySelector("#weather-description").textContent = "DATA UNAVAILABLE";
      document.querySelector("#weather-wind").textContent = "--";
      document.querySelector("#weather-high").textContent = "--";
      document.querySelector("#weather-low").textContent = "--";
      document.querySelector("#weather-updated").textContent = "DATA // OFFLINE";
      forecastList.replaceChildren();
      const unavailable = document.createElement("div");
      unavailable.className = "forecast-placeholder";
      unavailable.textContent = "FORECAST // UNAVAILABLE";
      forecastList.append(unavailable);
      weatherPanel.dataset.state = "error";
      weatherError.textContent = error.message;
      weatherError.hidden = false;
      updateTelemetryTicker();
      return null;
    } finally {
      weatherRefreshPromise = null;
    }
  })();
  return weatherRefreshPromise;
}

async function getWeatherForChat() {
  if (weatherRefreshPromise) return weatherRefreshPromise;
  if (
    kushiroWeather &&
    (Date.now() - kushiroWeatherFetchedAt < WEATHER_REFRESH_INTERVAL ||
      Date.now() - weatherLastAttemptAt < WEATHER_REFRESH_INTERVAL)
  ) {
    return kushiroWeather;
  }
  return refreshWeather();
}

function renderWeatherForecast(forecast) {
  const fragment = document.createDocumentFragment();
  forecast.forEach((day, index) => {
    const date = new Date(`${day.date}T12:00:00`);
    const row = document.createElement("div");
    row.className = `forecast-row${index === 0 ? " is-today" : ""}`;
    const dateLabel = document.createElement("span");
    dateLabel.className = "forecast-date";
    dateLabel.textContent = index === 0
      ? "TODAY"
      : new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date).toUpperCase();
    const description = document.createElement("span");
    description.className = "forecast-description";
    description.textContent = day.description;
    const temperatures = document.createElement("span");
    temperatures.className = "forecast-temperatures";
    temperatures.textContent =
      `${formatWeatherValue(day.high_c)}° / ${formatWeatherValue(day.low_c)}°`;
    row.append(dateLabel, description, temperatures);
    fragment.append(row);
  });
  forecastList.replaceChildren(fragment);
}

function normalizeSearchMetadata(search) {
  if (!search || !["complete", "failed"].includes(search.status)) return null;
  const results = Array.isArray(search.results)
    ? search.results
        .filter(
          (result) =>
            result &&
            typeof result.title === "string" &&
            typeof result.summary === "string" &&
            typeof result.url === "string",
        )
        .slice(0, 5)
        .map((result) => ({
          title: result.title.slice(0, 300),
          summary: result.summary.slice(0, 1000),
          url: result.url.slice(0, 2000),
        }))
    : [];
  return {
    status: search.status,
    query: typeof search.query === "string" ? search.query.slice(0, 300) : "",
    results,
    warning: typeof search.warning === "string" ? search.warning : "",
  };
}

function scrollMessageIntoView(element, block = "start") {
  if (!element) return;
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const style = window.getComputedStyle(messagesElement);
  const containerRect = messagesElement.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  const padding = Number.parseFloat(style[block === "start" ? "paddingTop" : "paddingBottom"]) || 0;
  const visibleEdge = block === "start"
    ? containerRect.top + messagesElement.clientTop + padding
    : containerRect.top +
      messagesElement.clientTop +
      messagesElement.clientHeight -
      padding;
  const elementEdge = block === "start" ? elementRect.top : elementRect.bottom;
  messagesElement.scrollTo({
    top: messagesElement.scrollTop + elementEdge - visibleEdge,
    behavior: reduceMotion ? "auto" : "smooth",
  });
}

function addSearchReceipt(search) {
  const metadata = normalizeSearchMetadata(search);
  if (!metadata) return;

  const receipt = document.createElement("article");
  receipt.className = `search-receipt search-${metadata.status}`;
  const heading = document.createElement("div");
  heading.className = "search-receipt-heading";
  const status = document.createElement("strong");
  status.textContent = metadata.status === "complete"
    ? "NETWORK SEARCH COMPLETE"
    : "NETWORK SEARCH FAILED";
  const japaneseStatus = document.createElement("span");
  japaneseStatus.textContent = metadata.status === "complete"
    ? "外部データベース検索完了"
    : "外部データベース検索失敗";
  heading.append(status, japaneseStatus);
  receipt.append(heading);

  if (metadata.query) {
    const query = document.createElement("p");
    query.className = "search-query";
    query.textContent = `QUERY // ${metadata.query}`;
    receipt.append(query);
  }

  if (metadata.results.length) {
    const sources = document.createElement("ul");
    sources.className = "search-sources";
    metadata.results.forEach((result) => {
      const link = document.createElement("a");
      link.href = result.url;
      if (!["http:", "https:"].includes(link.protocol) || !link.hostname) return;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = result.title;
      const source = document.createElement("li");
      const address = document.createElement("a");
      address.href = link.href;
      address.target = "_blank";
      address.rel = "noopener noreferrer";
      address.className = "search-source-url";
      address.textContent = link.href;
      const summary = document.createElement("p");
      summary.textContent = result.summary;
      source.append(link, summary, address);
      sources.append(source);
    });
    if (sources.childElementCount) receipt.append(sources);
  } else {
    const noSources = document.createElement("p");
    noSources.className = "search-empty";
    noSources.textContent = metadata.status === "complete"
      ? "参照できる検索結果は見つかりませんでした。"
      : metadata.warning || "検索結果を取得できませんでした。";
    receipt.append(noSources);
  }
  messagesElement.append(receipt);
}

function detectProtocol(text) {
  if (/ブリーフィングして|ブリーフィングを?(?:お願い|実行|開始)|朝の報告して|briefing/i.test(text)) {
    return "briefing";
  }
  for (const protocol of ["coding", "gaming", "watching"]) {
    const labelPattern = protocol === "coding" ? "(?:coding|コーディング)" : protocol;
    if (
      new RegExp(`${labelPattern}.*(?:開|起動)|(?:開|起動).*(?:${labelPattern})`, "i").test(text)
    ) {
      return protocol;
    }
  }
  return null;
}

function openProtocolTab(protocol) {
  const url = PROTOCOLS[protocol]?.url;
  if (!url) return protocol === "briefing";
  try {
    const tab = window.open("about:blank", "_blank");
    if (!tab) return false;
    tab.opener = null;
    tab.location.replace(url);
    playSfx("launch");
    return true;
  } catch (error) {
    console.warn(`Could not open the ${protocol} launcher tab.`, error);
    return false;
  }
}

function addProtocolReceipt(protocol, opened) {
  const configuration = PROTOCOLS[protocol];
  if (!configuration) return;
  const receipt = document.createElement("article");
  receipt.className = `protocol-receipt${opened ? "" : " protocol-blocked"}`;
  const status = document.createElement("strong");
  status.textContent = opened
    ? `PROTOCOL EXECUTED // ${configuration.label}`
    : `POP-UP BLOCKED // ${configuration.label}`;
  receipt.append(status);
  if (configuration.url) {
    const link = document.createElement("a");
    link.href = configuration.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = opened ? "OPEN DESTINATION ↗" : "CLICK TO OPEN DESTINATION ↗";
    receipt.append(link);
  } else {
    const detail = document.createElement("span");
    detail.textContent = "DAILY WEATHER + NEWS REPORT";
    receipt.append(detail);
  }
  messagesElement.append(receipt);
}

function refreshMemory() {
  const restored = restoreMemories();
  if (memoryDialog.open) {
    memoryDialogStatus.textContent = restored
      ? `${memoryItems.length}件のローカル記憶を読み込みました。`
      : "記憶データを読み込めませんでした。";
  }
}

function deleteMemory(memoryId) {
  memoryItems = memoryItems.filter((memory) => memory.id !== memoryId);
  if (persistMemories()) {
    renderMemoryList(memoryItems);
    memoryDialogStatus.textContent = "記憶を削除し、ブラウザーに保存しました。";
  }
}

function clearMemory() {
  if (!memoryItems.length || !window.confirm("保存されている長期記憶をすべて削除しますか？")) return;
  memoryItems = [];
  if (persistMemories()) {
    renderMemoryList(memoryItems);
    memoryDialogStatus.textContent = "すべての記憶を削除し、変更を保存しました。";
  }
}

function syncCoreState() {
  const activelyListening = isListening && recognitionMode !== "standby";
  core.classList.toggle("is-thinking", requestInProgress);
  core.classList.toggle("is-listening", activelyListening);
  core.classList.toggle("is-speaking", isSpeaking);
  core.classList.toggle("is-wake", wakeActivated);
  coreStage.classList.toggle("is-busy", requestInProgress);
  coreStage.classList.toggle("is-active", activelyListening || isSpeaking || requestInProgress || wakeActivated);
  reactorStatus.textContent = wakeActivated
    ? "WAKE DETECTED"
    : activelyListening
      ? "LISTENING"
      : voiceStandbyEnabled && isListening
        ? "STANDBY"
        : isSpeaking
          ? "SPEAKING"
          : requestInProgress
            ? "PROCESSING"
            : "NOMINAL";
  coreCaption.textContent = wakeActivated
    ? "はい。ご用件をどうぞ。"
    : activelyListening
      ? "聞き取り中です、伊吹様..."
      : voiceStandbyEnabled && isListening
        ? "ウェイクワードを待機しています..."
        : isSpeaking
          ? "音声で応答しています、伊吹様..."
          : requestInProgress
            ? "応答を生成中です、伊吹様..."
            : "システムは正常です。ご用件をどうぞ。";
  connectionStatus.textContent = wakeActivated
    ? "WAKE WORD"
    : requestInProgress
      ? "PROCESSING"
      : activelyListening
        ? "VOICE INPUT"
        : voiceStandbyEnabled && isListening
          ? "VOICE STANDBY"
          : isSpeaking
            ? "VOICE OUTPUT"
            : "SYSTEM ONLINE";
}

function setVoiceStatus(message, state = "ready") {
  const activelyListening = isListening && recognitionMode !== "standby";
  voiceStatus.textContent = message;
  voiceStatus.dataset.state = state;
  microphoneButton.classList.toggle("is-listening", activelyListening);
  microphoneButton.setAttribute("aria-pressed", String(activelyListening));
  microphoneButton.setAttribute(
    "aria-label",
    activelyListening ? "音声入力をキャンセル" : "音声入力を開始",
  );
  microphoneLabel.textContent = activelyListening ? "STOP" : "MIC";
}

function updateVoiceStandbyButton() {
  standbyButton.setAttribute("aria-pressed", String(voiceStandbyEnabled));
  standbyButton.setAttribute(
    "aria-label",
    `ウェイクワード待機モードを${voiceStandbyEnabled ? "オフ" : "オン"}にする`,
  );
  standbyButton.title = `ウェイクワード待機モード ${voiceStandbyEnabled ? "ON" : "OFF"}`;
  standbyButton.classList.toggle("is-enabled", voiceStandbyEnabled);
  standbyLabel.textContent = voiceStandbyEnabled ? "ON" : "OFF";
}

function scheduleStandbyRecognition() {
  if (!voiceStandbyEnabled || housePartyPending || cleanSlatePending) return;
  clearTimeout(standbyRestartTimer);
  standbyRestartTimer = setTimeout(() => {
    standbyRestartTimer = null;
    if (
      voiceStandbyEnabled &&
      !housePartyPending &&
      !cleanSlatePending &&
      !recognition &&
      !requestInProgress &&
      !isSpeaking
    ) {
      startRecognition("standby");
    }
  }, 250);
}

function getAudioContext(allowActivation = false) {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) {
    return null;
  }
  if (!audioContext && !allowActivation) return null;
  try {
    audioContext ||= new AudioContextConstructor();
    if (!sfxMasterGain) {
      sfxMasterGain = audioContext.createGain();
      sfxMasterGain.gain.value = sfxEnabled ? sfxVolume : 0;
      sfxMasterGain.connect(audioContext.destination);
    }
    const hasUserActivation = !navigator.userActivation || navigator.userActivation.isActive;
    if (audioContext.state === "suspended" && allowActivation && hasUserActivation) {
      void audioContext.resume().catch((error) => {
        console.error("Web Audio context could not be resumed.", error);
      });
    }
    return audioContext;
  } catch (error) {
    console.error("Web Audio context could not be initialized.", error);
    return null;
  }
}

function playTone(context, frequency, endFrequency, startAt, duration, level, type = "sine") {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const peak = Math.max(0.0001, level);
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  if (endFrequency !== frequency) {
    oscillator.frequency.exponentialRampToValueAtTime(endFrequency, startAt + duration);
  }
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(peak, startAt + Math.min(0.012, duration / 3));
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  oscillator.connect(gain);
  gain.connect(sfxMasterGain);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.01);
}

function playFmTone(
  context,
  frequency,
  endFrequency,
  modulationFrequency,
  modulationDepth,
  startAt,
  duration,
  level,
  filterFrequency,
  type = "sine",
) {
  const carrier = context.createOscillator();
  const modulator = context.createOscillator();
  const modulationGain = context.createGain();
  const filter = context.createBiquadFilter();
  const envelope = context.createGain();
  carrier.type = type;
  carrier.frequency.setValueAtTime(frequency, startAt);
  if (endFrequency !== frequency) {
    carrier.frequency.exponentialRampToValueAtTime(endFrequency, startAt + duration);
  }
  modulator.type = "sine";
  modulator.frequency.setValueAtTime(modulationFrequency, startAt);
  modulationGain.gain.setValueAtTime(modulationDepth, startAt);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(filterFrequency, startAt);
  filter.frequency.exponentialRampToValueAtTime(
    Math.max(200, filterFrequency * 0.38),
    startAt + duration,
  );
  filter.Q.setValueAtTime(2.4, startAt);
  envelope.gain.setValueAtTime(0.0001, startAt);
  envelope.gain.exponentialRampToValueAtTime(
    Math.max(0.0001, level),
    startAt + Math.min(0.008, duration / 3),
  );
  envelope.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  modulator.connect(modulationGain);
  modulationGain.connect(carrier.frequency);
  carrier.connect(filter);
  filter.connect(envelope);
  envelope.connect(sfxMasterGain);
  modulator.start(startAt);
  carrier.start(startAt);
  modulator.stop(startAt + duration + 0.01);
  carrier.stop(startAt + duration + 0.01);
}

function playNoise(context, startAt, duration, level, cutoff) {
  const frameCount = Math.max(1, Math.ceil(context.sampleRate * duration));
  const buffer = context.createBuffer(1, frameCount, context.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let index = 0; index < frameCount; index += 1) {
    samples[index] = Math.random() * 2 - 1;
  }
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  const peak = level;
  filter.type = "highpass";
  filter.frequency.setValueAtTime(cutoff, startAt);
  source.buffer = buffer;
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(peak, startAt + Math.min(0.006, duration / 3));
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(sfxMasterGain);
  source.start(startAt);
}

function playSfx(sound, allowActivation = false) {
  if (!sfxEnabled || sfxVolume <= 0) return;
  const context = getAudioContext(allowActivation);
  if (!context) return;
  if (context.state === "suspended" && !allowActivation) return;
  const now = context.currentTime + 0.005;
  try {
    if (sound === "hover") {
      playFmTone(context, 1780, 1260, 3900, 95, now, 0.042, 0.026, 5200, "square");
      playFmTone(context, 2670, 2080, 5200, 65, now + 0.008, 0.035, 0.014, 6200);
    } else if (sound === "click") {
      playFmTone(context, 1520, 880, 3100, 180, now, 0.058, 0.075, 4800, "triangle");
      playFmTone(context, 2280, 1740, 4400, 120, now + 0.018, 0.045, 0.05, 6200, "square");
      playNoise(context, now, 0.014, 0.026, 3100);
    } else if (sound === "transmit") {
      playFmTone(context, 330, 1120, 74, 260, now, 0.32, 0.09, 2700, "sawtooth");
      playFmTone(context, 660, 1760, 1330, 310, now + 0.025, 0.25, 0.052, 3600, "triangle");
      playFmTone(context, 990, 2260, 2230, 170, now + 0.105, 0.2, 0.032, 5100);
      playNoise(context, now + 0.015, 0.13, 0.022, 2200);
    } else if (sound === "processing") {
      playFmTone(context, 118, 142, 36, 22, now, 0.28, 0.025, 420, "sine");
      playFmTone(context, 205, 168, 53, 32, now + 0.29, 0.23, 0.018, 610, "triangle");
      playFmTone(context, 126, 158, 41, 22, now + 0.82, 0.24, 0.023, 440, "sine");
      playNoise(context, now + 0.28, 0.055, 0.006, 760);
    } else if (sound === "ready") {
      playFmTone(context, 523.25, 523.25, 1046, 12, now, 0.48, 0.072, 2600);
      playFmTone(context, 659.25, 659.25, 1318, 16, now + 0.035, 0.45, 0.06, 3200);
      playFmTone(context, 783.99, 783.99, 1568, 18, now + 0.075, 0.43, 0.052, 3800);
      playFmTone(context, 1046.5, 1046.5, 2093, 22, now + 0.12, 0.38, 0.026, 4700, "triangle");
    } else if (sound === "rank-up") {
      playFmTone(context, 392, 523.25, 784, 18, now, 0.36, 0.07, 2200, "triangle");
      playFmTone(context, 523.25, 659.25, 1046, 16, now + 0.11, 0.42, 0.064, 3200);
      playFmTone(context, 659.25, 783.99, 1318, 20, now + 0.23, 0.48, 0.052, 4200, "triangle");
      playFmTone(context, 783.99, 1046.5, 1568, 24, now + 0.35, 0.54, 0.042, 5200);
    } else if (sound === "launch") {
      playFmTone(context, 145, 430, 48, 84, now, 0.46, 0.095, 1400, "sawtooth");
      playFmTone(context, 810, 190, 1220, 115, now + 0.035, 0.4, 0.058, 2500, "triangle");
      playFmTone(context, 365, 960, 730, 145, now + 0.14, 0.28, 0.038, 3400);
      playNoise(context, now, 0.22, 0.026, 900);
    } else if (sound === "wake") {
      playFmTone(context, 490, 1380, 102, 240, now, 0.26, 0.11, 3200, "triangle");
      playFmTone(context, 980, 1940, 1960, 240, now + 0.095, 0.23, 0.065, 4300);
      playFmTone(context, 1470, 2500, 2940, 125, now + 0.16, 0.17, 0.035, 5400, "square");
      playNoise(context, now + 0.04, 0.12, 0.025, 2450);
    } else if (sound === "boot") {
      playFmTone(context, 42, 116, 28, 17, now, 1.95, 0.12, 300, "sawtooth");
      playFmTone(context, 58, 158, 41, 22, now + 0.08, 1.62, 0.065, 440, "triangle");
      playFmTone(context, 220, 570, 74, 115, now + 0.42, 0.92, 0.035, 1400);
      playFmTone(context, 880, 1320, 1760, 145, now + 1.38, 0.18, 0.055, 4200, "square");
      playFmTone(context, 1320, 1880, 2640, 105, now + 1.67, 0.22, 0.045, 5200, "triangle");
      playNoise(context, now + 1.32, 0.18, 0.018, 2800);
    } else if (sound === "armor-on") {
      playFmTone(context, 790, 128, 62, 180, now, 0.58, 0.12, 2100, "sawtooth");
      playFmTone(context, 1120, 230, 1690, 210, now + 0.09, 0.46, 0.062, 3000, "triangle");
      playFmTone(context, 92, 54, 46, 34, now + 0.39, 0.36, 0.11, 560, "square");
      playFmTone(context, 590, 190, 885, 125, now + 0.37, 0.24, 0.075, 1900, "triangle");
      playNoise(context, now + 0.38, 0.17, 0.045, 700);
    } else if (sound === "armor-off") {
      playFmTone(context, 520, 1080, 780, 145, now, 0.32, 0.085, 3200, "triangle");
      playFmTone(context, 980, 360, 1470, 170, now + 0.15, 0.38, 0.052, 2600);
      playFmTone(context, 170, 72, 56, 38, now + 0.28, 0.3, 0.075, 640, "sawtooth");
      playNoise(context, now + 0.27, 0.12, 0.032, 1100);
    } else if (sound === "house-party") {
      for (let index = 0; index < 6; index += 1) {
        const startAt = now + index * 0.48;
        const frequency = index % 2 === 0 ? 640 : 920;
        playFmTone(context, frequency, frequency * 1.08, 52, 48, startAt, 0.43, 0.13, 1900, "sawtooth");
        playNoise(context, startAt, 0.025, 0.018, 1700);
      }
    } else if (sound === "cipher") {
      playFmTone(context, 1380, 760, 2020, 160, now, 0.12, 0.055, 4000, "square");
      playFmTone(context, 890, 1540, 1260, 90, now + 0.09, 0.15, 0.035, 5200);
      playNoise(context, now + 0.02, 0.045, 0.018, 2600);
    } else if (sound === "countdown") {
      playFmTone(context, 1040, 720, 180, 32, now, 0.15, 0.075, 3400, "square");
      playNoise(context, now, 0.025, 0.012, 2800);
    } else if (sound === "clean-slate-impact") {
      playFmTone(context, 96, 38, 42, 30, now, 0.9, 0.18, 520, "sawtooth");
      playFmTone(context, 460, 110, 75, 120, now + 0.04, 0.72, 0.12, 1300, "triangle");
      playFmTone(context, 1760, 660, 840, 220, now + 0.12, 0.42, 0.055, 4200, "square");
      playNoise(context, now, 0.42, 0.065, 950);
    } else if (sound === "sentry-alert") {
      playFmTone(context, 720, 540, 88, 42, now, 0.34, 0.075, 2400, "square");
      playFmTone(context, 880, 660, 110, 48, now + 0.42, 0.34, 0.075, 2700, "square");
      playNoise(context, now + 0.02, 0.045, 0.018, 1900);
    } else if (sound === "icing-alert") {
      playFmTone(context, 520, 460, 72, 35, now, 0.48, 0.085, 2100, "triangle");
      playFmTone(context, 392, 330, 55, 24, now + 0.52, 0.54, 0.06, 1700);
      playNoise(context, now + 0.02, 0.06, 0.016, 1150);
    } else if (sound === "orbital-drop") {
      playFmTone(context, 92, 48, 34, 28, now, 1.15, 0.13, 420, "sawtooth");
      playFmTone(context, 740, 128, 62, 150, now + 0.42, 0.58, 0.085, 2100, "triangle");
      playNoise(context, now + 0.83, 0.34, 0.085, 1100);
      playFmTone(context, 196, 74, 48, 32, now + 1.12, 0.62, 0.12, 680, "square");
    } else if (sound === "timeline-alert") {
      playFmTone(context, 880, 660, 1320, 84, now, 0.32, 0.06, 2800, "triangle");
      playFmTone(context, 1174.66, 880, 1760, 112, now + 0.22, 0.36, 0.055, 3400);
    } else if (sound === "synthesize") {
      playFmTone(context, 220, 440, 62, 170, now, 0.42, 0.075, 1600, "sawtooth");
      for (let index = 0; index < 6; index += 1) {
        const startAt = now + 0.25 + index * 0.13;
        const frequency = 520 + index * 137;
        playFmTone(context, frequency, frequency * 1.22, 48, 90, startAt, 0.3, 0.038, 3600, "triangle");
      }
    } else if (sound === "lock") {
      playFmTone(context, 780, 110, 54, 22, now, 0.38, 0.09, 1200, "sawtooth");
      playFmTone(context, 980, 620, 1470, 110, now + 0.14, 0.22, 0.035, 3100, "square");
      playNoise(context, now, 0.12, 0.025, 1500);
    } else if (sound === "unlock") {
      playFmTone(context, 410, 840, 620, 70, now, 0.28, 0.06, 2400, "triangle");
      playFmTone(context, 660, 990, 1320, 120, now + 0.08, 0.36, 0.045, 3600);
    }
  } catch (error) {
    console.error(`The ${sound} sound effect could not be played.`, error);
  }
}

function updateAmbientButton(enabled, status = enabled ? "ACTIVE" : "STANDBY") {
  const label = enabled ? "ACTIVE" : status === "STANDBY" ? "STANDBY" : "OFFLINE";
  ambientToggle.setAttribute("aria-pressed", String(enabled));
  ambientToggleState.textContent = enabled ? "ON" : "OFF";
  ambientStatus.textContent = `● ${label}`;
  ambientStatus.title = enabled ? "Generated reactor ambience // 60-110 Hz" : status;
}

function scheduleAmbientPulse(generation) {
  if (generation !== ambientGeneration || !ambientBus) return;
  const delay = 6000 + Math.random() * 8000;
  ambientPulseTimeout = setTimeout(() => {
    ambientPulseTimeout = null;
    if (generation !== ambientGeneration || !ambientBus || !audioContext) return;
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const envelope = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(540, now);
    oscillator.frequency.exponentialRampToValueAtTime(920, now + 0.06);
    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(0.035, now + 0.012);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + 0.17);
    oscillator.connect(envelope);
    envelope.connect(ambientBus);
    oscillator.start(now);
    oscillator.stop(now + 0.18);
    scheduleAmbientPulse(generation);
  }, delay);
}

function startAmbientCore() {
  const context = getAudioContext(true);
  if (!context) {
    updateAmbientButton(false, "AUDIO UNAVAILABLE");
    return;
  }
  ambientGeneration += 1;
  const generation = ambientGeneration;
  const bus = context.createGain();
  const filter = context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(210, context.currentTime);
  bus.gain.setValueAtTime(0.0001, context.currentTime);
  bus.gain.setTargetAtTime(0.12, context.currentTime, 0.45);
  filter.connect(bus);
  bus.connect(context.destination);
  ambientBus = bus;
  ambientOscillators = [60, 82.4, 110].map((frequency, index) => {
    const oscillator = context.createOscillator();
    const level = context.createGain();
    oscillator.type = index === 1 ? "triangle" : "sine";
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    level.gain.setValueAtTime([0.24, 0.07, 0.035][index], context.currentTime);
    oscillator.connect(level);
    level.connect(filter);
    oscillator.start();
    return oscillator;
  });
  updateAmbientButton(true, "ACTIVE // 60-110 HZ");
  scheduleAmbientPulse(generation);
}

function stopAmbientCore() {
  ambientGeneration += 1;
  clearTimeout(ambientPulseTimeout);
  ambientPulseTimeout = null;
  const bus = ambientBus;
  const oscillators = ambientOscillators;
  ambientBus = null;
  ambientOscillators = [];
  updateAmbientButton(false);
  if (!bus || !audioContext) return;

  const context = audioContext;
  const stopAt = context.currentTime + 1.25;
  bus.gain.cancelScheduledValues(context.currentTime);
  bus.gain.setTargetAtTime(0.0001, context.currentTime, 0.25);
  oscillators.forEach((oscillator) => oscillator.stop(stopAt));
  setTimeout(() => {
    oscillators.forEach((oscillator) => oscillator.disconnect());
    bus.disconnect();
  }, 1500);
}

function toggleAmbientCore() {
  if (ambientBus) stopAmbientCore();
  else startAmbientCore();
}

function makeHoloPart(name, center, vertices, edges, explode = [0, 0, 0]) {
  return { name, center, vertices, edges, explode };
}

function createCircleMesh(radius, plane, segments = 36) {
  const vertices = [];
  const edges = [];
  for (let index = 0; index < segments; index += 1) {
    const angle = (index / segments) * Math.PI * 2;
    const cosine = Math.cos(angle) * radius;
    const sine = Math.sin(angle) * radius;
    vertices.push(
      plane === "xy" ? [cosine, sine, 0]
        : plane === "xz" ? [cosine, 0, sine]
          : [0, cosine, sine],
    );
    edges.push([index, (index + 1) % segments]);
  }
  return { vertices, edges };
}

function createEllipsoidMesh(radii, latitudeSteps = 10, longitudeSteps = 22) {
  const vertices = [];
  const edges = [];
  const rows = [];
  for (let latitude = 1; latitude < latitudeSteps; latitude += 1) {
    const angle = -Math.PI / 2 + (latitude / latitudeSteps) * Math.PI;
    const row = [];
    for (let longitude = 0; longitude < longitudeSteps; longitude += 1) {
      const azimuth = (longitude / longitudeSteps) * Math.PI * 2;
      row.push(vertices.length);
      vertices.push([
        radii[0] * Math.cos(angle) * Math.cos(azimuth),
        radii[1] * Math.sin(angle),
        radii[2] * Math.cos(angle) * Math.sin(azimuth),
      ]);
    }
    rows.push(row);
  }
  rows.forEach((row, rowIndex) => {
    row.forEach((vertexIndex, index) => {
      edges.push([vertexIndex, row[(index + 1) % row.length]]);
      if (rowIndex < rows.length - 1) edges.push([vertexIndex, rows[rowIndex + 1][index]]);
    });
  });
  const top = vertices.push([0, radii[1], 0]) - 1;
  const bottom = vertices.push([0, -radii[1], 0]) - 1;
  rows[0].forEach((index) => edges.push([top, index]));
  rows.at(-1).forEach((index) => edges.push([bottom, index]));
  return { vertices, edges };
}

function createFaceplateMesh() {
  const vertices = [];
  const edges = [];
  const columns = 11;
  const rows = 8;
  for (let row = 0; row < rows; row += 1) {
    const y = -0.34 + (row / (rows - 1)) * 0.68;
    for (let column = 0; column < columns; column += 1) {
      const x = -0.5 + (column / (columns - 1)) * 1;
      const depth = Math.sqrt(Math.max(0.06, 1 - (x * x) / 0.72 - (y * y) / 0.9));
      vertices.push([x, y, depth * 0.3]);
      const index = row * columns + column;
      if (column < columns - 1) edges.push([index, index + 1]);
      if (row < rows - 1) edges.push([index, index + columns]);
    }
  }
  return { vertices, edges };
}

function createCrestMesh() {
  const vertices = [
    [-0.2, 0.63, 0.24], [0, 0.94, 0.2], [0.2, 0.63, 0.24],
    [-0.17, 0.55, 0.3], [0, 0.78, 0.34], [0.17, 0.55, 0.3],
  ];
  return { vertices, edges: [[0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [5, 2], [1, 4]] };
}

function makeHoloCirclePart(name, radius, plane, explode) {
  const mesh = createCircleMesh(radius, plane);
  return makeHoloPart(name, [0, 0, 0], mesh.vertices, mesh.edges, explode);
}

function makeHoloEllipsoidPart(name, center, radii, explode = [0, 0, 0]) {
  const mesh = createEllipsoidMesh(radii);
  return makeHoloPart(name, center, mesh.vertices, mesh.edges, explode);
}

const HOLO_MODELS = {
  reactor: [
    (() => {
      const mesh = createEllipsoidMesh([0.38, 0.38, 0.38], 8, 18);
      return makeHoloPart("ARC CORE", [0, 0, 0], mesh.vertices, mesh.edges);
    })(),
    makeHoloCirclePart("CONTAINMENT RING", 0.92, "xy", [0, 0, 1]),
    makeHoloCirclePart("STABILIZER RING", 0.78, "xz", [0, 1, 0]),
    makeHoloCirclePart("FIELD RING", 0.64, "yz", [1, 0, 0]),
    ...[[0.76, 0, 0], [-0.76, 0, 0], [0, 0.76, 0], [0, -0.76, 0]].map((center) => {
      const direction = center.map((value) => value * 1.35);
      const mesh = createEllipsoidMesh([0.17, 0.17, 0.17], 6, 12);
      return makeHoloPart("FLUX COIL", center, mesh.vertices, mesh.edges, direction);
    }),
  ],
  helmet: [
    makeHoloEllipsoidPart("HELMET SHELL", [0, 0, 0], [0.82, 0.98, 0.62], [0, 0.8, -0.2]),
    (() => {
      const mesh = createFaceplateMesh();
      return makeHoloPart("FACEPLATE", [0, -0.04, 0.48], mesh.vertices, mesh.edges, [0, 0, 1.2]);
    })(),
    (() => {
      const mesh = createCrestMesh();
      return makeHoloPart("CREST ASSEMBLY", [0, 0, 0], mesh.vertices, mesh.edges, [0, 1.2, 0]);
    })(),
    ...[-1, 1].map((side) => {
      const mesh = createCircleMesh(0.23, "yz", 20);
      return makeHoloPart("SIDE ACTUATOR", [side * 0.84, 0.02, 0], mesh.vertices, mesh.edges, [side * 1.3, 0, 0]);
    }),
    (() => {
      const mesh = createEllipsoidMesh([0.57, 0.18, 0.38], 6, 16);
      return makeHoloPart("CHIN GUARD", [0, -0.62, 0.12], mesh.vertices, mesh.edges, [0, -1.1, 0.6]);
    })(),
  ],
};

function projectHoloPoint(point, center, explode, rotationX, rotationY, scale, width, height) {
  let x = point[0] + center[0] + explode[0];
  let y = point[1] + center[1] + explode[1];
  let z = point[2] + center[2] + explode[2];
  const rotatedX = x * Math.cos(rotationY) + z * Math.sin(rotationY);
  z = -x * Math.sin(rotationY) + z * Math.cos(rotationY);
  x = rotatedX;
  const rotatedY = y * Math.cos(rotationX) - z * Math.sin(rotationX);
  z = y * Math.sin(rotationX) + z * Math.cos(rotationX);
  y = rotatedY;
  const perspective = 3.8 / (3.8 - z);
  return {
    x: width / 2 + x * scale * perspective,
    y: height / 2 - y * scale * perspective,
    depth: z,
  };
}

function drawHoloProjectorLegacy() {
  if (!holoDialog.open) {
    holoAnimationFrame = null;
    return;
  }
  const context = holoCanvas.getContext("2d");
  if (!context) {
    holoStatus.textContent = "CANVAS RENDERING IS UNAVAILABLE";
    holoAnimationFrame = null;
    return;
  }
  const bounds = holoCanvas.getBoundingClientRect();
  const width = Math.max(1, bounds.width);
  const height = Math.max(1, bounds.height);
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const pixelWidth = Math.round(width * pixelRatio);
  const pixelHeight = Math.round(height * pixelRatio);
  if (holoCanvas.width !== pixelWidth || holoCanvas.height !== pixelHeight) {
    holoCanvas.width = pixelWidth;
    holoCanvas.height = pixelHeight;
  }
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);
  const palette = hudMode === "mark-iii"
    ? { bright: "#ffb700", secondary: "#ff3b32", faint: "#ffb70020" }
    : { bright: "#00f3ff", secondary: "#63faff", faint: "#00f3ff20" };
  const background = context.createRadialGradient(width / 2, height / 2, 5, width / 2, height / 2, width * 0.7);
  background.addColorStop(0, hudMode === "mark-iii" ? "#260c10" : "#07202a");
  background.addColorStop(1, "#030a12");
  context.fillStyle = background;
  context.fillRect(0, 0, width, height);
  context.strokeStyle = palette.faint;
  context.lineWidth = 0.5;
  for (let x = 0; x < width; x += 24) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }
  for (let y = 0; y < height; y += 24) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }

  const targetExplode = holoExploded ? 1 : 0;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) holoExplodeProgress = targetExplode;
  else {
    holoExplodeProgress += (targetExplode - holoExplodeProgress) * 0.09;
    if (Math.abs(targetExplode - holoExplodeProgress) < 0.002) holoExplodeProgress = targetExplode;
  }
  const scale = Math.min(width, height) * (0.37 - holoExplodeProgress * 0.08) * holoGestureScale;
  const parts = HOLO_MODELS[holoModelSelect.value] || HOLO_MODELS.reactor;
  context.lineWidth = 0.9;
  context.shadowBlur = 7;
  context.shadowColor = palette.bright;
  parts.forEach((part, partIndex) => {
    const explode = part.explode.map((value) => value * 0.82 * holoExplodeProgress);
    const projected = part.vertices.map((point) =>
      projectHoloPoint(point, part.center, explode, holoRotationX, holoRotationY, scale, width, height));
    context.strokeStyle = partIndex % 3 === 1 ? palette.secondary : palette.bright;
    context.globalAlpha = 0.48 + ((partIndex * 17) % 4) * 0.12;
    context.beginPath();
    part.edges.forEach(([start, end]) => {
      const first = projected[start];
      const second = projected[end];
      context.moveTo(first.x, first.y);
      context.lineTo(second.x, second.y);
    });
    context.stroke();
  });
  context.globalAlpha = 1;
  context.shadowBlur = 0;
  context.strokeStyle = palette.bright;
  context.beginPath();
  context.arc(width / 2, height / 2, scale * 1.18, 0, Math.PI * 2);
  context.stroke();
  context.fillStyle = palette.bright;
  context.font = "8px monospace";
  context.fillText(holoExploded ? "ASSEMBLY // DISPERSED" : "ASSEMBLY // LOCKED", 12, height - 12);
  holoAnimationFrame = reduceMotion ? null : requestAnimationFrame(drawHoloProjectorLegacy);
}

function requestHoloFrameLegacy() {
  if (holoAnimationFrame === null) holoAnimationFrame = requestAnimationFrame(drawHoloProjectorLegacy);
}

function openHoloProjectorLegacy() {
  if (!holoDialog.open) holoDialog.showModal();
  holoStatus.textContent = "DRAG TO ROTATE // 360° CONTROL";
  requestHoloFrameLegacy();
}

function closeHoloProjectorLegacy() {
  if (holoAnimationFrame !== null) cancelAnimationFrame(holoAnimationFrame);
  holoAnimationFrame = null;
}

function updateHoloExplodeButton() {
  holoExplodeButton.setAttribute("aria-pressed", String(holoExploded));
  holoExplodeButton.textContent = holoExploded ? "REASSEMBLE" : "EXPLODE";
  holoStatus.textContent = holoExploded
    ? "COMPONENTS DISPERSED // DRAG TO ROTATE"
    : "DRAG TO ROTATE // 360° CONTROL";
}

function openIdeaSynthesizer(topic = "") {
  [simulationDialog, sentryDialog, cipherDialog, memoryDialog, holoDialog, prototypeDialog, knowledgeDialog].forEach((dialog) => {
    if (dialog.open) dialog.close();
  });
  if (!ideaDialog.open) ideaDialog.showModal();
  if (topic) ideaTopicInput.value = topic;
  ideaTopicInput.focus();
}

function parseSynthesizedIdeas(reply) {
  const jsonMatch = reply.match(/\[[\s\S]*\]/u);
  if (jsonMatch) {
    try {
      const parsed = JSON.parse(jsonMatch[0]);
      if (Array.isArray(parsed)) {
        return parsed
          .filter((item) => item && typeof item.title === "string" && typeof item.detail === "string")
          .slice(0, 6);
      }
    } catch (error) {
      console.warn("IDEA SYNTHESIZER response was not valid JSON; trying the numbered format.", error);
    }
  }
  try {
    const objectEntries = [...reply.matchAll(/"title"\s*:\s*"((?:\\.|[^"\\])*)"\s*,\s*"detail"\s*:\s*"((?:\\.|[^"\\])*)"/gu)]
      .slice(0, 6)
      .map((match) => ({
        title: JSON.parse(`"${match[1]}"`),
        detail: JSON.parse(`"${match[2]}"`),
      }));
    if (objectEntries.length) return objectEntries;
  } catch (error) {
    console.warn("IDEA SYNTHESIZER response contains malformed JSON fields.", error);
  }
  return reply.split(/\r?\n/u)
    .map((line) => line.match(/^\s*(?:\*\*)?(?:IDEA\s*)?([1-6])[.)、:：-]\s*(.+?)(?:\*\*)?\s*[-—–:：]\s*(.+)$/iu))
    .filter(Boolean)
    .slice(0, 6)
    .map((match) => ({ title: match[2].replace(/\*\*/gu, "").trim(), detail: match[3].replace(/\*\*/gu, "").trim() }));
}

function updateIdeaNodeLinks() {
  const svg = ideaMapNodes.querySelector(".idea-map-links");
  if (!svg) return;
  svg.replaceChildren();
  ideaMapNodes.querySelectorAll(".idea-node").forEach((node) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const x = Number.parseFloat(node.style.left);
    const y = Number.parseFloat(node.style.top);
    line.setAttribute("x1", "50");
    line.setAttribute("y1", "50");
    line.setAttribute("x2", String(x));
    line.setAttribute("y2", String(y));
    svg.append(line);
  });
}

function renderIdeaMap(topic, reply) {
  const ideas = parseSynthesizedIdeas(reply);
  const positions = [
    [50, 15], [79, 32], [79, 68], [50, 85], [21, 68], [21, 32],
  ];
  ideaMapCenter.textContent = topic;
  ideaMapNodes.replaceChildren();
  const links = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  links.classList.add("idea-map-links");
  links.setAttribute("viewBox", "0 0 100 100");
  links.setAttribute("preserveAspectRatio", "none");
  links.setAttribute("aria-hidden", "true");
  ideaMapNodes.append(links);
  ideas.forEach((idea, index) => {
    const node = document.createElement("article");
    node.className = "idea-node";
    node.style.left = `${positions[index][0]}%`;
    node.style.top = `${positions[index][1]}%`;
    node.dataset.nodeIndex = String(index);
    const title = document.createElement("button");
    title.type = "button";
    title.className = "idea-node-title";
    title.textContent = `${String(index + 1).padStart(2, "0")} // ${idea.title}`;
    title.setAttribute("aria-expanded", "false");
    const detail = document.createElement("p");
    detail.className = "idea-node-detail";
    detail.textContent = idea.detail;
    detail.hidden = true;
    title.addEventListener("click", () => {
      detail.hidden = !detail.hidden;
      title.setAttribute("aria-expanded", String(!detail.hidden));
      node.classList.toggle("is-expanded", !detail.hidden);
    });
    node.append(title, detail);
    node.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button")) return;
      ideaNodeDrag = {
        id: event.pointerId,
        node,
        x: event.clientX,
        y: event.clientY,
        left: Number.parseFloat(node.style.left),
        top: Number.parseFloat(node.style.top),
      };
      node.setPointerCapture(event.pointerId);
    });
    node.addEventListener("pointermove", (event) => {
      if (!ideaNodeDrag || ideaNodeDrag.node !== node || ideaNodeDrag.id !== event.pointerId) return;
      const bounds = ideaMapNodes.getBoundingClientRect();
      const nextX = ideaNodeDrag.left + (event.clientX - ideaNodeDrag.x) / bounds.width * 100;
      const nextY = ideaNodeDrag.top + (event.clientY - ideaNodeDrag.y) / bounds.height * 100;
      node.style.left = `${Math.max(9, Math.min(91, nextX))}%`;
      node.style.top = `${Math.max(10, Math.min(90, nextY))}%`;
      updateIdeaNodeLinks();
    });
    ["pointerup", "pointercancel", "lostpointercapture"].forEach((name) => {
      node.addEventListener(name, () => {
        if (ideaNodeDrag?.node === node) ideaNodeDrag = null;
      });
    });
    ideaMapNodes.append(node);
  });
  updateIdeaNodeLinks();
  ideaStatus.textContent = ideas.length === 6
    ? "SYNTHESIS COMPLETE // 6 NODES LOCKED // DRAG TO REPOSITION"
    : `PARTIAL SYNTHESIS // ${ideas.length}/6 NODES PARSED // REVIEW AI REPORT IN CHAT`;
}

function runIdeaSynthesis(topic, sourceText, voice = false) {
  const cleanTopic = topic.trim();
  if (!cleanTopic || sendButton.disabled) return;
  openIdeaSynthesizer(cleanTopic);
  ideaStatus.textContent = "SYNTHESIS IN PROGRESS // MAPPING RELATED CONCEPTS";
  ideaMapCenter.textContent = "SCANNING...";
  ideaMapNodes.replaceChildren();
  playSfx("synthesize", true);
  appendSystemLog("IDEA SYNTHESIZER // CONCEPT MAPPING");
  const requestText =
    `テーマ「${cleanTopic}」について、具体的で実行可能な関連アイデアをちょうど6個生成してください。` +
    "各案は互いに重複を避け、短いタイトルと具体的な説明（1〜2文）を含めてください。" +
    "回答形式はJSON配列のみとし、各要素は {\"title\":\"アイデア名\",\"detail\":\"具体案\"} としてください。" +
    "専門用語を使う場合は分かりやすく説明し、安全で合法的な提案にしてください。";
  void sendMessage(sourceText, {
    voice,
    displayText: `SYNTHESIZE // ${cleanTopic}`,
    requestText,
    onReply: (reply) => renderIdeaMap(cleanTopic, reply),
  });
}

function setHoloModel(modelName) {
  if (!["reactor", "crystal", "helmet", "dna"].includes(modelName)) return;
  if (cityModeActive) setCityViewEnabled(false);
  holoModelSelect.value = modelName;
  if (holoRenderer) {
    createHoloModel(modelName);
    updateHoloTheme();
  }
  const label = {
    reactor: "ARC REACTOR",
    crystal: "GEO CRYSTAL",
    helmet: "HELMET MK-III",
    dna: "HELIX DNA",
  }[modelName];
  holoStatus.textContent = `${label} // 3D PROJECTION LOCKED`;
  requestHoloFrame();
}

function holoPalette() {
  return hudMode === "mark-iii"
    ? { primary: 0xffb700, secondary: 0xff3b32 }
    : { primary: 0x00f3ff, secondary: 0x8bffff };
}

function createHoloLinePart(geometry, position, accent = false, explosionVector = null) {
  const THREE = window.THREE;
  const edgeGeometry = new THREE.EdgesGeometry(geometry, 1);
  geometry.dispose();
  const material = new THREE.LineBasicMaterial({
    color: accent ? holoPalette().secondary : holoPalette().primary,
    transparent: true,
    opacity: accent ? 0.82 : 0.66,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const lines = new THREE.LineSegments(edgeGeometry, material);
  const basePosition = new THREE.Vector3(...position);
  const direction = explosionVector ? new THREE.Vector3(...explosionVector) : basePosition.clone();
  if (direction.lengthSq() < 0.01) direction.set(0, 1, 0);
  direction.normalize();
  lines.position.copy(basePosition);
  lines.userData.basePosition = basePosition;
  lines.userData.explosionDirection = direction;
  lines.userData.accent = accent;
  holoModelGroup.add(lines);
  holoModelParts.push(lines);
  return lines;
}

function createHoloModel(modelName) {
  const THREE = window.THREE;
  if (!THREE || !holoModelGroup) return;
  holoModelParts.forEach((part) => {
    part.geometry.dispose();
    part.material.dispose();
  });
  holoModelParts = [];
  holoModelGroup.clear();

  if (modelName === "reactor") {
    const containment = createHoloLinePart(new THREE.TorusGeometry(0.82, 0.018, 6, 96), [0, 0, 0], false, [0, 0, 1]);
    containment.userData.spinAxis = "z";
    containment.userData.spinRate = 0.007;
    const stabilizer = createHoloLinePart(new THREE.TorusGeometry(0.66, 0.014, 6, 96), [0, 0, 0], true, [0, 1, 0]);
    stabilizer.rotation.x = Math.PI / 2;
    stabilizer.userData.spinAxis = "x";
    stabilizer.userData.spinRate = -0.011;
    const field = createHoloLinePart(new THREE.TorusGeometry(0.5, 0.012, 6, 96), [0, 0, 0], false, [1, 0, 0]);
    field.rotation.y = Math.PI / 2;
    field.userData.spinAxis = "y";
    field.userData.spinRate = 0.015;
    createHoloLinePart(new THREE.CylinderGeometry(0.3, 0.38, 0.62, 16, 3, true), [0, 0, 0], true);
    createHoloLinePart(new THREE.IcosahedronGeometry(0.3, 1), [0, 0, 0]);
    for (let index = 0; index < 8; index += 1) {
      const angle = index * Math.PI / 4;
      const x = Math.cos(angle) * 0.72;
      const y = Math.sin(angle) * 0.72;
      createHoloLinePart(
        new THREE.CylinderGeometry(0.035, 0.045, 0.25, 8, 1, true),
        [x, y, 0],
        index % 2 === 0,
        [x * 1.8, y * 1.8, 0],
      );
    }
  } else if (modelName === "crystal") {
    const outer = createHoloLinePart(new THREE.IcosahedronGeometry(0.83, 1), [0, 0, 0]);
    outer.rotation.set(0.18, 0.24, 0.1);
    const inner = createHoloLinePart(new THREE.IcosahedronGeometry(0.52, 1), [0, 0, 0], true);
    inner.rotation.set(Math.PI / 3, 0, Math.PI / 5);
    const orbitOne = createHoloLinePart(new THREE.TorusGeometry(1.05, 0.012, 5, 120), [0, 0, 0], true, [0, 1, 0]);
    orbitOne.rotation.set(0.9, 0.2, 0);
    orbitOne.userData.spinAxis = "z";
    orbitOne.userData.spinRate = 0.006;
    const orbitTwo = createHoloLinePart(new THREE.TorusGeometry(1.05, 0.01, 5, 120), [0, 0, 0], false, [1, 0, 0]);
    orbitTwo.rotation.set(0.25, 1.05, 0.4);
    orbitTwo.userData.spinAxis = "y";
    orbitTwo.userData.spinRate = -0.009;
  } else if (modelName === "helmet") {
    const shell = createHoloLinePart(new THREE.IcosahedronGeometry(0.8, 2), [0, 0.08, 0], false, [0, 0.9, -0.1]);
    shell.scale.set(0.82, 1.12, 0.78);
    const faceplate = createHoloLinePart(new THREE.IcosahedronGeometry(0.53, 1), [0, -0.12, 0.48], true, [0, -0.1, 1.2]);
    faceplate.scale.set(1.06, 0.88, 0.5);
    createHoloLinePart(new THREE.BoxGeometry(0.7, 0.09, 0.08), [0, 0.18, 0.68], true, [0, 0.25, 0.8]);
    for (const side of [-1, 1]) {
      createHoloLinePart(new THREE.TorusGeometry(0.105, 0.012, 5, 24), [side * 0.28, 0.16, 0.67], true, [side * 0.8, 0, 0.5]);
      createHoloLinePart(new THREE.CylinderGeometry(0.16, 0.11, 0.24, 8, 2, true), [side * 0.68, 0.04, 0], false, [side * 1.5, 0, 0]);
    }
  } else {
    const strandPoints = [[], []];
    const segments = 144;
    const turns = 2.4;
    for (let index = 0; index <= segments; index += 1) {
      const t = index / segments;
      const angle = t * Math.PI * 2 * turns;
      for (let strand = 0; strand < 2; strand += 1) {
        const phase = angle + strand * Math.PI;
        strandPoints[strand].push(new THREE.Vector3(
          Math.cos(phase) * 0.48,
          (t - 0.5) * 2.2,
          Math.sin(phase) * 0.48,
        ));
      }
    }
    strandPoints.forEach((points, index) => {
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
        color: index ? holoPalette().secondary : holoPalette().primary,
        transparent: true,
        opacity: 0.86,
        blending: THREE.AdditiveBlending,
      }));
      line.userData.basePosition = new THREE.Vector3();
      line.userData.explosionDirection = new THREE.Vector3(index ? 1 : -1, 0, 0);
      line.userData.accent = Boolean(index);
      holoModelGroup.add(line);
      holoModelParts.push(line);
    });
    for (let index = 0; index <= 36; index += 1) {
      const pointIndex = Math.round(index / 36 * segments);
      const geometry = new THREE.BufferGeometry().setFromPoints([
        strandPoints[0][pointIndex],
        strandPoints[1][pointIndex],
      ]);
      const rung = new THREE.Line(geometry, new THREE.LineBasicMaterial({
        color: holoPalette().primary,
        transparent: true,
        opacity: 0.48,
        blending: THREE.AdditiveBlending,
      }));
      rung.userData.basePosition = new THREE.Vector3();
      rung.userData.explosionDirection = new THREE.Vector3(0, Math.sin(index * 0.7), Math.cos(index * 0.7));
      rung.userData.accent = false;
      holoModelGroup.add(rung);
      holoModelParts.push(rung);
    }
  }
}

function addCityResource(resource) {
  cityResources.add(resource);
  return resource;
}

function addCityPaletteMaterial(material, accent = false) {
  cityPaletteMaterials.push({ material, accent });
  return addCityResource(material);
}

function clearCityModel() {
  if (cityModelGroup) cityModelGroup.clear();
  cityResources.forEach((resource) => resource.dispose?.());
  cityResources.clear();
  cityPaletteMaterials = [];
  cityScanRings = [];
  cityMapCounts = { buildings: 0, roads: 0 };
}

function setCityViewEnabled(enabled) {
  cityModeActive = enabled;
  if (cityModelGroup) cityModelGroup.visible = enabled;
  if (holoModelGroup) holoModelGroup.visible = !enabled;
  holoCityToggle.setAttribute("aria-pressed", String(enabled));
  holoExplodeButton.disabled = enabled;
  if (enabled) {
    holoRotationX = -0.46;
    holoGestureScale = 1;
    holoStatus.textContent = "CITY SCANNER // DRAG TO ORBIT · WHEEL TO ZOOM";
  } else {
    updateHoloExplodeButton();
    holoStatus.textContent = "DRAG TO ROTATE // SCROLL TO ZOOM // AIR GESTURE READY";
  }
  requestHoloFrame();
}

function getCityCoordinate(latitude, longitude, center) {
  const longitudeMeters =
    (longitude - center.longitude) * 111320 * Math.cos(center.latitude * Math.PI / 180);
  const northMeters = (latitude - center.latitude) * 110540;
  return {
    x: longitudeMeters * CITY_OSM_SCALE,
    z: -northMeters * CITY_OSM_SCALE,
  };
}

function getCityBuildingHeight(tags, id, index) {
  const heightText = String(tags.height || "").trim().replace(",", ".");
  const rawHeight = Number.parseFloat(heightText);
  const height = Number.isFinite(rawHeight)
    ? rawHeight * (/\bft\b|feet/iu.test(heightText) ? 0.3048 : 1)
    : Number.parseFloat(tags["building:levels"] || "") * 3.2;
  const fallback = 6 + (Math.abs(Number(id) || index * 17) % 6) * 1.8;
  return Math.max(3, Math.min(150, Number.isFinite(height) && height > 0 ? height : fallback));
}

function createCityLocationLabel(text) {
  const THREE = window.THREE;
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 96;
  const context = canvas.getContext("2d");
  if (!context) {
    console.error("CITY SCANNER location label canvas is unavailable.");
    return null;
  }
  context.fillStyle = "rgba(2, 14, 24, 0.88)";
  context.fillRect(4, 9, 504, 78);
  context.strokeStyle = "#bfffff";
  context.lineWidth = 2;
  context.strokeRect(4, 9, 504, 78);
  context.fillStyle = "#ffffff";
  context.font = "600 26px monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text.slice(0, 30), 256, 48, 480);
  const texture = addCityResource(new THREE.CanvasTexture(canvas));
  const material = addCityPaletteMaterial(new THREE.SpriteMaterial({
    map: texture,
    color: holoPalette().primary,
    transparent: true,
    depthTest: false,
    blending: THREE.AdditiveBlending,
  }));
  return new THREE.Sprite(material);
}

function createCityModel(elements, center, locationLabel = "OPERATOR LOCATION") {
  const THREE = window.THREE;
  if (!THREE || !cityModelGroup) throw new Error("Three.js city renderer is unavailable.");
  clearCityModel();

  const palette = holoPalette();
  const roadMaterial = addCityPaletteMaterial(new THREE.LineBasicMaterial({
    color: palette.secondary,
    transparent: true,
    opacity: 0.42,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }), true);
  const mainRoadMaterial = addCityPaletteMaterial(new THREE.LineBasicMaterial({
    color: palette.primary,
    transparent: true,
    opacity: 0.76,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }));
  const buildingMaterial = addCityPaletteMaterial(new THREE.MeshBasicMaterial({
    color: palette.primary,
    transparent: true,
    opacity: 0.1,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }));
  const buildingEdgeMaterial = addCityPaletteMaterial(new THREE.LineBasicMaterial({
    color: palette.primary,
    transparent: true,
    opacity: 0.82,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }));

  const roads = elements
    .filter((element) => element.type === "way" && element.tags?.highway && Array.isArray(element.geometry))
    .slice(0, CITY_MAX_ROADS);
  roads.forEach((way) => {
    const points = way.geometry
      .filter((node) => Number.isFinite(Number(node.lat)) && Number.isFinite(Number(node.lon)))
      .map((node) => {
        const point = getCityCoordinate(Number(node.lat), Number(node.lon), center);
        return new THREE.Vector3(point.x, 0.018, point.z);
      });
    if (points.length < 2) return;
    const geometry = addCityResource(new THREE.BufferGeometry().setFromPoints(points));
    const major = /^(?:motorway|trunk|primary|secondary)$/u.test(way.tags.highway);
    cityModelGroup.add(new THREE.Line(geometry, major ? mainRoadMaterial : roadMaterial));
    cityMapCounts.roads += 1;
  });

  const buildings = elements
    .filter((element) => element.type === "way" && element.tags?.building && Array.isArray(element.geometry))
    .slice(0, CITY_MAX_BUILDINGS);
  buildings.forEach((way, index) => {
    const points = way.geometry
      .filter((node) => Number.isFinite(Number(node.lat)) && Number.isFinite(Number(node.lon)))
      .map((node) => getCityCoordinate(Number(node.lat), Number(node.lon), center));
    if (points.length < 3) return;
    const shape = new THREE.Shape();
    shape.moveTo(points[0].x, points[0].z);
    points.slice(1).forEach((point) => shape.lineTo(point.x, point.z));
    shape.closePath();
    const height = getCityBuildingHeight(way.tags, way.id, index);
    const geometry = addCityResource(new THREE.ExtrudeGeometry(shape, {
      depth: height * CITY_BUILDING_HEIGHT_SCALE,
      bevelEnabled: false,
      steps: 1,
    }));
    geometry.rotateX(-Math.PI / 2);
    const building = new THREE.Mesh(geometry, buildingMaterial);
    cityModelGroup.add(building);
    const edgeGeometry = addCityResource(new THREE.EdgesGeometry(geometry, 1));
    cityModelGroup.add(new THREE.LineSegments(edgeGeometry, buildingEdgeMaterial));
    cityMapCounts.buildings += 1;
  });

  const baseGeometry = addCityResource(new THREE.CircleGeometry(2.25, 96));
  baseGeometry.rotateX(-Math.PI / 2);
  const baseMaterial = addCityPaletteMaterial(new THREE.MeshBasicMaterial({
    color: palette.primary,
    transparent: true,
    opacity: 0.035,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }));
  cityModelGroup.add(new THREE.Mesh(baseGeometry, baseMaterial));

  const beaconGeometry = addCityResource(new THREE.SphereGeometry(0.055, 14, 10));
  const beaconMaterial = addCityPaletteMaterial(new THREE.MeshBasicMaterial({
    color: palette.secondary,
    blending: THREE.AdditiveBlending,
  }), true);
  const beacon = new THREE.Mesh(beaconGeometry, beaconMaterial);
  beacon.position.y = 0.12;
  cityModelGroup.add(beacon);

  const beamGeometry = addCityResource(new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0.02, 0),
    new THREE.Vector3(0, 0.82, 0),
  ]));
  cityModelGroup.add(new THREE.Line(beamGeometry, mainRoadMaterial));

  const targetRingGeometry = addCityResource(new THREE.RingGeometry(0.1, 0.115, 64));
  targetRingGeometry.rotateX(-Math.PI / 2);
  const targetRingMaterial = addCityPaletteMaterial(new THREE.MeshBasicMaterial({
    color: palette.secondary,
    transparent: true,
    opacity: 0.9,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }), true);
  const targetRing = new THREE.Mesh(targetRingGeometry, targetRingMaterial);
  targetRing.position.y = 0.035;
  cityModelGroup.add(targetRing);

  for (let index = 0; index < 3; index += 1) {
    const geometry = addCityResource(new THREE.RingGeometry(0.96, 0.98, 96));
    geometry.rotateX(-Math.PI / 2);
    const material = addCityPaletteMaterial(new THREE.MeshBasicMaterial({
      color: palette.primary,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }));
    const ring = new THREE.Mesh(geometry, material);
    ring.position.y = 0.026 + index * 0.002;
    cityModelGroup.add(ring);
    cityScanRings.push({ ring, material, phase: index / 3 });
  }

  const label = createCityLocationLabel(locationLabel);
  if (label) {
    label.position.set(0, 0.94, 0);
    label.scale.set(1.7, 0.32, 1);
    cityModelGroup.add(label);
  }
  cityScanStartedAt = performance.now();
}

function animateCityScan(time) {
  if (!cityModeActive) return;
  cityScanRings.forEach(({ ring, material, phase }) => {
    const progress = ((time - cityScanStartedAt) / 3200 + phase) % 1;
    const radius = 0.08 + progress * 2.25;
    ring.scale.set(radius, radius, radius);
    material.opacity = 0.72 * (1 - progress);
  });
}

function resizeHoloRenderer() {
  if (!holoRenderer || !holoCamera) return;
  const bounds = holoCanvas.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  holoRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  holoRenderer.setSize(bounds.width, bounds.height, false);
  holoCamera.aspect = bounds.width / bounds.height;
  holoCamera.updateProjectionMatrix();
}

function updateHoloTheme() {
  if (!holoScene || !window.THREE) return;
  const palette = holoPalette();
  holoScene.background = null;
  holoModelParts.forEach((part) => {
    part.material.color.setHex(part.userData.accent ? palette.secondary : palette.primary);
  });
  cityPaletteMaterials.forEach(({ material, accent }) => {
    material.color.setHex(accent ? palette.secondary : palette.primary);
  });
}

function drawHoloProjector() {
  if (!holoDialog.open || !holoRenderer || !holoModelGroup) {
    holoAnimationFrame = null;
    return;
  }
  const targetExplode = holoExploded ? 1 : 0;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    holoExplodeProgress = targetExplode;
  } else {
    holoExplodeProgress += (targetExplode - holoExplodeProgress) * 0.09;
    if (Math.abs(holoExplodeProgress - targetExplode) < 0.002) holoExplodeProgress = targetExplode;
  }
  holoModelParts.forEach((part) => {
    const { basePosition, explosionDirection } = part.userData;
    part.position.copy(basePosition).addScaledVector(explosionDirection, holoExplodeProgress * 0.72);
    if (part.userData.spinAxis) part.rotation[part.userData.spinAxis] += part.userData.spinRate;
  });
  holoModelGroup.rotation.x += (holoRotationX - holoModelGroup.rotation.x) * 0.18;
  holoModelGroup.rotation.y += (holoRotationY - holoModelGroup.rotation.y) * 0.18 + 0.0015;
  if (cityModeActive) {
    cityModelGroup.rotation.x += (holoRotationX - cityModelGroup.rotation.x) * 0.18;
    cityModelGroup.rotation.y += (holoRotationY - cityModelGroup.rotation.y) * 0.18 + 0.0015;
    cityModelGroup.scale.setScalar(holoGestureScale);
    const distance = 8.6;
    holoCamera.position.set(0, distance * 0.68, distance);
    holoCamera.lookAt(0, 0, 0);
    animateCityScan(performance.now());
  } else {
    holoModelGroup.scale.setScalar(holoGestureScale);
    holoCamera.position.set(0, 0, 4.1 / holoGestureScale);
    holoCamera.lookAt(0, 0, 0);
  }
  holoRenderer.render(holoScene, holoCamera);
  holoAnimationFrame = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? null
    : requestAnimationFrame(drawHoloProjector);
}

function requestHoloFrame() {
  if (holoAnimationFrame === null && holoDialog.open) holoAnimationFrame = requestAnimationFrame(drawHoloProjector);
}

function initializeHoloRenderer() {
  if (holoRenderer) {
    resizeHoloRenderer();
    return true;
  }
  const THREE = window.THREE;
  if (!THREE?.WebGLRenderer) {
    console.error("Three.js failed to load; the 3D hologram projector is unavailable.");
    holoStatus.textContent = "THREE.JS UNAVAILABLE // CHECK CDN CONNECTION";
    return false;
  }
  try {
    holoRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    holoRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    holoCanvas.replaceChildren(holoRenderer.domElement);
    holoScene = new THREE.Scene();
    holoCamera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    holoCamera.position.set(0, 0, 4.1);
    holoModelGroup = new THREE.Group();
    holoScene.add(holoModelGroup);
    cityModelGroup = new THREE.Group();
    cityModelGroup.visible = false;
    holoScene.add(cityModelGroup);
    holoResizeObserver = new ResizeObserver(resizeHoloRenderer);
    holoResizeObserver.observe(holoCanvas);
    createHoloModel(holoModelSelect.value);
    updateHoloTheme();
    resizeHoloRenderer();
    return true;
  } catch (error) {
    console.error("Three.js hologram renderer initialization failed.", error);
    holoStatus.textContent = "3D RENDERER INITIALIZATION FAILED";
    holoRenderer?.dispose();
    holoRenderer = null;
    holoCanvas.replaceChildren();
    return false;
  }
}

function openHoloProjector() {
  [simulationDialog, sentryDialog, cipherDialog, memoryDialog, ideaDialog, prototypeDialog, knowledgeDialog].forEach((dialog) => {
    if (dialog.open) dialog.close();
  });
  if (!holoDialog.open) holoDialog.showModal();
  if (!initializeHoloRenderer()) return false;
  holoStatus.textContent = "DRAG TO ROTATE // SCROLL TO ZOOM // AIR GESTURE READY";
  requestHoloFrame();
  return true;
}

function openCityProjector() {
  if (!openHoloProjector()) return false;
  setCityViewEnabled(true);
  return true;
}

function getCityScanTarget(text) {
  const normalized = text.normalize("NFKC").trim();
  const scanIntent = /(?:3d\s*(?:(?:tactical\s*)?city\s*(?:map|scanner)|scan|projection)|3d(?:スキャン|投影)|(?:都市|シティ).*(?:スキャン|スキャナ|投影)|(?:周辺|付近|近辺|近く).*(?:スキャン|スキャナ|投影)|(?:スキャン|スキャナ|投影).*(?:周辺|付近|近辺|近く))/iu;
  if (!scanIntent.test(normalized)) return null;

  const patterns = [
    /^(.+?)(?:の)?(?:周辺|付近|近辺|近く)(?:を|に)?(?:3d\s*)?(?:スキャン|スキャナ(?:ー)?|投影)(?:して|してください|する|お願いします)?$/iu,
    /^(.+?)を(?:3d\s*)?(?:スキャン|スキャナ(?:ー)?|投影)(?:して|してください|する|お願いします)?$/iu,
    /^(?:3d\s*(?:tactical\s*)?city\s*(?:map|scanner)|3d\s*(?:scan|projection)|3d(?:スキャン|投影))(?:を|で)?(.+?)(?:してください|して|お願いします)?$/iu,
  ];
  for (const pattern of patterns) {
    const match = normalized.match(pattern);
    if (!match) continue;
    const target = match[1]
      .replace(/^[\s「『"'、:：]+|[\s」』"'、。.!！?？]+$/gu, "")
      .replace(/(?:の)?(?:周辺|付近|近辺|近く)(?:の?(?:街並み|建物|エリア|地域))?$/u, "")
      .trim();
    if (/^(?:現在地|自分の場所|今いる場所|ここ|operator location|my location)$/iu.test(target)) return "";
    if (target) return target;
  }
  return "";
}

function getCityOperatorLocation() {
  if (!navigator.geolocation?.getCurrentPosition) {
    return Promise.resolve({
      ...CITY_DEFAULT_CENTER,
      source: "GEOLOCATION UNAVAILABLE // KUSHIRO FALLBACK",
    });
  }
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve({
        latitude: coords.latitude,
        longitude: coords.longitude,
        source: "CURRENT OPERATOR LOCATION",
      }),
      (error) => {
        console.warn("CITY SCANNER geolocation unavailable; using Kushiro fallback.", error);
        resolve({
          ...CITY_DEFAULT_CENTER,
          source: "LOCATION UNAVAILABLE // KUSHIRO FALLBACK",
        });
      },
      { enableHighAccuracy: false, maximumAge: 300000, timeout: CITY_GEOLOCATION_TIMEOUT },
    );
  });
}

function geocodeCityPlace(place, signal) {
  const request = nominatimQueue.then(async () => {
    const remaining = NOMINATIM_MIN_INTERVAL - (Date.now() - nominatimLastRequestAt);
    if (remaining > 0) await new Promise((resolve) => window.setTimeout(resolve, remaining));
    if (signal.aborted) throw new DOMException("City scan was cancelled.", "AbortError");
    nominatimLastRequestAt = Date.now();

    const url = new URL(NOMINATIM_SEARCH_URL);
    url.search = new URLSearchParams({
      q: place,
      format: "jsonv2",
      limit: "1",
    }).toString();
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), CITY_REQUEST_TIMEOUT);
    const abortFromRequest = () => controller.abort();
    signal.addEventListener("abort", abortFromRequest, { once: true });
    try {
      const response = await fetch(url, {
        headers: { "Accept-Language": "ja,en;q=0.8" },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`Nominatim responded with HTTP ${response.status}.`);
      const results = await response.json();
      if (!Array.isArray(results) || !results[0]) {
        throw new Error(`Nominatim returned no matching location for "${place}".`);
      }
      const latitude = Number(results[0].lat);
      const longitude = Number(results[0].lon);
      if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
        throw new TypeError("Nominatim returned invalid coordinates.");
      }
      return {
        latitude,
        longitude,
        source: results[0].display_name || place,
      };
    } finally {
      window.clearTimeout(timeout);
      signal.removeEventListener("abort", abortFromRequest);
    }
  });
  nominatimQueue = request.then(() => undefined, () => undefined);
  return request;
}

async function fetchCityOverpassData(center, signal) {
  const query = `[out:json][timeout:25];(way(around:${CITY_SCAN_RADIUS_METERS},${center.latitude},${center.longitude})[building];way(around:${CITY_SCAN_RADIUS_METERS},${center.latitude},${center.longitude})[highway];);out body geom;`;
  let lastError;
  for (const endpoint of CITY_OVERPASS_ENDPOINTS) {
    if (signal.aborted) throw new DOMException("City scan was cancelled.", "AbortError");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), CITY_REQUEST_TIMEOUT);
    const abortFromRequest = () => controller.abort();
    signal.addEventListener("abort", abortFromRequest, { once: true });
    try {
      const url = new URL(endpoint);
      url.searchParams.set("data", query);
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`Overpass responded with HTTP ${response.status}.`);
      const data = await response.json();
      if (!Array.isArray(data.elements)) throw new TypeError("Overpass returned an invalid elements list.");
      return data.elements;
    } catch (error) {
      if (signal.aborted) throw new DOMException("City scan was cancelled.", "AbortError");
      lastError = error;
      console.warn(`CITY SCANNER endpoint failed: ${endpoint}`, error);
    } finally {
      window.clearTimeout(timeout);
      signal.removeEventListener("abort", abortFromRequest);
    }
  }
  throw lastError || new Error("All Overpass endpoints failed.");
}

function recordCityScanMessage(role, text, voice = false) {
  addMessage(role, text);
  history.push({ role, content: text });
  trimHistory();
  persistHistory();
  if (role === "assistant" && voice && voiceOutputEnabled) void speakReply(text);
}

async function scanTacticalCity({ place = "", sourceText = "", voice = false } = {}) {
  if (systemLocked || sentryStandbyActive) return;
  if (!openCityProjector()) return;

  cityScanController?.abort();
  const controller = new AbortController();
  cityScanController = controller;
  const scanId = ++cityScanRequestId;
  cityScanStatus.textContent = place ? `GEOCODING TARGET // ${place}` : "ACQUIRING OPERATOR LOCATION...";
  holoStatus.textContent = "CITY SCANNER // ACQUIRING MAP DATA";
  appendSystemLog("CITY SCANNER // MAP DATA REQUESTED");
  playSfx("transmit", true);
  if (sourceText) recordCityScanMessage("user", sourceText);

  try {
    const center = place
      ? await geocodeCityPlace(place, controller.signal)
      : await getCityOperatorLocation();
    if (controller.signal.aborted || scanId !== cityScanRequestId) return;
    cityScanStatus.textContent = `QUERYING OPENSTREETMAP // ${center.source}`;
    const elements = await fetchCityOverpassData(center, controller.signal);
    if (controller.signal.aborted || scanId !== cityScanRequestId) return;
    createCityModel(elements, center, place ? "TARGET LOCATION" : "OPERATOR LOCATION");
    cityScanStatus.textContent =
      `SCAN COMPLETE // ${cityMapCounts.buildings} BUILDINGS · ${cityMapCounts.roads} ROADS`;
    holoStatus.textContent =
      `${place ? "TARGET" : "OPERATOR"} // ${center.latitude.toFixed(4)}, ${center.longitude.toFixed(4)} // DRAG / WHEEL TO ORBIT`;
    appendSystemLog(`CITY SCANNER // ${cityMapCounts.buildings} BUILDINGS · ${cityMapCounts.roads} ROADS`);
    const response =
      `3D都市スキャンが完了しました、伊吹様。\n` +
      `対象: ${center.source}\n` +
      `座標: ${center.latitude.toFixed(4)}, ${center.longitude.toFixed(4)}\n` +
      `検出: 建物 ${cityMapCounts.buildings} 棟 / 道路 ${cityMapCounts.roads} 区間\n` +
      `地図データ: OpenStreetMap。高さ情報がない建物は表示用の推定値で補っています。`;
    recordCityScanMessage("assistant", response, voice);
  } catch (error) {
    if (controller.signal.aborted || scanId !== cityScanRequestId) return;
    console.error("CITY SCANNER could not retrieve map data.", error);
    const message = error instanceof Error ? error.message : String(error);
    cityScanStatus.textContent = `SCAN FAILED // ${message}`;
    holoStatus.textContent = "CITY MAP UNAVAILABLE // CHECK NETWORK AND RETRY";
    appendSystemLog("CITY SCANNER // MAP REQUEST FAILED");
    recordCityScanMessage(
      "assistant",
      `都市スキャンを完了できませんでした、伊吹様。${message} 時間をおいて再試行してください。`,
      voice,
    );
  } finally {
    if (cityScanController === controller) cityScanController = null;
  }
}

function closeHoloProjector() {
  if (holoAnimationFrame !== null) cancelAnimationFrame(holoAnimationFrame);
  holoAnimationFrame = null;
  cityScanController?.abort();
  cityScanController = null;
  cityScanRequestId += 1;
}

function updateGlobalRadar(time) {
  const context = globalRadarCanvas.getContext("2d");
  if (!context) {
    console.error("GLOBAL RADAR canvas rendering is unavailable.");
    globalRadarStatus.textContent = "RADAR CANVAS // OFFLINE";
    globalRadarFrame = null;
    return;
  }
  const bounds = globalRadarCanvas.getBoundingClientRect();
  const width = Math.max(1, bounds.width);
  const height = Math.max(1, bounds.height);
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const pixelWidth = Math.round(width * pixelRatio);
  const pixelHeight = Math.round(height * pixelRatio);
  if (globalRadarCanvas.width !== pixelWidth || globalRadarCanvas.height !== pixelHeight) {
    globalRadarCanvas.width = pixelWidth;
    globalRadarCanvas.height = pixelHeight;
  }
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);
  const markMode = hudMode === "mark-iii";
  const bright = markMode ? "#ffb700" : "#00f3ff";
  const faint = markMode ? "#ffb70035" : "#00f3ff35";
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width * 0.31, height * 0.43);
  const rotation = -144.38 * Math.PI / 180 + time * 0.000025;
  const project = (latitude, longitude) => {
    const lat = latitude * Math.PI / 180;
    const lon = longitude * Math.PI / 180;
    const x = Math.cos(lat) * Math.sin(lon);
    const y = Math.sin(lat);
    const z = Math.cos(lat) * Math.cos(lon);
    const rotatedX = x * Math.cos(rotation) + z * Math.sin(rotation);
    const rotatedZ = -x * Math.sin(rotation) + z * Math.cos(rotation);
    return { x: centerX + rotatedX * radius, y: centerY - y * radius, depth: rotatedZ };
  };
  const drawGeoLine = (points) => {
    context.beginPath();
    let active = false;
    points.forEach(([latitude, longitude]) => {
      const point = project(latitude, longitude);
      if (point.depth > 0) {
        if (!active) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
        active = true;
      } else {
        active = false;
      }
    });
    context.stroke();
  };
  context.save();
  context.strokeStyle = faint;
  context.lineWidth = 0.7;
  for (let latitude = -75; latitude <= 75; latitude += 15) {
    const points = [];
    for (let longitude = -180; longitude <= 180; longitude += 4) points.push([latitude, longitude]);
    drawGeoLine(points);
  }
  for (let longitude = -180; longitude < 180; longitude += 20) {
    const points = [];
    for (let latitude = -90; latitude <= 90; latitude += 3) points.push([latitude, longitude]);
    drawGeoLine(points);
  }
  if (issTrack.length > 1) {
    const issColor = markMode ? "#ff7252" : "#b9ffff";
    context.lineWidth = 1.8;
    context.shadowBlur = 8;
    context.shadowColor = issColor;
    for (let index = 1; index < issTrack.length; index += 1) {
      const previous = project(issTrack[index - 1].latitude, issTrack[index - 1].longitude);
      const current = project(issTrack[index].latitude, issTrack[index].longitude);
      if (
        previous.depth <= 0 ||
        current.depth <= 0 ||
        Math.abs(previous.x - current.x) > radius * 0.7
      ) continue;
      context.globalAlpha = 0.2 + (index / issTrack.length) * 0.8;
      context.strokeStyle = issColor;
      context.beginPath();
      context.moveTo(previous.x, previous.y);
      context.lineTo(current.x, current.y);
      context.stroke();
    }
    context.globalAlpha = 1;
  }
  context.strokeStyle = bright;
  context.lineWidth = 1.1;
  context.shadowBlur = 7;
  context.shadowColor = bright;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.stroke();

  earthquakeData.slice(0, 18).forEach((event, index) => {
    const epicenter = project(event.latitude, event.longitude);
    if (epicenter.depth <= 0) return;
    const pulse = (time * 0.012 + index * 1.7) % 1;
    const maxRadius = 4 + Math.min(event.magnitude, 8) * 0.9;
    context.save();
    context.globalAlpha = 0.78 * (1 - pulse);
    context.strokeStyle = "#ff4357";
    context.lineWidth = 0.8;
    context.shadowBlur = 7;
    context.shadowColor = "#ff304d";
    context.beginPath();
    context.arc(epicenter.x, epicenter.y, 1.5 + pulse * maxRadius, 0, Math.PI * 2);
    context.stroke();
    context.globalAlpha = 0.9;
    context.beginPath();
    context.arc(epicenter.x, epicenter.y, 1.6, 0, Math.PI * 2);
    context.fillStyle = "#ff5265";
    context.fill();
    context.restore();
  });

  context.save();
  context.translate(centerX, centerY);
  context.rotate(-0.3);
  context.beginPath();
  context.ellipse(0, 0, radius * 1.42, radius * 0.54, 0, 0, Math.PI * 2);
  context.strokeStyle = `${bright}88`;
  context.setLineDash([3, 4]);
  context.stroke();
  context.setLineDash([]);
  const satelliteAngle = time * 0.00065;
  const satelliteX = Math.cos(satelliteAngle) * radius * 1.42;
  const satelliteY = Math.sin(satelliteAngle) * radius * 0.54;
  context.translate(satelliteX, satelliteY);
  context.fillStyle = bright;
  context.fillRect(-3, -2, 6, 4);
  context.fillRect(-8, -1, 4, 2);
  context.fillRect(4, -1, 4, 2);
  context.restore();

  const kushiro = project(42.98, 144.38);
  if (kushiro.depth > 0) {
    const pulse = 3 + (Math.sin(time * 0.006) + 1) * 2;
    context.beginPath();
    context.arc(kushiro.x, kushiro.y, pulse, 0, Math.PI * 2);
    context.fillStyle = bright;
    context.fill();
    context.beginPath();
    context.arc(kushiro.x, kushiro.y, pulse + 4, 0, Math.PI * 2);
    context.strokeStyle = `${bright}b0`;
    context.stroke();
    context.font = "6px monospace";
    context.fillText("KUSHIRO", kushiro.x + 7, kushiro.y - 5);
  }
  if (issTelemetry) {
    const station = project(issTelemetry.latitude, issTelemetry.longitude);
    if (station.depth > 0) {
      const pulse = 2.2 + (Math.sin(time * 0.01) + 1) * 1.7;
      const stationColor = markMode ? "#ff7252" : "#d9ffff";
      context.shadowBlur = 10;
      context.shadowColor = stationColor;
      context.beginPath();
      context.arc(station.x, station.y, pulse, 0, Math.PI * 2);
      context.fillStyle = stationColor;
      context.fill();
      context.beginPath();
      context.arc(station.x, station.y, pulse + 4, 0, Math.PI * 2);
      context.strokeStyle = stationColor;
      context.stroke();
      context.font = "7px monospace";
      context.fillText("ISS", station.x + 7, station.y - 6);
      context.shadowBlur = 0;
    }
  }
  context.restore();
  globalRadarFrame = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? null
    : requestAnimationFrame(updateGlobalRadar);
}

function startGlobalRadar() {
  if (globalRadarFrame === null) globalRadarFrame = requestAnimationFrame(updateGlobalRadar);
}

function getGeomagneticLevel(kp) {
  if (!Number.isFinite(kp)) return null;
  if (kp >= 9) return "G5";
  if (kp >= 8) return "G4";
  if (kp >= 7) return "G3";
  if (kp >= 6) return "G2";
  if (kp >= 5) return "G1";
  return "NONE";
}

function getSolarFlareClass(flux) {
  if (!Number.isFinite(flux) || flux < 0) return null;
  const classes = [
    ["X", 1e-4],
    ["M", 1e-5],
    ["C", 1e-6],
    ["B", 1e-7],
    ["A", 1e-8],
  ];
  const [name, baseline] = classes.find(([, threshold]) => flux >= threshold) || classes.at(-1);
  return `${name}${(flux / baseline).toFixed(1)}`;
}

function updateThreatMonitor() {
  if (kpTelemetry) {
    threatKp.textContent = kpTelemetry.kp.toFixed(1);
    const level = getGeomagneticLevel(kpTelemetry.kp);
    threatGeomagneticAlert.textContent = level === "NONE"
      ? "GEOMAGNETIC // QUIET"
      : `GEOMAGNETIC // ${level} STORM`;
  } else {
    threatKp.textContent = noaaFeedFailed ? "OFFLINE" : "--";
    threatGeomagneticAlert.textContent = noaaFeedFailed ? "GEOMAGNETIC // OFFLINE" : "GEOMAGNETIC // --";
  }

  if (solarXrayTelemetry) {
    threatSolarFlux.textContent = solarXrayTelemetry.flareClass;
    const level = solarXrayTelemetry.flareClass[0];
    threatSolarAlert.textContent = level === "M" || level === "X"
      ? `FLARE // ELEVATED ${level}-CLASS`
      : level === "C"
        ? "FLARE // C-CLASS"
        : "FLARE // LOW";
  } else {
    threatSolarFlux.textContent = solarFeedFailed ? "OFFLINE" : "--";
    threatSolarAlert.textContent = solarFeedFailed ? "FLARE // OFFLINE" : "FLARE // --";
  }

  if (usgsReceivedAt && earthquakeData.length) {
    const latest = earthquakeData[0];
    threatEarthquake.textContent =
      `M${latest.magnitude.toFixed(1)} // ${latest.place || "LOCATION UNAVAILABLE"}`;
  } else if (usgsReceivedAt) {
    threatEarthquake.textContent = "NO M4.5+ EVENT // 24H";
  } else {
    threatEarthquake.textContent = usgsFeedFailed ? "USGS FEED OFFLINE" : "ACQUIRING DATA";
  }

  const ageLabel = (receivedAt) => {
    if (!receivedAt) return "OFFLINE";
    const seconds = Math.max(0, Math.floor((Date.now() - receivedAt) / 1000));
    return seconds < 60 ? `${seconds}S` : `${Math.floor(seconds / 60)}M`;
  };
  threatMonitorStatus.textContent =
    `USGS ${ageLabel(usgsReceivedAt)} // Kp ${ageLabel(noaaReceivedAt)} // X-RAY ${ageLabel(solarReceivedAt)}`;
}

async function fetchThreatJSON(url, source) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), THREAT_REQUEST_TIMEOUT);
  try {
    const response = await fetch(url, {
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`${source} returned HTTP ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

function refreshUSGSEarthquakes() {
  if (usgsRequestPromise) return usgsRequestPromise;
  const request = (async () => {
    try {
      const payload = await fetchThreatJSON(USGS_EARTHQUAKE_URL, "USGS");
      if (!Array.isArray(payload.features)) throw new TypeError("USGS feed has no feature list.");
      earthquakeData = payload.features.flatMap((feature) => {
        const properties = feature?.properties;
        const coordinates = feature?.geometry?.coordinates;
        const rawMagnitude = properties?.mag;
        const rawTime = properties?.time;
        if (
          rawMagnitude === null || rawMagnitude === undefined ||
          rawTime === null || rawTime === undefined ||
          !Array.isArray(coordinates) || coordinates.some((value) => value === null || value === undefined)
        ) return [];
        const magnitude = Number(properties?.mag);
        const longitude = Number(coordinates?.[0]);
        const latitude = Number(coordinates?.[1]);
        const depth = Number(coordinates?.[2]);
        const time = Number(rawTime);
        if (
          !Number.isFinite(magnitude) || magnitude < 0 ||
          !Number.isFinite(latitude) || latitude < -90 || latitude > 90 ||
          !Number.isFinite(longitude) || longitude < -180 || longitude > 180 ||
          !Number.isFinite(depth) || !Number.isFinite(time) ||
          !Number.isFinite(new Date(time).getTime())
        ) return [];
        return [{
          magnitude,
          latitude,
          longitude,
          depth_km: depth,
          time: new Date(time).toISOString(),
          timeValue: time,
          place: typeof properties.place === "string" ? properties.place.slice(0, 180) : "",
        }];
      }).sort((left, right) => right.timeValue - left.timeValue);
      usgsReceivedAt = Date.now();
      usgsFeedFailed = false;
      startGlobalRadar();
    } catch (error) {
      console.warn("USGS earthquake feed could not be refreshed.", error);
      if (!usgsReceivedAt) usgsFeedFailed = true;
    } finally {
      updateThreatMonitor();
      usgsRequestPromise = null;
    }
  })();
  usgsRequestPromise = request;
  return request;
}

function refreshNOAAKp() {
  if (noaaRequestPromise) return noaaRequestPromise;
  const request = (async () => {
    try {
      const payload = await fetchThreatJSON(NOAA_KP_URL, "NOAA planetary K-index");
      if (!Array.isArray(payload)) throw new TypeError("NOAA Kp feed has no data list.");
      const sample = [...payload].reverse().find((item) => {
        const rawValue = item?.kp_index ?? item?.estimated_kp ?? item?.kp;
        if (rawValue === null || rawValue === undefined || rawValue === "") return false;
        const value = Number(rawValue);
        return Number.isFinite(value) && value >= 0 && value <= 9;
      });
      if (!sample) throw new TypeError("NOAA Kp feed contains no valid sample.");
      kpTelemetry = {
        kp: Number(sample.kp_index ?? sample.estimated_kp ?? sample.kp),
        observedAt: typeof sample.time_tag === "string" ? sample.time_tag.slice(0, 40) : "",
        receivedAt: Date.now(),
      };
      noaaReceivedAt = kpTelemetry.receivedAt;
      noaaFeedFailed = false;
    } catch (error) {
      console.warn("NOAA Kp feed could not be refreshed.", error);
      if (!noaaReceivedAt) noaaFeedFailed = true;
    } finally {
      updateThreatMonitor();
      noaaRequestPromise = null;
    }
  })();
  noaaRequestPromise = request;
  return request;
}

function refreshNOAASolarXray() {
  if (solarRequestPromise) return solarRequestPromise;
  const request = (async () => {
    try {
      const payload = await fetchThreatJSON(NOAA_XRAY_URL, "NOAA GOES X-ray");
      if (!Array.isArray(payload)) throw new TypeError("NOAA X-ray feed has no data list.");
      const sample = [...payload].reverse().find((item) => {
        if (item?.energy !== "0.1-0.8nm" || item?.electron_contaminaton === true) return false;
        const flux = Number(item?.flux ?? item?.observed_flux);
        return Number.isFinite(flux) && flux >= 0;
      });
      if (!sample) throw new TypeError("NOAA X-ray feed contains no valid 0.1-0.8nm sample.");
      const flux = Number(sample.flux ?? sample.observed_flux);
      solarXrayTelemetry = {
        flux,
        flareClass: getSolarFlareClass(flux),
        observedAt: typeof sample.time_tag === "string" ? sample.time_tag.slice(0, 40) : "",
        receivedAt: Date.now(),
      };
      solarReceivedAt = solarXrayTelemetry.receivedAt;
      solarFeedFailed = false;
    } catch (error) {
      console.warn("NOAA GOES X-ray feed could not be refreshed.", error);
      if (!solarReceivedAt) solarFeedFailed = true;
    } finally {
      updateThreatMonitor();
      solarRequestPromise = null;
    }
  })();
  solarRequestPromise = request;
  return request;
}

async function refreshThreatMonitor() {
  await Promise.all([
    refreshUSGSEarthquakes(),
    refreshNOAAKp(),
    refreshNOAASolarXray(),
  ]);
  return {
    fetched_at: new Date(Math.max(usgsReceivedAt, noaaReceivedAt) || Date.now()).toISOString(),
    earthquakes: earthquakeData.slice(0, 8).map((event) => ({
      magnitude: event.magnitude,
      latitude: event.latitude,
      longitude: event.longitude,
      depth_km: event.depth_km,
      time: event.time,
      place: event.place,
    })),
    geomagnetic: {
      kp: kpTelemetry?.kp ?? null,
      observed_at: kpTelemetry?.observedAt ?? "",
      g_level: kpTelemetry ? getGeomagneticLevel(kpTelemetry.kp) : null,
    },
    solar: {
      flux_w_m2: solarXrayTelemetry?.flux ?? null,
      observed_at: solarXrayTelemetry?.observedAt ?? "",
    },
  };
}

function isThreatQuestion(text) {
  const normalized = text.normalize("NFKC").toLowerCase();
  return /(地震|宇宙天気|宇宙の天気|地磁気|kp指数|kp値|太陽フレア|磁気嵐|geomagnetic|solar flare)/u.test(normalized);
}

function getISSLocationLabel(latitude, longitude) {
  if (longitude >= 100 && longitude < 150) return "東アジア・西太平洋上空";
  if (longitude >= 150 || longitude < -120) return latitude >= 0 ? "北太平洋上空" : "南太平洋上空";
  if (longitude >= -120 && longitude < -70) return latitude >= 10 ? "北米上空" : "南北アメリカ周辺";
  if (longitude >= -70 && longitude < -20) return latitude >= 0 ? "北大西洋上空" : "南大西洋上空";
  if (longitude >= -20 && longitude < 45) return latitude >= 0 ? "欧州・アフリカ周辺上空" : "アフリカ周辺上空";
  if (longitude >= 45 && longitude < 100) return latitude >= 0 ? "南アジア・インド洋周辺" : "インド洋上空";
  return latitude >= 0 ? "西太平洋周辺上空" : "南半球上空";
}

function haversineCentralAngle(latitude1, longitude1, latitude2, longitude2) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const lat1 = toRadians(latitude1);
  const lat2 = toRadians(latitude2);
  const deltaLat = lat2 - lat1;
  const deltaLon = toRadians(longitude2 - longitude1);
  const haversine =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
  return 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function getISSRangeFromKushiro(latitude, longitude, altitudeKm) {
  const centralAngle = haversineCentralAngle(42.98, 144.38, latitude, longitude);
  const orbitalRadius = EARTH_RADIUS_KM + altitudeKm;
  return Math.sqrt(
    orbitalRadius ** 2 +
    EARTH_RADIUS_KM ** 2 -
    2 * orbitalRadius * EARTH_RADIUS_KM * Math.cos(centralAngle),
  );
}

function updateISSTelemetry() {
  if (!issTelemetry) return;
  const stale = Date.now() - issTelemetry.receivedAt > ISS_REFRESH_INTERVAL * 3;
  const numberFormat = new Intl.NumberFormat("ja-JP", { maximumFractionDigits: 1 });
  issAltitude.textContent = `${numberFormat.format(issTelemetry.altitudeKm)} KM`;
  issVelocity.textContent = `${numberFormat.format(issTelemetry.velocityKmh)} KM/H`;
  issDistance.textContent = `${numberFormat.format(issTelemetry.distanceKm)} KM`;
  issRegion.textContent =
    `ISS ${stale ? "STALE" : "LIVE"} // ${issTelemetry.region} // ${issTelemetry.latitude.toFixed(1)}°, ${issTelemetry.longitude.toFixed(1)}°`;
  updateTelemetryTicker();
}

function refreshISSTelemetry() {
  if (issRequestPromise) return issRequestPromise;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ISS_REQUEST_TIMEOUT);
  issRegion.textContent = issTelemetry ? "ISS LINK // REFRESHING..." : "ISS LINK // ACQUIRING TELEMETRY";
  const request = (async () => {
    try {
      const response = await fetch(ISS_API_URL, {
        cache: "no-store",
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`ISS API returned HTTP ${response.status}`);
      const sample = await response.json();
      const latitude = Number(sample.latitude);
      const longitude = Number(sample.longitude);
      const altitudeKm = Number(sample.altitude);
      const velocityKmh = Number(sample.velocity);
      if (
        !Number.isFinite(latitude) || latitude < -90 || latitude > 90 ||
        !Number.isFinite(longitude) || longitude < -180 || longitude > 180 ||
        !Number.isFinite(altitudeKm) || altitudeKm <= 0 ||
        !Number.isFinite(velocityKmh) || velocityKmh < 0
      ) {
        throw new TypeError("ISS API returned invalid orbital coordinates.");
      }

      const previous = issTelemetry;
      if (
        previous &&
        haversineCentralAngle(previous.latitude, previous.longitude, latitude, longitude) *
          EARTH_RADIUS_KM > 250
      ) {
        issTrack = [];
      }
      issTelemetry = {
        latitude,
        longitude,
        altitudeKm,
        velocityKmh,
        distanceKm: getISSRangeFromKushiro(latitude, longitude, altitudeKm),
        region: getISSLocationLabel(latitude, longitude),
        receivedAt: Date.now(),
      };
      issTrack.push({ latitude, longitude });
      if (issTrack.length > ISS_MAX_TRACK_POINTS) issTrack.shift();
      updateISSTelemetry();
      return issTelemetry;
    } catch (error) {
      console.warn("ISS telemetry could not be refreshed.", error);
      issRegion.textContent = issTelemetry
        ? `ISS LINK // STALE // ${issTelemetry.region}`
        : "ISS LINK // OFFLINE";
      return issTelemetry;
    } finally {
      clearTimeout(timeout);
      issRequestPromise = null;
    }
  })();
  issRequestPromise = request;
  return request;
}

function isISSQuestion(text) {
  const normalized = text.normalize("NFKC").toLowerCase();
  return /(iss|国際宇宙ステーション|宇宙ステーション)/u.test(normalized) &&
    /(どこ|現在地|位置|今|上空)/u.test(normalized);
}

function buildISSQuestionContext(question, telemetry) {
  if (!telemetry) {
    return `${question}\n\n【ISS最新テレメトリー】現在位置データを取得できませんでした。位置・高度・速度・距離を推測せず、最新データの取得に失敗したと明示してください。`;
  }
  const sampledAt = new Date(telemetry.receivedAt).toLocaleString("ja-JP");
  const stale = Date.now() - telemetry.receivedAt > ISS_REFRESH_INTERVAL * 3;
  return `${question}\n\n【ISS最新テレメトリー${stale ? " // STALE" : ""}】\n取得時刻: ${sampledAt}\n位置推定: ${telemetry.region}\n緯度: ${telemetry.latitude.toFixed(3)}° / 経度: ${telemetry.longitude.toFixed(3)}°\n高度: ${telemetry.altitudeKm.toFixed(1)} km\n速度: ${telemetry.velocityKmh.toFixed(1)} km/h\n釧路市からの直線距離: ${telemetry.distanceKm.toFixed(1)} km\n\nこの最新テレメトリーに基づき、上空の地域・海洋、高度、時速、釧路からの距離をJ.A.R.V.I.S.らしい日本語で報告してください。`;
}

function bytesToBase64Url(bytes) {
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }
  return btoa(binary).replace(/\+/gu, "-").replace(/\//gu, "_").replace(/=+$/u, "");
}

function base64UrlToBytes(value) {
  if (!/^[\w-]+$/u.test(value)) throw new TypeError("暗号文の形式が正しくありません。");
  const base64 = value.replace(/-/gu, "+").replace(/_/gu, "/");
  const binary = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function deriveCipherKey(passphrase, salt, usage) {
  const material = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  return window.crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: CIPHER_ITERATIONS, hash: "SHA-256" },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    [usage],
  );
}

async function encryptCipherText(plainText, passphrase) {
  const salt = window.crypto.getRandomValues(new Uint8Array(16));
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveCipherKey(passphrase, salt, "encrypt");
  const ciphertext = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    new TextEncoder().encode(plainText),
  );
  return `STARK1.${bytesToBase64Url(salt)}.${bytesToBase64Url(iv)}.${bytesToBase64Url(new Uint8Array(ciphertext))}`;
}

async function decryptCipherText(encodedCiphertext, passphrase) {
  const match = /^STARK1\.([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/u.exec(encodedCiphertext.trim());
  if (!match) throw new TypeError("STARK1形式の暗号文を入力してください。");
  const salt = base64UrlToBytes(match[1]);
  const iv = base64UrlToBytes(match[2]);
  const ciphertext = base64UrlToBytes(match[3]);
  if (salt.length !== 16 || iv.length !== 12 || ciphertext.length < 16) {
    throw new TypeError("暗号文データが破損しているか、形式が正しくありません。");
  }
  const key = await deriveCipherKey(passphrase, salt, "decrypt");
  const plaintext = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
  return new TextDecoder("utf-8", { fatal: true }).decode(plaintext);
}

function animateCipherScramble() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*+-=[]{}<>?";
  const duration = 1000;
  const started = performance.now();
  return new Promise((resolve) => {
    function update(now) {
      cipherOutput.value = Array.from({ length: 48 }, () =>
        alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
      if (now - started >= duration) resolve();
      else requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

async function runCipherOperation(mode) {
  if (cipherOperationRunning) return;
  if (!window.crypto?.subtle) {
    cipherStatus.textContent = "WEB CRYPTO UNAVAILABLE // HTTPS OR LOCALHOST REQUIRED";
    return;
  }
  const source = cipherInput.value;
  const passphrase = cipherKeyInput.value;
  if (!source.trim()) {
    cipherStatus.textContent = "INPUT REQUIRED // テキストを入力してください";
    return;
  }
  if (!passphrase) {
    cipherStatus.textContent = "PASSPHRASE REQUIRED // パスフレーズを入力してください";
    cipherKeyInput.focus();
    return;
  }

  cipherOperationRunning = true;
  cipherEncryptButton.disabled = true;
  cipherDecryptButton.disabled = true;
  cipherStatus.textContent = mode === "encrypt" ? "ENCRYPTING // SCRAMBLING DATA" : "DECRYPTING // SCRAMBLING DATA";
  playSfx("cipher", true);
  const scramble = animateCipherScramble();
  try {
    const result = mode === "encrypt"
      ? await encryptCipherText(source, passphrase)
      : await decryptCipherText(source, passphrase);
    await scramble;
    cipherOutput.value = result;
    cipherStatus.textContent = mode === "encrypt"
      ? "AES-256-GCM // ENCRYPTION COMPLETE"
      : "AES-256-GCM // DECRYPTION COMPLETE";
  } catch (error) {
    await scramble;
    console.error(`STARK CIPHER ${mode} operation failed.`, error);
    cipherOutput.value = "";
    cipherStatus.textContent = error instanceof TypeError
      ? error.message
      : mode === "decrypt"
        ? "DECRYPT FAILED // PASSPHRASE OR DATA INVALID"
        : `ENCRYPT FAILED // ${error.message}`;
  } finally {
    cipherOperationRunning = false;
    cipherEncryptButton.disabled = false;
    cipherDecryptButton.disabled = false;
  }
}

function playStartupChime() {
  playSfx("wake");
}

function updateSfxButton() {
  sfxToggle.textContent = `SFX: ${sfxEnabled ? "ON" : "OFF"}`;
  sfxToggle.setAttribute("aria-pressed", String(sfxEnabled));
  sfxToggle.title = sfxEnabled ? "効果音をミュート" : "効果音のミュートを解除";
}

function updateSfxGain() {
  if (!sfxMasterGain || !audioContext) return;
  sfxMasterGain.gain.setTargetAtTime(
    sfxEnabled ? sfxVolume : 0,
    audioContext.currentTime,
    0.02,
  );
}

function toggleSfx() {
  sfxEnabled = !sfxEnabled;
  updateSfxButton();
  updateSfxGain();
  if (sfxEnabled && requestInProgress) {
    startProcessingSfx();
  } else if (!sfxEnabled) {
    stopProcessingSfx();
  }
}

function startProcessingSfx() {
  if (!sfxEnabled || processingSfxTimer || processingSfxStartTimer) return;
  processingSfxStartTimer = setTimeout(() => {
    processingSfxStartTimer = null;
    if (!requestInProgress || !sfxEnabled) return;
    playSfx("processing");
    processingSfxTimer = setInterval(() => playSfx("processing"), 1800);
  }, 500);
}

function stopProcessingSfx() {
  clearTimeout(processingSfxStartTimer);
  processingSfxStartTimer = null;
  clearInterval(processingSfxTimer);
  processingSfxTimer = null;
}

function updateHudModeButton() {
  const markMode = hudMode === "mark-iii";
  hudModeLabel.textContent = markMode ? "MARK-III" : "STANDARD";
  hudModeToggle.classList.toggle("is-mark-iii", markMode);
  hudModeToggle.setAttribute("aria-pressed", String(markMode));
  hudModeToggle.setAttribute(
    "aria-label",
    `HUD MODE: ${markMode ? "MARK-III" : "STANDARD"}。クリックして${markMode ? "STANDARD" : "MARK-III"}に切り替え`,
  );
  hudModeToggle.title = `HUD MODEを${markMode ? "STANDARD" : "MARK-III"}に切り替え`;
}

function updateMissionTimerDisplay() {
  const minutes = Math.floor(missionRemainingSeconds / 60);
  const seconds = missionRemainingSeconds % 60;
  const isRunning = missionTimerInterval !== null;
  missionTimerValue.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  missionTimerStatus.textContent = missionRemainingSeconds === 0
    ? "MISSION COMPLETE"
    : isRunning
      ? "COUNTDOWN // ACTIVE"
      : missionRemainingSeconds === MISSION_DURATION_SECONDS
        ? "READY // 25 MIN"
        : "PAUSED // READY";
  missionTimerToggle.textContent = missionRemainingSeconds === 0
    ? "COMPLETE"
    : isRunning
      ? "PAUSE"
      : "START";
  missionTimerToggle.disabled = missionRemainingSeconds === 0;
  missionTimerToggle.setAttribute("aria-pressed", String(isRunning));
  updateFlightTelemetry();
  checkIcingAlert();
}

function restoreOperatorAnalytics() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(OPERATOR_ANALYTICS_STORAGE_KEY) || "null");
    if (!stored || typeof stored !== "object") return;
    for (const [key, maximum] of [
      ["completedFocusSessions", 1_000_000],
      ["completedFocusMinutes", 25_000_000],
      ["completedTasks", 1_000_000],
      ["conversations", 10_000_000],
    ]) {
      const value = stored[key];
      if (Number.isSafeInteger(value) && value >= 0 && value <= maximum) {
        operatorAnalytics[key] = value;
      }
    }
  } catch (error) {
    console.error("OPERATOR ANALYTICS could not be restored from localStorage.", error);
  }
}

function getOperatorPoints() {
  return operatorAnalytics.completedFocusSessions * 100 +
    operatorAnalytics.completedTasks * 50 +
    operatorAnalytics.conversations * 5;
}

function updateOperatorAnalytics(announcePromotion = false) {
  const previousRank = currentOperatorRankIndex;
  const points = getOperatorPoints();
  currentOperatorRankIndex = OPERATOR_RANKS.reduce(
    (rank, item, index) => points >= item.points ? index : rank,
    0,
  );
  const currentRank = OPERATOR_RANKS[currentOperatorRankIndex];
  const nextRank = OPERATOR_RANKS[currentOperatorRankIndex + 1];
  const progress = nextRank
    ? Math.min(100, Math.floor(((points - currentRank.points) / (nextRank.points - currentRank.points)) * 100))
    : 100;
  analyticsRank.textContent = currentRank.name;
  analyticsPoints.textContent = points.toLocaleString("ja-JP");
  analyticsProgressFill.style.width = `${progress}%`;
  analyticsProgress.setAttribute("aria-valuenow", String(progress));
  analyticsProgress.setAttribute(
    "aria-valuetext",
    nextRank ? `${points - currentRank.points} / ${nextRank.points - currentRank.points} XP` : "最高ランク",
  );
  analyticsFocusCount.textContent = operatorAnalytics.completedFocusMinutes.toLocaleString("ja-JP");
  analyticsTaskCount.textContent = operatorAnalytics.completedTasks.toLocaleString("ja-JP");
  analyticsConversationCount.textContent = operatorAnalytics.conversations.toLocaleString("ja-JP");

  try {
    window.localStorage.setItem(OPERATOR_ANALYTICS_STORAGE_KEY, JSON.stringify(operatorAnalytics));
  } catch (error) {
    console.error("OPERATOR ANALYTICS could not be saved to localStorage.", error);
    appendSystemLog("ANALYTICS STORAGE // WRITE FAILED");
  }
  if (announcePromotion && currentOperatorRankIndex > previousRank) {
    const announcement = `ランクアップです、伊吹様。${currentRank.name}へ昇格いたしました。`;
    appendSystemLog(`OPERATOR PROMOTION // ${currentRank.name}`);
    playSfx("rank-up", true);
    if (voiceOutputEnabled) void speakReply(announcement);
  }
}

function recordOperatorActivity(activity) {
  if (activity === "focus") {
    operatorAnalytics.completedFocusSessions += 1;
    operatorAnalytics.completedFocusMinutes += 25;
  } else if (activity === "task") {
    operatorAnalytics.completedTasks += 1;
  } else if (activity === "conversation") {
    operatorAnalytics.conversations += 1;
  } else {
    console.error(`Unknown OPERATOR ANALYTICS activity: ${activity}`);
    return;
  }
  updateOperatorAnalytics(true);
}

function tickMissionTimer() {
  if (!missionTimerDeadline) return;
  missionRemainingSeconds = Math.max(
    0,
    Math.ceil((missionTimerDeadline - performance.now()) / 1000),
  );
  if (missionRemainingSeconds === 0) {
    clearInterval(missionTimerInterval);
    missionTimerInterval = null;
    missionTimerDeadline = 0;
    updateMissionTimerDisplay();
    playSfx("ready");
    recordOperatorActivity("focus");
    return;
  }
  updateMissionTimerDisplay();
}

function pauseMissionTimer() {
  if (missionTimerInterval === null) return;
  tickMissionTimer();
  if (missionTimerInterval !== null) {
    clearInterval(missionTimerInterval);
    missionTimerInterval = null;
    missionTimerDeadline = 0;
    updateMissionTimerDisplay();
  }
}

function toggleMissionTimer() {
  if (missionTimerInterval !== null) {
    pauseMissionTimer();
    appendSystemLog("MISSION TIMER // PAUSED");
    return;
  }
  if (missionRemainingSeconds === 0) return;
  missionTimerDeadline = performance.now() + missionRemainingSeconds * 1000;
  missionTimerInterval = setInterval(tickMissionTimer, 250);
  updateMissionTimerDisplay();
  appendSystemLog("MISSION TIMER // STARTED");
}

function resetMissionTimer() {
  clearInterval(missionTimerInterval);
  missionTimerInterval = null;
  missionTimerDeadline = 0;
  missionRemainingSeconds = MISSION_DURATION_SECONDS;
  icingWarningIssued = false;
  clearIcingAlert();
  updateMissionTimerDisplay();
  appendSystemLog("MISSION TIMER // RESET");
}

function updateSentryStatus() {
  sentryToggle.setAttribute("aria-pressed", String(sentryMode));
  sentryToggleState.textContent = sentryMode ? "ON" : "OFF";
  sentryStatus.textContent = sentryStandbyActive
    ? "SENTRY: SYSTEM STANDBY"
    : sentryPromptPending
      ? "SENTRY: OPERATOR CHECK PENDING"
      : sentryMode
        ? "SENTRY: ACTIVE // OPERATOR FOCUS 100%"
        : "SENTRY: OFFLINE";
  updateTelemetryTicker();
}

function setSentryMode(enabled) {
  sentryMode = enabled;
  clearInterval(sentryCheckInterval);
  sentryCheckInterval = null;
  sentryPromptPending = false;
  if (sentryDialog.open) sentryDialog.close();
  if (enabled) {
    lastOperatorActivity = Date.now();
    sentryCheckInterval = setInterval(checkSentryIdle, SENTRY_CHECK_INTERVAL);
    appendSystemLog("SENTRY MODE // OPERATOR MONITOR ACTIVE");
  } else {
    sentryStandbyActive = false;
    sentryStandbyOverlay.hidden = true;
    appendSystemLog("SENTRY MODE // DISARMED");
  }
  updateSentryStatus();
}

function markOperatorActivity(event) {
  if (!sentryMode || sentryStandbyActive) return;
  if (
    event.target instanceof Element &&
    event.target.closest("#system-lock-overlay, #sentry-standby-overlay, #sentry-dialog")
  ) return;
  lastOperatorActivity = Date.now();
}

function checkSentryIdle() {
  if (
    !sentryMode ||
    sentryStandbyActive ||
    sentryPromptPending ||
    systemLocked ||
    cleanSlatePending ||
    Date.now() - lastOperatorActivity < SENTRY_IDLE_LIMIT
  ) return;
  sentryPromptPending = true;
  updateSentryStatus();
  [simulationDialog, cipherDialog, memoryDialog, holoDialog, prototypeDialog, knowledgeDialog].forEach((dialog) => {
    if (dialog.open) dialog.close();
  });
  sentryDialog.showModal();
  playSfx("sentry-alert", true);
  const prompt = "伊吹様、15分間操作反応が途絶えております。システムをスタンバイに移行いたしますか？それとも作業を続行されますか？";
  if (voiceOutputEnabled) void speakReply(prompt);
  appendSystemLog("SENTRY ALERT // 15-MINUTE IDLE");
}

function continueAfterSentryPrompt() {
  if (sentryDialog.open) sentryDialog.close();
  sentryPromptPending = false;
  lastOperatorActivity = Date.now();
  updateSentryStatus();
}

function enterSentryStandby() {
  if (sentryDialog.open) sentryDialog.close();
  sentryPromptPending = false;
  sentryStandbyActive = true;
  sentryStandbyOverlay.hidden = false;
  updateSentryStatus();
  appendSystemLog("OPERATOR SESSION // STANDBY");
  sentryResumeButton.focus();
}

function resumeFromSentryStandby() {
  sentryStandbyActive = false;
  sentryStandbyOverlay.hidden = true;
  lastOperatorActivity = Date.now();
  updateSentryStatus();
  appendSystemLog("OPERATOR SESSION // RESUMED");
}

function setSystemLocked(locked) {
  systemLocked = locked;
  if (locked) {
    [simulationDialog, sentryDialog, cipherDialog, memoryDialog, holoDialog, prototypeDialog, knowledgeDialog].forEach((dialog) => {
      if (dialog.open) dialog.close();
    });
  }
  if (locked && !systemLockOverlay.open) systemLockOverlay.showModal();
  if (!locked && systemLockOverlay.open) systemLockOverlay.close();
  updateTelemetryTicker();
  if (locked) {
    sentryPromptPending = false;
    updateSentryStatus();
    systemLockStatus.textContent = "LOCAL UI LOCK // NOT A SECURITY BOUNDARY";
    appendSystemLog("SYSTEM LOCK // LOCAL UI GUARD ACTIVE");
    playSfx("lock", true);
    systemUnlockButton.focus();
  } else {
    lastOperatorActivity = Date.now();
    appendSystemLog("BIOMETRIC SESSION // UNLOCKED");
    playSfx("unlock", true);
    promptInput.focus();
    scheduleStandbyRecognition();
  }
}

function lockSystem() {
  if (!systemLocked) setSystemLocked(true);
}

function unlockSystem() {
  if (systemLocked) setSystemLocked(false);
}

function updateMarkModeSystems() {
  const markMode = hudMode === "mark-iii";
  flightPanel.hidden = !markMode;
  if (!markMode) clearIcingAlert();
  updateFlightTelemetry();
  updateMissionTimerDisplay();
}

function clearIcingAlert() {
  clearTimeout(icingAlertTimer);
  icingAlertTimer = null;
  icingAlertFrame.hidden = true;
}

function checkIcingAlert() {
  if (hudMode !== "mark-iii" || missionRemainingSeconds > 180 || icingWarningIssued) return;
  icingWarningIssued = true;
  icingAlertFrame.hidden = false;
  appendSystemLog("FLIGHT WARNING // ICING THRESHOLD");
  playSfx("icing-alert", true);
  const warning = "伊吹様、機体表面に氷結の兆候（集中限界）が確認されました。一度高度を下げて休息を取ることを強く推奨いたします。";
  if (voiceOutputEnabled) void speakReply(warning);
  icingAlertTimer = setTimeout(clearIcingAlert, 15000);
}

function clearModeInlineOverrides() {
  const targets = [
    document.documentElement,
    document.body,
    ...document.body.querySelectorAll("[style]"),
  ];
  const properties = [
    "color",
    "background",
    "background-color",
    "border-color",
    "box-shadow",
    "filter",
    "--cyan",
    "--cyan-soft",
    "--blue",
    "--orange",
    "--line",
    "--panel",
  ];
  targets.forEach((element) => properties.forEach((property) => element.style.removeProperty(property)));
  [document.body, ...document.body.querySelectorAll("[class]")].forEach((element) => {
    [...element.classList]
      .filter((name) => /^(?:is-)?mark-iii(?:-|$)/u.test(name))
      .forEach((name) => element.classList.remove(name));
  });
}

function restoreStandardAppearance() {
  pauseMissionTimer();
  clearModeInlineOverrides();
  document.body.dataset.hudMode = "standard";
  updateHudModeButton();
  updateMarkModeSystems();
}

function completeModeTransition(version) {
  if (version !== modeTransitionVersion) return;
  document.body.classList.remove("mode-transitioning", "mode-transitioning-to-mark-iii", "mode-transitioning-to-standard");
  modeTransitionOverlay.classList.remove("is-active");
  if (requestInProgress || isListening || isSpeaking) {
    syncCoreState();
  }
}

function setHudMode(mode, playTransformSound = true) {
  if (!["standard", "mark-iii"].includes(mode)) return;
  const body = document.body;
  if (mode === hudMode) {
    if (mode === "standard" && !body.classList.contains("mode-transitioning")) {
      restoreStandardAppearance();
    }
    return;
  }

  clearTimeout(modeThemeSwitchTimer);
  clearTimeout(modeTransitionCleanupTimer);
  const version = ++modeTransitionVersion;
  hudMode = mode;
  updateHoloTheme();
  appendSystemLog(`HUD MODE // ${mode.toUpperCase()}`);
  if (mode === "standard") {
    pauseMissionTimer();
    flightPanel.hidden = true;
    clearIcingAlert();
  } else {
    flightPanel.hidden = false;
  }
  clearModeInlineOverrides();
  updateHudModeButton();
  const markMode = mode === "mark-iii";
  body.classList.remove("mode-transitioning-to-mark-iii", "mode-transitioning-to-standard");
  body.classList.add("mode-transitioning", `mode-transitioning-to-${mode}`);
  modeTransitionOverlay.classList.remove("is-active");
  void modeTransitionOverlay.offsetWidth;
  modeTransitionOverlay.classList.add("is-active");
  modeBanner.textContent = markMode
    ? "[ PROTOCOL: MARK-III COMBAT MODE ENGAGED ]"
    : "[ RESTORING STANDARD TELEMETRY ]";
  if (playTransformSound) playSfx(markMode ? "armor-on" : "armor-off", true);
  if (requestInProgress || isListening || isSpeaking) {
    syncCoreState();
  } else {
    coreCaption.textContent = markMode
      ? "マーク3プロトコルを展開しました。"
      : "システムは正常です。ご用件をどうぞ。";
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (mode === "standard") restoreStandardAppearance();
    else {
      body.dataset.hudMode = mode;
      updateMarkModeSystems();
    }
    completeModeTransition(version);
    return;
  }

  modeThemeSwitchTimer = setTimeout(() => {
    if (version !== modeTransitionVersion) return;
    if (mode === "standard") restoreStandardAppearance();
    else {
      body.dataset.hudMode = mode;
      updateMarkModeSystems();
    }
  }, MODE_THEME_SWITCH_DELAY);
  modeTransitionCleanupTimer = setTimeout(
    () => completeModeTransition(version),
    MODE_TRANSITION_DURATION,
  );
}

function finishBootSequence() {
  if (!document.body.classList.contains("is-booting")) return;
  clearTimeout(bootSequenceTimer);
  bootSequenceTimer = null;
  document.body.classList.remove("is-booting");
  bootOverlay.classList.add("is-closing");
  setTimeout(() => bootOverlay.remove(), 450);
}

function startBootSequence() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    finishBootSequence();
    return;
  }
  bootSequenceTimer = setTimeout(finishBootSequence, BOOT_SEQUENCE_DURATION);
}

function toggleHudMode() {
  setHudMode(hudMode === "standard" ? "mark-iii" : "standard");
}

function detectHudModeCommand(text) {
  const normalized = text
    .normalize("NFKC")
    .replace(/[\s、。，.!！?？\-]/gu, "")
    .toLowerCase();
  if (
    normalized.includes("通常モード") ||
    normalized.includes("スタンダード") ||
    normalized.includes("標準モード") ||
    normalized === "解除" ||
    normalized.includes("解除して") ||
    normalized.includes("モード解除")
  ) {
    return "standard";
  }
  if (/(?:マーク(?:スリー|3|iii)|mark(?:3|iii)|アイアンマンモード|戦闘モード)/u.test(normalized)) {
    return "mark-iii";
  }
  return null;
}

function stopSpeech() {
  speechRequestId += 1;
  activeUtterance = null;
  speechPurpose = "reply";
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.removeAttribute("src");
    activeAudio.load();
    activeAudio = null;
  }
  if (activeAudioUrl) {
    URL.revokeObjectURL(activeAudioUrl);
    activeAudioUrl = null;
  }
  isSpeaking = false;
  syncCoreState();
}

function speakReplyWithBrowser(text, requestId) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    setVoiceStatus("このブラウザーは音声読み上げに対応していません", "error");
    isSpeaking = false;
    syncCoreState();
    scheduleStandbyRecognition();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.pitch = 0.78;
  utterance.rate = 0.92;
  utterance.volume = 1;
  const japaneseVoice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith("ja"));
  if (japaneseVoice) utterance.voice = japaneseVoice;
  activeUtterance = utterance;

  utterance.onstart = () => {
    if (speechRequestId !== requestId || activeUtterance !== utterance) return;
    isSpeaking = true;
    setVoiceStatus("BROWSER TTS // SPEAKING", "speaking");
    syncCoreState();
  };
  utterance.onend = () => {
    if (speechRequestId !== requestId || activeUtterance !== utterance) return;
    activeUtterance = null;
    isSpeaking = false;
    setVoiceStatus("VOICE LINK // READY");
    syncCoreState();
    scheduleStandbyRecognition();
  };
  utterance.onerror = (event) => {
    if (speechRequestId !== requestId || activeUtterance !== utterance) return;
    activeUtterance = null;
    isSpeaking = false;
    setVoiceStatus(
      event.error === "canceled" || event.error === "interrupted"
        ? "VOICE LINK // READY"
        : "音声読み上げに失敗しました",
      event.error === "canceled" || event.error === "interrupted" ? "ready" : "error",
    );
    syncCoreState();
    scheduleStandbyRecognition();
  };
  window.speechSynthesis.speak(utterance);
}

function finishAudioPlayback(audio, requestId, error = null) {
  if (speechRequestId !== requestId || activeAudio !== audio) return;
  const completedPurpose = speechPurpose;
  activeAudio = null;
  audio.removeAttribute("src");
  audio.load();
  if (activeAudioUrl) {
    URL.revokeObjectURL(activeAudioUrl);
    activeAudioUrl = null;
  }
  isSpeaking = false;
  speechPurpose = "reply";
  if (completedPurpose === "wake-ack" && error) {
    setVoiceStatus("NEURAL VOICE OFFLINE // BROWSER FALLBACK", "speaking");
    speakWakeAcknowledgementWithBrowser(requestId);
    return;
  }
  setVoiceStatus(error ? "音声の再生に失敗しました" : "VOICE LINK // READY", error ? "error" : "ready");
  syncCoreState();
  if (completedPurpose === "wake-ack" && voiceStandbyEnabled) {
    wakeActivated = false;
    startRecognition("command");
  } else {
    scheduleStandbyRecognition();
  }
}

function preloadWakeAcknowledgement() {
  wakeAudioPromise = fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: "はい。" }),
  }).then(async (response) => {
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || `音声APIがHTTP ${response.status}を返しました`);
    }
    const audioBlob = await response.blob();
    if (!audioBlob.size) throw new Error("音声APIから空のデータが返されました");
    return audioBlob;
  });
  wakeAudioPromise.catch((error) => {
    console.error("Wake acknowledgement audio could not be cached.", error);
  });
}

function finishWakeAcknowledgement(requestId) {
  if (speechRequestId !== requestId) return;
  activeUtterance = null;
  isSpeaking = false;
  wakeActivated = false;
  setVoiceStatus("VOICE STANDBY // LISTENING", "listening");
  syncCoreState();
  if (voiceStandbyEnabled) startRecognition("command");
}

function speakWakeAcknowledgementWithBrowser(requestId) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    isSpeaking = false;
    wakeActivated = false;
    setVoiceStatus("音声読み上げに失敗しました", "error");
    syncCoreState();
    if (voiceStandbyEnabled) startRecognition("command");
    return;
  }
  const utterance = new SpeechSynthesisUtterance("はい。");
  utterance.lang = "ja-JP";
  utterance.pitch = 0.78;
  utterance.rate = 0.92;
  utterance.volume = 1;
  const japaneseVoice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith("ja"));
  if (japaneseVoice) utterance.voice = japaneseVoice;
  activeUtterance = utterance;
  isSpeaking = true;
  syncCoreState();
  utterance.onend = () => finishWakeAcknowledgement(requestId);
  utterance.onerror = () => finishWakeAcknowledgement(requestId);
  window.speechSynthesis.speak(utterance);
}

async function playWakeAcknowledgement() {
  stopSpeech();
  const requestId = speechRequestId;
  speechPurpose = "wake-ack";
  isSpeaking = true;
  setVoiceStatus("J.A.R.V.I.S. // ACKNOWLEDGING", "speaking");
  syncCoreState();
  try {
    const audioBlob = await wakeAudioPromise;
    if (speechRequestId !== requestId || !voiceStandbyEnabled) return;
    const audio = new Audio(URL.createObjectURL(audioBlob));
    activeAudio = audio;
    activeAudioUrl = audio.src;
    audio.onended = () => finishAudioPlayback(audio, requestId);
    audio.onerror = () =>
      finishAudioPlayback(audio, requestId, new Error("wake acknowledgement playback failed"));
    await audio.play();
    if (speechRequestId !== requestId || activeAudio !== audio) return;
    setVoiceStatus("J.A.R.V.I.S. // SPEAKING", "speaking");
  } catch (error) {
    if (speechRequestId !== requestId || !voiceStandbyEnabled) return;
    console.error("Cached wake acknowledgement could not be played.", error);
    if (activeAudio) {
      activeAudio.onended = null;
      activeAudio.onerror = null;
      activeAudio.pause();
      activeAudio.removeAttribute("src");
      activeAudio.load();
      activeAudio = null;
    }
    if (activeAudioUrl) {
      URL.revokeObjectURL(activeAudioUrl);
      activeAudioUrl = null;
    }
    speechPurpose = "reply";
    setVoiceStatus("NEURAL VOICE OFFLINE // BROWSER FALLBACK", "speaking");
    speakWakeAcknowledgementWithBrowser(requestId);
  }
}

async function speakReply(text) {
  if (!voiceOutputEnabled) return;
  stopSpeech();
  const requestId = speechRequestId;
  isSpeaking = true;
  syncCoreState();
  setVoiceStatus("NEURAL VOICE // GENERATING", "speaking");

  let response;
  try {
    response = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
  } catch (error) {
    if (speechRequestId !== requestId || !voiceOutputEnabled) return;
    console.error("Neural TTS request failed; using browser speech synthesis.", error);
    setVoiceStatus("NEURAL VOICE OFFLINE // BROWSER FALLBACK", "speaking");
    speakReplyWithBrowser(text, requestId);
    return;
  }

  if (!response.ok) {
    if (speechRequestId !== requestId || !voiceOutputEnabled) return;
    const error = await response.json().catch(() => ({}));
    console.error("Neural TTS returned an error.", error);
    isSpeaking = false;
    syncCoreState();
    setVoiceStatus(error.error || `音声APIがHTTP ${response.status}を返しました`, "error");
    scheduleStandbyRecognition();
    return;
  }

  let audioBlob;
  try {
    audioBlob = await response.blob();
  } catch (error) {
    if (speechRequestId !== requestId || !voiceOutputEnabled) return;
    console.error("Neural TTS request failed; using browser speech synthesis.", error);
    setVoiceStatus("NEURAL VOICE OFFLINE // BROWSER FALLBACK", "speaking");
    speakReplyWithBrowser(text, requestId);
    return;
  }
  if (speechRequestId !== requestId || !voiceOutputEnabled) return;
  if (!audioBlob.size) {
    isSpeaking = false;
    syncCoreState();
    setVoiceStatus("音声APIから空のデータが返されました", "error");
    scheduleStandbyRecognition();
    return;
  }

  const audio = new Audio();
  activeAudio = audio;
  activeAudioUrl = URL.createObjectURL(audioBlob);
  audio.src = activeAudioUrl;
  audio.onended = () => finishAudioPlayback(audio, requestId);
  audio.onerror = () => finishAudioPlayback(audio, requestId, new Error("audio playback failed"));
  try {
    await audio.play();
    if (speechRequestId !== requestId || activeAudio !== audio) return;
    isSpeaking = true;
    setVoiceStatus("J.A.R.V.I.S. // SPEAKING", "speaking");
    syncCoreState();
  } catch (error) {
    if (speechRequestId !== requestId || activeAudio !== audio) return;
    console.error("Neural TTS audio playback failed.", error);
    finishAudioPlayback(audio, requestId, error);
  }
}

function toggleVoiceOutput() {
  voiceOutputEnabled = !voiceOutputEnabled;
  speakerButton.setAttribute("aria-pressed", String(voiceOutputEnabled));
  speakerButton.setAttribute(
    "aria-label",
    voiceOutputEnabled ? "音声読み上げをオフにする" : "音声読み上げをオンにする",
  );
  speakerButton.title = `音声読み上げ ${voiceOutputEnabled ? "ON" : "OFF"}`;
  speakerButton.classList.toggle("is-muted", !voiceOutputEnabled);
  speakerButton.querySelector(".control-label").textContent = voiceOutputEnabled
    ? "VOICE ON"
    : "VOICE OFF";
  const activelyListening = isListening && recognitionMode !== "standby";
  if (voiceOutputEnabled) {
    setVoiceStatus(
      activelyListening
        ? "聞き取り中..."
        : voiceStandbyEnabled && isListening
          ? "VOICE STANDBY // ACTIVE"
          : "VOICE LINK // READY",
      activelyListening ? "listening" : "ready",
    );
  } else {
    stopSpeech();
    setVoiceStatus(
      activelyListening
        ? "聞き取り中..."
        : voiceStandbyEnabled && isListening
          ? "VOICE STANDBY // ACTIVE"
          : "VOICE OUTPUT // MUTED",
      activelyListening ? "listening" : voiceStandbyEnabled && isListening ? "ready" : "muted",
    );
    scheduleStandbyRecognition();
  }
}

function getSpeechRecognitionConstructor() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    return null;
  }
  return SpeechRecognition;
}

function extractWakePhrase(text) {
  const normalized = text.normalize("NFKC");
  const match = /ジャービス|じゃーびす|jarvis/iu.exec(normalized);
  if (!match || match.index === undefined) return null;
  const before = normalized.slice(0, match.index);
  const after = normalized.slice(match.index + match[0].length);
  return {
    remainder: `${before} ${after}`
      .replace(/^[\s、。，.!！?？:：\-]+|[\s、。，.!！?？:：\-]+$/gu, "")
      .trim(),
  };
}

function recognitionErrorText(error) {
  const errors = {
    "audio-capture": "マイクを検出できません",
    "no-speech": "音声を検出できませんでした",
    "not-allowed": "マイクの使用が許可されていません",
    "service-not-allowed": "音声認識サービスが許可されていません",
    network: "音声認識サービスに接続できません",
  };
  return errors[error] || `音声認識に失敗しました (${error})`;
}

function startRecognition(mode) {
  if (recognition || sendButton.disabled || isSpeaking || housePartyPending || cleanSlatePending) return;
  if (mode === "standby" && !voiceStandbyEnabled) return;
  const SpeechRecognition = getSpeechRecognitionConstructor();
  if (!SpeechRecognition) {
    setVoiceStatus("このブラウザーは音声認識に対応していません", "error");
    if (mode === "standby") {
      voiceStandbyEnabled = false;
      updateVoiceStandbyButton();
    }
    return;
  }

  const activeRecognition = new SpeechRecognition();
  let transcript = "";
  let recognitionError = "";
  let recognitionErrorCode = "";
  let wakeTimerForSession = null;
  let wakeCandidateForSession = "";
  let wakeCandidateIsFinal = false;
  let finalizedWakeRemainder = null;
  cancelRecognition = false;
  recognition = activeRecognition;
  recognitionMode = mode;
  isListening = true;
  setVoiceStatus(
    mode === "standby" ? "VOICE STANDBY // ACTIVE" : "聞き取り中...",
    mode === "standby" ? "ready" : "listening",
  );
  syncCoreState();

  activeRecognition.lang = "ja-JP";
  activeRecognition.continuous = mode === "standby";
  activeRecognition.interimResults = true;
  activeRecognition.maxAlternatives = 1;
  activeRecognition.onresult = (event) => {
    if (recognition !== activeRecognition || cancelRecognition) return;
    if (mode === "standby") {
      let heard = "";
      for (let index = 0; index < event.results.length; index += 1) {
        heard += event.results[index][0].transcript;
      }
      const wake = extractWakePhrase(heard);
      if (!wake) return;
      wakeCandidateForSession = wake.remainder;
      const finalized = Array.from(event.results)
        .filter((result) => result.isFinal)
        .map((result) => result[0].transcript)
        .join("");
      const finalizedWake = extractWakePhrase(finalized);
      finalizedWakeRemainder = finalizedWake ? finalizedWake.remainder : null;
      wakeCandidateIsFinal =
        Boolean(finalizedWake) &&
        (!wake.remainder || finalizedWake.remainder === wake.remainder);
      clearTimeout(wakeTimerForSession);
      const delay = wakeCandidateIsFinal ? 160 : 500;
      wakeTimerForSession = setTimeout(() => {
        if (recognition !== activeRecognition || !voiceStandbyEnabled) return;
        wakeTransitionPending = true;
        wakeRemainder = wakeCandidateForSession;
        wakeActivated = true;
        playStartupChime();
        syncCoreState();
        activeRecognition.abort();
      }, delay);
      return;
    }

    let interim = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const result = event.results[index];
      if (result.isFinal) transcript += result[0].transcript;
      else interim += result[0].transcript;
    }
    const preview = `${transcript}${interim}`.trim();
    setVoiceStatus(preview ? `聞き取り中... ${preview}` : "聞き取り中...", "listening");
  };
  activeRecognition.onerror = (event) => {
    if (event.error === "aborted") return;
    recognitionErrorCode = event.error;
    recognitionError = recognitionErrorText(event.error);
    setVoiceStatus(recognitionError, "error");
  };
  activeRecognition.onend = () => {
    if (recognition !== activeRecognition) return;
    if (
      mode === "standby" &&
      voiceStandbyEnabled &&
      !wakeTransitionPending &&
      finalizedWakeRemainder !== null
    ) {
      wakeTransitionPending = true;
      wakeRemainder = wakeCandidateIsFinal
        ? wakeCandidateForSession
        : finalizedWakeRemainder;
      wakeActivated = true;
      playStartupChime();
    }
    clearTimeout(wakeTimerForSession);
    const endedMode = recognitionMode;
    const shouldSend = isListening && !cancelRecognition && !recognitionError && transcript.trim();
    const wasCancelled = cancelRecognition;
    recognition = null;
    recognitionMode = null;
    isListening = false;
    cancelRecognition = false;
    syncCoreState();

    if (endedMode === "standby") {
      if (wakeTransitionPending && voiceStandbyEnabled) {
        const request = wakeRemainder;
        wakeTransitionPending = false;
        wakeRemainder = "";
        if (request) {
          wakeActivated = false;
          setVoiceStatus("音声を送信しています...", "speaking");
          submitUserInput(request, { voice: true });
        } else {
          void playWakeAcknowledgement();
        }
      } else if (pendingManualStart) {
        pendingManualStart = false;
        startRecognition("manual");
      } else if (voiceStandbyEnabled) {
        if (["not-allowed", "service-not-allowed", "audio-capture"].includes(recognitionErrorCode)) {
          voiceStandbyEnabled = false;
          updateVoiceStandbyButton();
          setVoiceStatus(recognitionError, "error");
        } else {
          if (recognitionError) setVoiceStatus(recognitionError, "error");
          scheduleStandbyRecognition();
        }
      }
      return;
    }

    if (endedMode === "command") {
      if (shouldSend) {
        setVoiceStatus("音声を送信しています...", "speaking");
        submitUserInput(transcript.trim(), { voice: true });
      } else {
        if (recognitionError) setVoiceStatus(recognitionError, "error");
        else if (!wasCancelled) setVoiceStatus("音声を認識できませんでした。もう一度お試しください", "error");
        if (["not-allowed", "service-not-allowed", "audio-capture"].includes(recognitionErrorCode)) {
          voiceStandbyEnabled = false;
          updateVoiceStandbyButton();
        } else {
          scheduleStandbyRecognition();
        }
      }
      return;
    }

    if (voiceStandbyEnabled) {
      if (pendingManualStart) pendingManualStart = false;
      scheduleStandbyRecognition();
      return;
    }
    if (shouldSend) {
      setVoiceStatus("音声を送信しています...", "speaking");
      submitUserInput(transcript.trim(), { voice: true });
    } else if (recognitionError) {
      setVoiceStatus(recognitionError, "error");
    } else if (!wasCancelled && !transcript.trim()) {
      setVoiceStatus("音声を認識できませんでした。もう一度お試しください", "error");
    } else {
      setVoiceStatus("VOICE LINK // READY");
    }
  };

  try {
    activeRecognition.start();
  } catch (error) {
    recognition = null;
    recognitionMode = null;
    isListening = false;
    cancelRecognition = false;
    syncCoreState();
    const detail = error instanceof Error ? error.message : String(error);
    setVoiceStatus(`音声入力を開始できませんでした: ${detail}`, "error");
    if (mode === "standby") {
      voiceStandbyEnabled = false;
      updateVoiceStandbyButton();
    } else if (mode === "command") {
      scheduleStandbyRecognition();
    }
  }
}

function toggleVoiceStandby() {
  if (voiceStandbyEnabled) {
    const shouldStartManual = pendingManualStart;
    voiceStandbyEnabled = false;
    wakeTransitionPending = false;
    wakeRemainder = "";
    wakeActivated = false;
    clearTimeout(standbyRestartTimer);
    updateVoiceStandbyButton();
    if (recognition && ["standby", "command"].includes(recognitionMode)) {
      cancelRecognition = true;
      isListening = false;
      recognition.abort();
    }
    if (speechPurpose === "wake-ack") stopSpeech();
    syncCoreState();
    setVoiceStatus("VOICE STANDBY // OFF");
    if (shouldStartManual && !recognition) {
      pendingManualStart = false;
      startRecognition("manual");
    }
    return;
  }

  if (!getSpeechRecognitionConstructor()) {
    setVoiceStatus("このブラウザーは音声認識に対応していません", "error");
    return;
  }
  voiceStandbyEnabled = true;
  pendingManualStart = false;
  updateVoiceStandbyButton();
  if (recognition) {
    cancelRecognition = true;
    isListening = false;
    recognition.abort();
  } else {
    startRecognition("standby");
  }
  if (window.AudioContext || window.webkitAudioContext) {
    try {
      const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
      audioContext ||= new AudioContextConstructor();
      void audioContext.resume().catch((error) => {
        console.error("Web Audio context could not be resumed.", error);
      });
    } catch (error) {
      console.error("Web Audio context could not be initialized.", error);
    }
  }
}

function toggleVoiceInput() {
  if (voiceStandbyEnabled) {
    pendingManualStart = true;
    toggleVoiceStandby();
    return;
  }
  if (isListening) {
    cancelRecognition = true;
    isListening = false;
    setVoiceStatus("VOICE LINK // CANCELLED");
    syncCoreState();
    recognition?.abort();
    return;
  }
  if (recognition) {
    setVoiceStatus("音声入力を終了しています...", "error");
    return;
  }
  if (sendButton.disabled) return;
  stopSpeech();
  startRecognition("manual");
}

function updateClock() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const dateKey = `${year}-${month}`;
  const dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  const dateText = new Intl.DateTimeFormat("ja-JP", dateOptions).format(now);

  document.querySelector("#digital-clock").textContent =
    new Intl.DateTimeFormat("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now);
  document.querySelector("#clock-date").textContent = dateText;
  document.querySelector("#top-date").textContent =
    `${year} / ${String(month + 1).padStart(2, "0")} / ${String(day).padStart(2, "0")} // ` +
    new Intl.DateTimeFormat("ja-JP", { weekday: "short" }).format(now);
  document.querySelector("#date-day").textContent = String(day).padStart(2, "0");
  document.querySelector("#date-month").textContent =
    new Intl.DateTimeFormat("en-US", { month: "short" }).format(now).toUpperCase();
  document.querySelector("#date-year").textContent = String(year);
  document.querySelector("#weekday").textContent =
    new Intl.DateTimeFormat("ja-JP", { weekday: "long" }).format(now);
  const elapsedSeconds = Math.floor((performance.now() - uptimeStartedAt) / 1000);
  const hours = Math.floor(elapsedSeconds / 3600);
  document.querySelector("#system-uptime").textContent =
    `${String(hours).padStart(2, "0")}:${String(Math.floor(elapsedSeconds / 60) % 60).padStart(2, "0")}:` +
    String(elapsedSeconds % 60).padStart(2, "0");
  updateTelemetryTicker();
  updateChronoClock(now);

  if (dateKey !== updateClock.lastDateKey) {
    updateClock.lastDateKey = dateKey;
    document.querySelector("#memory-month").textContent =
      `${String(month + 1).padStart(2, "0")} / ${year}`;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const fragment = document.createDocumentFragment();
    for (let date = 1; date <= daysInMonth; date += 1) {
      const marker = document.createElement("span");
      marker.className = `memory-day${date === day ? " is-today" : ""}`;
      marker.textContent = String(date).padStart(2, "0");
      fragment.append(marker);
    }
    const memoryDays = document.querySelector("#memory-days");
    memoryDays.replaceChildren(fragment);
    memoryDays.style.gridTemplateColumns = `repeat(${daysInMonth}, minmax(0, 1fr))`;
  }
}

function createWaveform(selector, count) {
  const container = document.querySelector(selector);
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < count; index += 1) {
    const bar = document.createElement("span");
    const height = 18 + Math.random() * 82;
    bar.style.setProperty("--bar-height", `${height}%`);
    bar.style.setProperty("--speed", `${0.35 + Math.random() * 0.9}s`);
    bar.style.setProperty("--delay", `${Math.random() * -1.5}s`);
    fragment.append(bar);
  }
  container.replaceChildren(fragment);
}

function animateTelemetry() {
  const updateGauge = (gaugeId, valueId, current, range) => {
    const value = Math.max(range[0], Math.min(range[1], current + Math.round(Math.random() * 4 - 2)));
    document.querySelector(gaugeId).style.setProperty("--level", `${value}%`);
    document.querySelector(valueId).textContent = String(value);
    return value;
  };
  animateTelemetry.cpu = updateGauge("#cpu-gauge", "#cpu-value", animateTelemetry.cpu, [24, 46]);
  animateTelemetry.ram = updateGauge("#ram-gauge", "#ram-value", animateTelemetry.ram, [48, 69]);
  document.querySelector("#diag-core-gauge").style.setProperty("--level", `${animateTelemetry.cpu}%`);
  document.querySelector("#diag-core-value").textContent = String(animateTelemetry.cpu);
  document.querySelector("#diag-memory-gauge").style.setProperty("--level", `${animateTelemetry.ram}%`);
  document.querySelector("#diag-memory-value").textContent = String(animateTelemetry.ram);
  animateTelemetry.link = Math.max(76, Math.min(93, animateTelemetry.link + Math.round(Math.random() * 6 - 3)));
  document.querySelector("#diag-link-gauge").style.setProperty("--level", `${animateTelemetry.link}%`);
  document.querySelector("#diag-link-value").textContent = String(animateTelemetry.link);
}
animateTelemetry.cpu = 32;
animateTelemetry.ram = 58;
animateTelemetry.link = 84;

function updateTrafficWaveforms() {
  const pointCount = 46;
  const phase = performance.now() / 190;
  const pointsFor = (offset, amplitude) =>
    Array.from({ length: pointCount }, (_, index) => {
      const x = (index / (pointCount - 1)) * 180;
      const y = 15 + Math.sin(index * 0.79 + phase + offset) * amplitude
        + Math.sin(index * 1.91 - phase * 0.62 + offset) * amplitude * 0.36
        + (Math.random() - 0.5) * 3;
      return `${x.toFixed(1)},${Math.max(2, Math.min(28, y)).toFixed(1)}`;
    }).join(" ");
  trafficUploadWave.setAttribute("points", pointsFor(0.2, 6.5));
  trafficDownloadWave.setAttribute("points", pointsFor(2.1, 8));
  document.querySelector("#traffic-upload-rate").textContent = (12 + Math.random() * 28).toFixed(1);
  document.querySelector("#traffic-download-rate").textContent = (45 + Math.random() * 96).toFixed(1);
}

function appendSystemLog(message) {
  if (!systemLogReady) return;
  const entry = document.createElement("span");
  entry.textContent = `> ${new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date())} ${message}`;
  systemLogLines.append(entry);
  while (systemLogLines.childElementCount > 5) systemLogLines.firstElementChild.remove();
}

function updateTelemetryTicker() {
  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
  const temperature = document.querySelector("#weather-current").textContent;
  const telemetryFresh = issTelemetry && Date.now() - issTelemetry.receivedAt <= ISS_REFRESH_INTERVAL * 3;
  const velocity = telemetryFresh ? `${issTelemetry.velocityKmh.toFixed(1)} KM/H` : "LINK STALE";
  const status = sentryStandbyActive ? "SYSTEM STANDBY" : systemLocked ? "SYSTEM LOCKED" : "SYSTEM NOMINAL";
  const line = `TIME ${time} // KUSHIRO ${temperature}°C // ISS ${velocity} // ${status} //`;
  tickerContent.textContent = line;
  tickerCopy.textContent = line;
}

function updateBiometricWaveform() {
  const phase = performance.now() / 155;
  const points = Array.from({ length: 42 }, (_, index) => {
    const x = (index / 41) * 84;
    const pulse = Math.max(0, 1 - Math.abs((index % 21) - 5) / 5);
    const y = 8 - Math.sin(index * 0.9 + phase) * 1.2 - pulse * (index % 21 < 9 ? 4.8 : 0);
    return `${x.toFixed(1)},${Math.max(1, Math.min(15, y)).toFixed(1)}`;
  }).join(" ");
  biometricWave.setAttribute("points", points);
}

function updatePowerDistribution() {
  const elapsed = performance.now() / 1700;
  const base = [42, 25, 18, 15];
  const elements = [
    ["#power-core-bar", "#power-core-value"],
    ["#power-sensors-bar", "#power-sensors-value"],
    ["#power-network-bar", "#power-network-value"],
    ["#power-aux-bar", "#power-aux-value"],
  ];
  elements.forEach(([barSelector, valueSelector], index) => {
    const value = Math.round(base[index] + Math.sin(elapsed + index * 1.7) * 2.4);
    document.querySelector(barSelector).style.setProperty("--level", `${value}%`);
    document.querySelector(valueSelector).textContent = `${value}%`;
  });
}

function updateFlightTelemetry() {
  if (hudMode !== "mark-iii") return;
  const time = performance.now() / 3200;
  const mach = 2.45 + Math.sin(time) * 0.35;
  const altitude = 60000 + Math.sin(time * 0.61 + 1.2) * 25000;
  const temperature = -42.5 - Math.sin(time * 0.73 + 0.4) * 22.5;
  flightMach.textContent = `MACH ${mach.toFixed(2)}`;
  flightAltitude.textContent = `${(Math.round(altitude / 100) * 100).toLocaleString("en-US")} FT`;
  flightTemperature.textContent = `${Math.round(temperature)}°C`;
}

function localDateKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function saveChronoEvents() {
  try {
    window.localStorage.setItem(CHRONO_EVENTS_STORAGE_KEY, JSON.stringify(chronoEventsData));
    return true;
  } catch (error) {
    console.error("CHRONO TIMELINE schedules could not be saved.", error);
    appendSystemLog("CHRONO TIMELINE // STORAGE WRITE FAILED");
    chronoDate.textContent = "SAVE ERROR";
    return false;
  }
}

function restoreChronoEvents() {
  try {
    const stored = window.localStorage.getItem(CHRONO_EVENTS_STORAGE_KEY);
    if (!stored) return;
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) throw new TypeError("Saved timeline data is not an array.");
    chronoEventsData = parsed.filter((item) =>
      item &&
      typeof item.id === "string" &&
      typeof item.title === "string" &&
      /^\d{2}:\d{2}$/u.test(item.time) &&
      /^\d{4}-\d{2}-\d{2}$/u.test(item.day) &&
      Number.isFinite(item.createdAt));
  } catch (error) {
    console.error("CHRONO TIMELINE schedules could not be restored.", error);
    appendSystemLog("CHRONO TIMELINE // STORED DATA INVALID");
  }
}

function createChronoEvent(time, title, day = localDateKey(), createdAt = Date.now()) {
  const [hours, minutes] = time.split(":").map(Number);
  if (!Number.isInteger(hours) || hours < 0 || hours > 23 || !Number.isInteger(minutes) || minutes < 0 || minutes > 59) {
    return null;
  }
  const event = {
    id: `${Date.now().toString(36)}-${(++chronoEventCounter).toString(36)}`,
    day,
    time: `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`,
    title: title.trim().slice(0, 80),
    createdAt,
    notifiedDate: null,
  };
  if (!event.title) return null;
  chronoEventsData.push(event);
  chronoEventsData = chronoEventsData.slice(-200);
  saveChronoEvents();
  renderChronoTimeline();
  return event;
}

function removeChronoEvent(id) {
  chronoEventsData = chronoEventsData.filter((event) => event.id !== id);
  saveChronoEvents();
  renderChronoTimeline();
}

function renderChronoTimeline() {
  const now = new Date();
  const day = localDateKey(now);
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  chronoDisplayedDay = day;
  updateChronoClock(now);
  chronoEvents.replaceChildren();
  chronoList.replaceChildren();
  const todaysEvents = chronoEventsData
    .filter((event) => event.day === day)
    .sort((first, second) => first.time.localeCompare(second.time));
  todaysEvents.forEach((event) => {
    const eventMinutes = Number(event.time.slice(0, 2)) * 60 + Number(event.time.slice(3, 5));
    const marker = document.createElement("i");
    marker.className = `chrono-event-marker${eventMinutes <= minutesNow ? " is-past" : ""}`;
    marker.style.left = `${eventMinutes / 1440 * 100}%`;
    marker.setAttribute("aria-hidden", "true");
    chronoEvents.append(marker);
    const row = document.createElement("div");
    row.className = `chrono-event-row${eventMinutes <= minutesNow ? " is-past" : ""}`;
    const label = document.createElement("span");
    label.textContent = `${event.time} // ${event.title}`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `${event.time} ${event.title}を削除`);
    remove.addEventListener("click", () => removeChronoEvent(event.id));
    row.append(label, remove);
    chronoList.append(row);
  });
  if (!todaysEvents.length) {
    const empty = document.createElement("span");
    empty.className = "chrono-empty";
    empty.textContent = "NO SCHEDULED EVENTS";
    chronoList.append(empty);
  }
}

function updateChronoClock(now = new Date()) {
  const day = localDateKey(now);
  if (chronoDisplayedDay !== null && day !== chronoDisplayedDay) {
    renderChronoTimeline();
    return;
  }
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  chronoNow.textContent = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  if (chronoDate.textContent !== "SAVE ERROR") {
    chronoDate.textContent = new Intl.DateTimeFormat("ja-JP", { month: "2-digit", day: "2-digit", weekday: "short" }).format(now);
  }
  chronoCurrentMarker.style.left = `${minutesNow / 1440 * 100}%`;
  chronoTrack.setAttribute("aria-valuenow", String(minutesNow));
  chronoTrack.setAttribute("aria-valuetext", `${chronoNow.textContent} ${chronoDate.textContent}`);
  if (!chronoEventTime.value && document.activeElement !== chronoEventTime) {
    chronoEventTime.value = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  }
  checkChronoNotifications(now, chronoEventsData.filter((event) => event.day === day), minutesNow);
}

function checkChronoNotifications(now, events, minutesNow) {
  const today = localDateKey(now);
  events.forEach((event) => {
    const scheduledMinutes = Number(event.time.slice(0, 2)) * 60 + Number(event.time.slice(3, 5));
    const scheduledAt = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Math.floor(scheduledMinutes / 60), scheduledMinutes % 60).getTime();
    if (minutesNow < scheduledMinutes || event.notifiedDate === today || event.createdAt > scheduledAt) return;
    event.notifiedDate = today;
    saveChronoEvents();
    const announcement = `伊吹様、${event.title}のお時間となりました`;
    playSfx("timeline-alert", true);
    addMessage("assistant", announcement);
    history.push({ role: "assistant", content: announcement });
    trimHistory();
    persistHistory();
    appendSystemLog(`CHRONO ALERT // ${event.time}`);
    if (voiceOutputEnabled) void speakReply(announcement);
  });
}

function parseChronoCommand(text) {
  const normalized = text.normalize("NFKC").trim();
  const match = normalized.match(/(\d{1,2})\s*時(?:\s*(\d{1,2})\s*分)?\s*に\s*(.+?)\s*(?:の予定)?(?:を)?\s*(?:追加|登録|入れて|設定)(?:して|してください)?[。.!！]?$/u);
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2] || 0);
  if (hours > 23 || minutes > 59) return null;
  const title = match[3].replace(/(?:の予定|予定|を)$/u, "").trim();
  if (!title) return null;
  return { time: `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`, title };
}

function addChronoCommand(text, voice) {
  const requested = parseChronoCommand(text);
  if (!requested) return false;
  const event = createChronoEvent(requested.time, requested.title);
  if (!event) return false;
  const confirmation = `${event.time}に「${event.title}」の予定を登録しました、伊吹様。`;
  addMessage("user", text);
  addMessage("assistant", confirmation);
  history.push({ role: "user", content: text }, { role: "assistant", content: confirmation });
  trimHistory();
  persistHistory();
  appendSystemLog(`CHRONO EVENT // ${event.time} SCHEDULED`);
  if (voice && voiceOutputEnabled) void speakReply(confirmation);
  return true;
}

function setChronoTimeFromPointer(event) {
  const bounds = chronoTrack.getBoundingClientRect();
  if (!bounds.width) return;
  const minutes = Math.max(0, Math.min(1439, Math.round((event.clientX - bounds.left) / bounds.width * 1440)));
  chronoEventTime.value = `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
  chronoEventTitle.focus();
}

function updateTargetLockReadouts() {
  const time = performance.now() / 1900;
  document.querySelectorAll(".target-lock small i").forEach((range, index) => {
    const distance = Math.round(24 + index * 27 + Math.sin(time + index) * 6);
    range.textContent = String(distance).padStart(3, "0");
  });
}

function addMessage(role, text, { typing = false, scroll = null, images = [] } = {}) {
  const article = document.createElement("article");
  article.className = `message ${role === "user" ? "user-message" : "assistant-message"}${typing ? " typing" : ""}`;

  const avatar = document.createElement("span");
  avatar.className = "message-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = role === "user" ? "S" : "J";

  const content = document.createElement("div");
  content.className = "message-content";
  const sender = document.createElement("span");
  sender.className = "message-sender";
  sender.textContent = role === "user" ? "YOU" : "J.A.R.V.I.S.";
  const toolbar = document.createElement("div");
  toolbar.className = "message-toolbar";
  if (!typing) {
    const time = document.createElement("time");
    time.textContent = new Intl.DateTimeFormat("ja-JP", { hour: "2-digit", minute: "2-digit" }).format(new Date());
    sender.append(" ", time);
    if (role === "assistant") {
      const noteButton = document.createElement("button");
      noteButton.className = "message-note-button";
      noteButton.type = "button";
      noteButton.textContent = "HUDに展開";
      noteButton.setAttribute("aria-label", "このAI回答をホログラムノートとしてHUDに展開");
      noteButton.addEventListener("click", () => addFloatingNote(text));
      toolbar.append(noteButton);
    }
  }
  toolbar.prepend(sender);
  const body = document.createElement("div");
  body.className = "message-body";
  if (role === "assistant" && !typing) {
    if (window.marked?.parse && window.DOMPurify?.sanitize) {
      const html = window.marked.parse(text, { gfm: true, breaks: true });
      body.innerHTML = window.DOMPurify.sanitize(html, {
        ALLOWED_TAGS: markdownTags,
        ALLOWED_ATTR: markdownAttributes,
      });
    } else {
      console.error("Markdown libraries failed to load; displaying the reply as plain text.");
      body.classList.add("plain-text");
      body.textContent = text;
    }
  } else {
    body.classList.add("plain-text");
    body.textContent = text;
  }
  content.append(toolbar, body);
  if (role === "user" && images.length) {
    const previews = document.createElement("div");
    previews.className = "message-images";
    images.forEach((image) => {
      const preview = document.createElement("img");
      preview.src = image.dataUrl;
      preview.alt = image.name || "添付画像";
      previews.append(preview);
    });
    content.append(previews);
  }
  article.append(avatar, content);
  messagesElement.append(article);
  if (!typing && systemLogReady) {
    appendSystemLog(role === "user" ? "OPERATOR INPUT RECEIVED" : "NEURAL LINK: RESPONSE RECEIVED");
  }
  if (scroll) scrollMessageIntoView(article, scroll);
  return article;
}

function getHoloNotePosition(x, y, width = 300, height = 220) {
  return {
    x: Math.max(8, Math.min(window.innerWidth - width - 8, x)),
    y: Math.max(8, Math.min(window.innerHeight - height - 34, y)),
  };
}

function persistHoloNotes() {
  try {
    window.localStorage.setItem(HOLO_NOTES_STORAGE_KEY, JSON.stringify(holoNotes));
    floatingNotes.querySelectorAll(".note-save-state").forEach((state) => {
      state.textContent = "LOCAL BUFFER // SAVED";
    });
    appendSystemLog("CACHE OPTIMIZED // HOLO-NOTES SAVED");
  } catch (error) {
    console.error("Hologram notes could not be saved to localStorage.", error);
    floatingNotes.querySelectorAll(".note-save-state").forEach((state) => {
      state.textContent = "LOCAL BUFFER // SAVE FAILED";
    });
    appendSystemLog("HOLO-NOTE STORAGE ERROR");
  }
}

function scheduleHoloNotesSave() {
  clearTimeout(holoNotesSaveTimer);
  holoNotesSaveTimer = setTimeout(() => {
    holoNotesSaveTimer = null;
    persistHoloNotes();
  }, 250);
}

function renderFloatingNote(note) {
  const position = getHoloNotePosition(note.x, note.y);
  note.x = position.x;
  note.y = position.y;
  const element = document.createElement("article");
  element.className = "floating-note";
  element.dataset.noteId = note.id;
  element.style.left = `${note.x}px`;
  element.style.top = `${note.y}px`;
  element.style.zIndex = String(holoNoteZIndex++);
  element.setAttribute("aria-label", "ドラッグして移動できるホログラムノート");

  const header = document.createElement("header");
  header.className = "floating-note-header";
  const title = document.createElement("span");
  title.textContent = "HOLO-NOTE // LOCAL BUFFER";
  const close = document.createElement("button");
  close.type = "button";
  close.className = "floating-note-close";
  close.textContent = "×";
  close.setAttribute("aria-label", "ノートを閉じる");
  close.addEventListener("click", () => {
    holoNotes = holoNotes.filter((item) => item.id !== note.id);
    element.remove();
    scheduleHoloNotesSave();
  });
  header.append(title, close);

  const textarea = document.createElement("textarea");
  textarea.maxLength = 6000;
  textarea.placeholder = "メモを入力するか、AIの回答をHUDへ展開...";
  textarea.setAttribute("aria-label", "ホログラムノートの内容");
  textarea.value = note.content;
  textarea.addEventListener("input", () => {
    note.content = textarea.value;
    scheduleHoloNotesSave();
  });
  const footer = document.createElement("footer");
  footer.className = "note-save-state";
  footer.textContent = "LOCAL BUFFER // SAVED";
  element.append(header, textarea, footer);
  floatingNotes.append(element);
  return { element, header };
}

function addFloatingNote(content = "") {
  const noteIndex = holoNotes.length;
  const position = getHoloNotePosition(
    window.innerWidth - 326 - (noteIndex % 7) * 24,
    86 + (noteIndex % 7) * 28,
  );
  const note = {
    id: globalThis.crypto?.randomUUID?.() || `note-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    content: String(content).slice(0, 6000),
    x: position.x,
    y: position.y,
  };
  holoNotes.push(note);
  const rendered = renderFloatingNote(note);
  scheduleHoloNotesSave();
  rendered.element.querySelector("textarea").focus();
  appendSystemLog("HOLO-NOTE DEPLOYED");
}

function restoreHoloNotes() {
  try {
    const stored = window.localStorage.getItem(HOLO_NOTES_STORAGE_KEY);
    if (!stored) return;
    const decoded = JSON.parse(stored);
    if (!Array.isArray(decoded)) throw new TypeError("保存されたホログラムノートが配列ではありません。");
    holoNotes = decoded
      .filter((note) =>
        note &&
        typeof note.id === "string" &&
        typeof note.content === "string" &&
        Number.isFinite(note.x) &&
        Number.isFinite(note.y))
      .map((note) => ({
        id: note.id,
        content: note.content.slice(0, 6000),
        x: note.x,
        y: note.y,
      }));
    holoNotes.forEach((note) => renderFloatingNote(note));
  } catch (error) {
    console.error("Hologram notes could not be restored from localStorage.", error);
    appendSystemLog("HOLO-NOTE RESTORE FAILED");
  }
}

function beginHoloNoteDrag(event) {
  if (!(event.target instanceof Element) || event.button !== 0) return;
  const header = event.target.closest(".floating-note-header");
  if (!header || event.target.closest(".floating-note-close")) return;
  const element = header.closest(".floating-note");
  const bounds = element.getBoundingClientRect();
  element.style.zIndex = String(holoNoteZIndex++);
  holoNoteDrag = {
    element,
    pointerId: event.pointerId,
    offsetX: event.clientX - bounds.left,
    offsetY: event.clientY - bounds.top,
  };
  header.setPointerCapture(event.pointerId);
  event.preventDefault();
}

function moveHoloNote(event) {
  if (!holoNoteDrag || event.pointerId !== holoNoteDrag.pointerId) return;
  const position = getHoloNotePosition(
    event.clientX - holoNoteDrag.offsetX,
    event.clientY - holoNoteDrag.offsetY,
    holoNoteDrag.element.offsetWidth,
    holoNoteDrag.element.offsetHeight,
  );
  holoNoteDrag.element.style.left = `${position.x}px`;
  holoNoteDrag.element.style.top = `${position.y}px`;
}

function endHoloNoteDrag(event) {
  if (!holoNoteDrag || event.pointerId !== holoNoteDrag.pointerId) return;
  const note = holoNotes.find((item) => item.id === holoNoteDrag.element.dataset.noteId);
  if (note) {
    note.x = Number.parseFloat(holoNoteDrag.element.style.left);
    note.y = Number.parseFloat(holoNoteDrag.element.style.top);
    scheduleHoloNotesSave();
  }
  holoNoteDrag = null;
}

function setBusy(busy) {
  requestInProgress = busy;
  sendButton.disabled = busy;
  dataScanButton.disabled = busy;
  promptInput.disabled = busy;
  microphoneButton.disabled = busy;
  simulationLaunchButton.disabled = busy;
  prototypeBuildButton.disabled = busy || prototypeBuildPending;
  if (busy) startProcessingSfx();
  else stopProcessingSfx();
  syncCoreState();
}

function getSimulationTarget(text) {
  const source = text.trim();
  const patterns = [
    /^(.+?)の(?:作戦)?シミュレーション(?:を)?(?:して|してください|お願いします|してほしい).*$/u,
    /^(.+?)(?:を|について)?(?:作戦)?シミュレーション(?:して|してください|お願いします).*$/u,
    /^(.+?)の攻略確率(?:を)?(?:計算|見積も|予測).*$/u,
  ];
  for (const pattern of patterns) {
    const match = source.match(pattern);
    if (match?.[1]?.trim()) return match[1].trim().replace(/[「」『』"]/gu, "");
  }
  if (/シミュレーション|攻略確率/u.test(source)) return source;
  return null;
}

function getPrototypeForgeTarget(text) {
  const source = text.normalize("NFKC").trim();
  const patterns = [
    /^(?:プロトタイプ生成|prototype forge|forge prototype)\s*[:：]?\s*(.+)$/iu,
    /^(.+?)(?:の)?アプリを(?:試作|作って|作成|開発)(?:して|してください|して下さい|する)?[。.!！?？]*$/u,
    /^(.+?)(?:の)?シミュレーターを(?:試作|作って|作成|開発)(?:して|してください|して下さい|する)?[。.!！?？]*$/u,
  ];
  for (const pattern of patterns) {
    const match = source.match(pattern);
    if (match?.[1]?.trim()) return match[1].trim().replace(/^[「『]|[」』]$/gu, "");
  }
  return null;
}

function openPrototypeDialog() {
  [knowledgeDialog, memoryDialog, holoDialog, ideaDialog, cipherDialog, simulationDialog, sentryDialog].forEach((dialog) => {
    if (dialog.open) dialog.close();
  });
  if (sentryPromptPending) {
    sentryPromptPending = false;
    lastOperatorActivity = Date.now();
    updateSentryStatus();
  }
  if (!prototypeDialog.open) prototypeDialog.showModal();
  if (prototypeHtmlSource && !prototypeFrame.hasAttribute("srcdoc")) {
    loadPrototypePreview(prototypeHtmlSource);
  }
}

function loadPrototypePreview(source) {
  prototypeFrame.title = `${prototypeTopicInput.value.trim() || "Prototype"} // isolated preview`;
  prototypeFrame.srcdoc = createPrototypeSrcdoc(source);
  prototypeFrame.hidden = false;
}

function extractPrototypeHtml(reply) {
  const blocks = [...reply.matchAll(/```([^\r\n`]*)\r?\n([\s\S]*?)```/gu)];
  const fencedSource = blocks
    .filter((match) => !match[1].trim() || /^(?:html|html5|htm)$/iu.test(match[1].trim()))
    .map((match) => match[2].trim())
    .find((block) => /<html\b/iu.test(block) && /<body\b/iu.test(block) && /<script\b/iu.test(block));
  const directSource = reply.match(/(?:<!doctype\s+html\b|<html\b)[\s\S]*?<\/html\s*>/iu)?.[0]?.trim();
  const source = fencedSource || (
    directSource && /<body\b/iu.test(directSource) && /<script\b/iu.test(directSource)
      ? directSource
      : null
  );
  if (!source) return null;
  if (source.length > MAX_PROTOTYPE_HTML_LENGTH) {
    throw new RangeError(`生成されたHTMLが上限（${MAX_PROTOTYPE_HTML_LENGTH.toLocaleString("ja-JP")}文字）を超えています。短い構成でもう一度生成してください。`);
  }
  return source;
}

function getPrototypeReplyNarrative(reply) {
  return reply
    .replace(/```[^\r\n`]*\r?\n[\s\S]*?```/gu, "")
    .replace(/(?:<!doctype\s+html\b|<html\b)[\s\S]*?<\/html\s*>/iu, "")
    .trim()
    .slice(0, 1800);
}

function createPrototypeSrcdoc(source) {
  const policy = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; media-src data: blob:; font-src data:; connect-src 'none'; object-src 'none'; frame-src 'none'; form-action 'none'; base-uri 'none'; navigate-to 'none'">`;
  const head = source.match(/<head\b[^>]*>/iu);
  if (head) return source.replace(head[0], `${head[0]}${policy}`);
  const html = source.match(/<html\b[^>]*>/iu);
  if (html) return source.replace(html[0], `${html[0]}<head>${policy}</head>`);
  throw new TypeError("完全なHTMLドキュメントとして解釈できませんでした。");
}

function formatPrototypeReply(reply, target) {
  let source;
  try {
    source = extractPrototypeHtml(reply);
  } catch (error) {
    console.error("PROTOTYPE FORGE output was rejected.", error);
    prototypeStatus.textContent = error.message;
    return {
      displayText: [getPrototypeReplyNarrative(reply), error.message].filter(Boolean).join("\n\n"),
      historyText: `PROTOTYPE FORGE // ${target}\n${error.message}`,
      spokenText: "試作コードのサイズが上限を超えました。条件を絞ってもう一度お試しください。",
    };
  }
  if (!source) {
    prototypeHtmlSource = "";
    prototypeDownloadButton.disabled = true;
    prototypeFullscreenButton.disabled = true;
    prototypeStatus.textContent = "COMPLETE HTML CODE BLOCK NOT FOUND // REFINE THE REQUEST AND RETRY";
    return {
      displayText: getPrototypeReplyNarrative(reply) || "完全な単一HTMLコードを回答から検出できませんでした。条件を絞って再生成してください。",
      historyText: `PROTOTYPE FORGE // ${target}\n完全なHTMLコードを検出できませんでした。`,
      spokenText: "回答を受信しましたが、完全なHTMLコードを検出できませんでした。出力をご確認ください。",
    };
  }

  prototypeHtmlSource = source;
  if (prototypeDialog.open) loadPrototypePreview(source);
  prototypeDownloadButton.disabled = false;
  prototypeFullscreenButton.disabled = false;
  prototypeStatus.textContent = `BUILD COMPLETE // ${target} // SANDBOX ACTIVE · NETWORK RESTRICTED`;
  appendSystemLog("PROTOTYPE FORGE // ISOLATED APP DEPLOYED");
  const explanation = getPrototypeReplyNarrative(reply);
  const displayText = [
    explanation,
    `LIVE PROTOTYPE SANDBOXに「${target}」を展開しました。操作して動作を確認し、HTMLファイルとして保存できます。`,
  ].filter(Boolean).join("\n\n");
  return {
    displayText,
    historyText: `PROTOTYPE FORGE // ${target}\n単一HTMLアプリを隔離プレビューへ展開しました。`,
    spokenText: `試作アプリ「${target}」をサンドボックスに展開いたしました。`,
  };
}

function runPrototypeForge(target, sourceText = "", voice = false) {
  if (!target || prototypeBuildPending || sendButton.disabled) return;
  prototypeBuildPending = true;
  prototypeBuildButton.disabled = true;
  openPrototypeDialog();
  prototypeTopicInput.value = target;
  prototypeHtmlSource = "";
  prototypeFrame.removeAttribute("srcdoc");
  prototypeFrame.hidden = true;
  prototypeDownloadButton.disabled = true;
  prototypeFullscreenButton.disabled = true;
  prototypeStatus.textContent = `AI BUILD IN PROGRESS // ${target}`;
  const buildPrompt =
    `PROTOTYPE FORGE // TARGET: ${target}\n` +
    `Create a useful, polished, fully working browser prototype from this idea. Return a short Japanese introduction followed by exactly one fenced \`\`\`html code block containing a complete standalone HTML document with inline CSS and JavaScript. The document must include <!doctype html>, <html>, <body>, and any required inline <script>. Keep it concise (under ${MAX_PROTOTYPE_HTML_LENGTH.toLocaleString("en-US")} characters), responsive, keyboard-friendly, and usable without setup.\n` +
    `Security and runtime constraints: use no external scripts, CDNs, imports, fonts, images, network requests, fetch, WebSocket, or service workers. Use only inline HTML/CSS/JavaScript and local browser APIs. Do not attempt to access the parent window, cookies, local storage, credentials, or data outside the prototype. Do not add code outside the single HTML code block.`;
  const spokenInput = sourceText || `プロトタイプ生成：${target}`;
  void sendMessage(spokenInput, {
    voice,
    displayText: sourceText || `PROTOTYPE FORGE // ${target}`,
    requestText: buildPrompt,
    formatReply: (reply) => formatPrototypeReply(reply, target),
    onError: (error) => {
      prototypeStatus.textContent = `BUILD FAILED // ${error.message}`;
    },
    restorePromptFocus: false,
  }).finally(() => {
    prototypeBuildPending = false;
    prototypeBuildButton.disabled = sendButton.disabled;
  });
}

function openSimulationDialog(target = "") {
  [sentryDialog, cipherDialog, memoryDialog, holoDialog, prototypeDialog, knowledgeDialog].forEach((dialog) => {
    if (dialog.open) dialog.close();
  });
  if (sentryPromptPending) {
    sentryPromptPending = false;
    lastOperatorActivity = Date.now();
    updateSentryStatus();
  }
  if (!simulationDialog.open) simulationDialog.showModal();
  if (target) simulationTargetInput.value = target;
  simulationStatus.textContent = target ? "TARGET ACQUIRED // READY" : "READY // ENTER A TARGET";
  simulationResultTarget.textContent = target || "AWAITING INPUT";
  if (!target) {
    simulationProbability.textContent = "--.-%";
    simulationProgressFill.style.width = "0%";
    simulationProgress.setAttribute("aria-valuenow", "0");
    simulationStrategy.textContent = "シミュレーションを待機中です。";
    simulationRisk.textContent = "解析開始後に表示します。";
    simulationRaw.textContent = "";
    simulationRaw.hidden = true;
  }
  if (!target) simulationTargetInput.focus();
}

function extractSimulationSection(reply, headingPattern) {
  const heading = headingPattern.exec(reply);
  if (!heading) return "";
  const content = reply.slice(heading.index + heading[0].length);
  const nextHeading = content.search(/【[^】]+】/u);
  return content.slice(0, nextHeading < 0 ? content.length : nextHeading).trim();
}

function renderSimulationResult(target, reply) {
  const targetSection = extractSimulationSection(
    reply,
    /【\s*(?:TARGET\s*\/\s*)?目標\s*】|【\s*TARGET\s*\/\s*目標\s*】/iu,
  );
  const probabilitySection = extractSimulationSection(
    reply,
    /【\s*(?:SUCCESS\s+PROBABILITY\s*\/\s*)?成功確率\s*】|【\s*SUCCESS\s+PROBABILITY[^】]*】/iu,
  );
  const strategySection = extractSimulationSection(
    reply,
    /【\s*(?:OPTIMAL\s+STRATEGY\s*\/\s*)?最適攻略ルート[^】]*】|【\s*OPTIMAL\s+STRATEGY[^】]*】/iu,
  );
  const riskSection = extractSimulationSection(
    reply,
    /【\s*(?:RISK\s+FACTOR\s*\/\s*)?注意すべきリスク\s*】|【\s*RISK\s+FACTOR[^】]*】/iu,
  );
  const probabilityMatches = [...(probabilitySection || reply).matchAll(/(\d{1,2}(?:\.\d)?|99\.9)\s*%/gu)];
  const probability = probabilityMatches
    .map((match) => Number(match[1]))
    .find((value) => Number.isFinite(value) && value >= 0 && value <= 99.9);

  simulationResultTarget.textContent = targetSection || target;
  simulationProbability.textContent = probability === undefined ? "NOT REPORTED" : `${probability.toFixed(1)}%`;
  simulationProgressFill.style.width = `${probability ?? 0}%`;
  simulationProgress.setAttribute("aria-valuenow", String(probability ?? 0));
  simulationStrategy.textContent = strategySection || "AIの回答全文をご確認ください。";
  simulationRisk.textContent = riskSection || "AIの回答全文をご確認ください。";
  simulationRaw.textContent = reply;
  simulationRaw.hidden = false;
  simulationStatus.textContent = probability === undefined
    ? "ANALYSIS COMPLETE // PROBABILITY NOT REPORTED"
    : "ANALYSIS COMPLETE // MODEL ESTIMATE";
}

function runSimulation(target, sourceText, voice = false) {
  const normalizedTarget = target.trim();
  if (!normalizedTarget || sendButton.disabled) return;
  openSimulationDialog(normalizedTarget);
  simulationStatus.textContent = "SCANNING VARIABLES // SIMULATION IN PROGRESS";
  simulationResultTarget.textContent = normalizedTarget;
  simulationProbability.textContent = "CALCULATING";
  simulationProgressFill.style.width = "0%";
  simulationProgress.setAttribute("aria-valuenow", "0");
  simulationStrategy.textContent = "最適攻略ルートを解析しています...";
  simulationRisk.textContent = "リスク要因を評価しています...";
  simulationRaw.textContent = "";
  simulationRaw.hidden = true;
  const requestText =
    `以下の対象を現実的な前提と不確実性を明示してシミュレーションしてください。\n` +
    `【TARGET / 目標】\n${normalizedTarget}\n\n` +
    `回答には必ず次の見出しを含めてください。\n` +
    `【TARGET / 目標】対象の簡潔な説明\n` +
    `【SUCCESS PROBABILITY / 成功確率】0.0%から99.9%の範囲の数値を1つ。保証ではなく、前提に基づく概算として説明。\n` +
    `【OPTIMAL STRATEGY / 最適攻略ルート】実行可能な3段階を番号付きで提示。\n` +
    `【RISK FACTOR / 注意すべきリスク】重要な不確実性と回避策。\n` +
    `危険・違法な行為の成功率を高める手順は提示せず、安全な代替策を示してください。`;
  appendSystemLog("SIMULATION PROTOCOL // TARGET LOCKED");
  void sendMessage(sourceText, {
    voice,
    displayText: `SIMULATE // ${normalizedTarget}`,
    requestText,
    simulationTarget: normalizedTarget,
  });
}

function getIdeaSynthesisTarget(text) {
  const normalized = text.normalize("NFKC");
  if (!/(?:アイデア合成|合成して|アイデアを.*(?:考えて|出して)|新元素|idea synth|synthesize)/iu.test(normalized)) return null;
  const target = normalized
    .replace(/(?:アイデアを)?(?:合成して|合成|考えて|出して|提案して|synthesize(?:\s+ideas)?|idea\s+synthesizer)/giu, "")
    .replace(/(?:の)?(?:アイデア|案)$/u, "")
    .replace(/(?:の|を|について)$/u, "")
    .replace(/[「」『』【】]/gu, "")
    .replace(/^[\s、。，:：]+|[\s、。，:：]+$/gu, "");
  return target || "新しいアイデア";
}

function getVeronicaTarget(text) {
  const normalized = text.normalize("NFKC");
  if (!/(?:ベロニカ|veronica|徹底調査)/iu.test(normalized)) return null;
  const target = normalized
    .replace(/ベロニカ(?:・)?(?:プロトコル)?(?:を)?(?:展開(?:して)?)?/giu, "")
    .replace(/veronica(?:\s+protocol)?(?:\s+deploy(?:ed)?)?/giu, "")
    .replace(/徹底調査(?:して|を)?/gu, "")
    .replace(/(?:について|を|の|調べて|調査して|レポートして)/gu, " ")
    .replace(/^[\s、。，:：でを]+|[\s、。，:：]+$/gu, "");
  return target || "入力されたテーマ";
}

function triggerVeronicaProtocol(target, sourceText, voice = false) {
  clearTimeout(veronicaDropTimer);
  veronicaDrop.hidden = false;
  veronicaDrop.classList.remove("is-active");
  void veronicaDrop.offsetWidth;
  veronicaDrop.classList.add("is-active");
  playSfx("orbital-drop", true);
  appendSystemLog("VERONICA PROTOCOL // ORBITAL DROP");
  veronicaDropTimer = setTimeout(() => {
    veronicaDrop.classList.remove("is-active");
    veronicaDrop.hidden = true;
  }, 3600);
  const requestText =
    `VERONICA PROTOCOL // 対象「${target}」について、十分な根拠と不確実性を明示して、通常より詳細な調査レポートを作成してください。\n` +
    `必ず次の3部構成で回答してください。\n` +
    `① 概要：対象の背景・現状・重要性。\n` +
    `② 深掘りポイント3選：それぞれ根拠、具体例、注意点を含める。\n` +
    `③ 実践アクション：優先順位のある具体的な次の行動。\n` +
    `確認できない事実は断定せず、必要に応じて検索を行ってください。危険または違法な内容は安全な代替案に切り替えてください。`;
  void sendMessage(sourceText, {
    voice,
    displayText: `VERONICA DEPLOYED // ${target}`,
    requestText,
  });
}

function getHoloCommand(text) {
  const normalized = text.normalize("NFKC").toLowerCase();
  const holoContext = /(?:立体図形|ホログラム|投影|アークリアクター|dna|二重らせん|分子構造|geo crystal|結晶体|イコサヘドロン|helmet|ヘルメット|arc reactor)/iu.test(normalized);
  const selection = [
    { pattern: /(?:dna|二重らせん|分子構造)/iu, model: "dna" },
    { pattern: /(?:geo crystal|結晶体|イコサヘドロン)/iu, model: "crystal" },
    { pattern: /(?:helmet|ヘルメット)/iu, model: "helmet" },
    { pattern: /(?:arc reactor|アークリアクター)/iu, model: "reactor" },
  ].find(({ pattern }) => pattern.test(normalized));
  const explode = /(?:分解して|分解表示|explode|展開して)/iu.test(normalized) &&
    (holoContext || /^(?:分解して|分解表示|explode)$/iu.test(normalized.trim()));
  const open = /(?:立体図形を出して|ホログラム投影|立体ホログラム|投影して|project hologram|3d hologram)/iu.test(normalized);
  if (!selection && !explode && !open) return null;
  return { model: selection?.model || null, explode, open: open || Boolean(selection) };
}

function runHoloCommand(command, voice = false, sourceText = "") {
  if (!openHoloProjector()) return;
  if (command.model) setHoloModel(command.model);
  if (command.explode !== holoExploded) {
    holoExploded = command.explode;
    updateHoloExplodeButton();
    requestHoloFrame();
  }
  const response = "立体ホログラムを投影いたしました、伊吹様。";
  if (sourceText) {
    addMessage("user", sourceText);
    history.push({ role: "user", content: sourceText });
  }
  addMessage("assistant", response);
  history.push({ role: "assistant", content: response });
  trimHistory();
  persistHistory();
  if (voice && voiceOutputEnabled) void speakReply(response);
  appendSystemLog(`HOLOGRAM // ${holoModelSelect.selectedOptions[0].textContent}`);
}

function submitUserInput(
  text,
  {
    voice = false,
    forcedProtocol = null,
    displayText = text,
    detectCommands = true,
    imageAttachments = [],
  } = {},
) {
  if (systemLocked) {
    if (detectSystemUnlockCommand(text)) unlockSystem();
    else if (voice) systemLockStatus.textContent = "LOCAL UI LOCK // SAY 「ロック解除」";
    return;
  }
  if (sentryStandbyActive) {
    if (/再開|復帰|resume|continue/iu.test(text.normalize("NFKC"))) resumeFromSentryStandby();
    return;
  }
  if (housePartyPending || cleanSlatePending) return;
  if (detectSystemUnlockCommand(text)) {
    unlockSystem();
    return;
  }
  if (sentryPromptPending && detectSentryChoice(text) === "continue") {
    continueAfterSentryPrompt();
    return;
  }
  if (sentryPromptPending && detectSentryChoice(text) === "standby") {
    enterSentryStandby();
    return;
  }
  if (detectCommands && detectHousePartyProtocol(text)) {
    triggerHousePartyProtocol(text, voice);
    return;
  }
  if (detectCommands && detectCleanSlateProtocol(text)) {
    triggerCleanSlateProtocol(text, voice);
    return;
  }
  if (detectCommands && addChronoCommand(text, voice)) return;
  const airGestureCommand = detectCommands ? detectAirGestureCommand(text) : null;
  if (airGestureCommand !== null) {
    if (airGestureCommand) requestAirGestureStart();
    else stopAirGestureMode();
    return;
  }
  const veronicaTarget = detectCommands ? getVeronicaTarget(text) : null;
  if (veronicaTarget) {
    triggerVeronicaProtocol(veronicaTarget, text, voice);
    return;
  }
  const prototypeTarget = detectCommands ? getPrototypeForgeTarget(text) : null;
  if (prototypeTarget) {
    runPrototypeForge(prototypeTarget, text, voice);
    return;
  }
  const cityTarget = detectCommands ? getCityScanTarget(text) : null;
  if (cityTarget !== null) {
    void scanTacticalCity({ place: cityTarget, sourceText: text, voice });
    return;
  }
  const holoCommand = detectCommands ? getHoloCommand(text) : null;
  if (holoCommand) {
    runHoloCommand(holoCommand, voice, text);
    return;
  }
  const ideaTarget = detectCommands ? getIdeaSynthesisTarget(text) : null;
  if (ideaTarget) {
    runIdeaSynthesis(ideaTarget, text, voice);
    return;
  }
  const simulationTarget = detectCommands ? getSimulationTarget(text) : null;
  if (simulationTarget) {
    runSimulation(simulationTarget, text, voice);
    return;
  }
  const requestedHudMode = detectCommands ? detectHudModeCommand(text) : null;
  if (requestedHudMode) setHudMode(requestedHudMode);
  const launcherAction = forcedProtocol || (detectCommands ? detectProtocol(text) : null);
  const launcherOpened = launcherAction ? openProtocolTab(launcherAction) : true;
  const requestText = launcherAction === "briefing" ? BRIEFING_PROMPT : text;
  void sendMessage(text, {
    voice,
    launcherAction,
    launcherOpened,
    displayText,
    requestText,
    includeISSContext: detectCommands && isISSQuestion(text),
    includeThreatContext: detectCommands && isThreatQuestion(text),
    imageAttachments,
  });
}

function announceDataScanUnavailable() {
  addMessage("assistant", "解析対象のデータがクリップボードに見当たりません、伊吹様");
}

function detectHousePartyProtocol(text) {
  const normalized = text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s・･\-‐‑‒–—―]/gu, "");
  return normalized.includes("ハウスパーティープロトコル") ||
    normalized.includes("全機起動") ||
    normalized.includes("housepartyprotocol");
}

function detectCleanSlateProtocol(text) {
  const normalized = text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s・･\-‐‑‒–—―、。，.!！?？]/gu, "");
  return normalized.includes("クリーンスレート") ||
    normalized.includes("履歴全消去") ||
    normalized.includes("cleanslateprotocol");
}

function detectAirGestureCommand(text) {
  const normalized = text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s・･\-‐‑‒–—―、。，.!！?？]/gu, "");
  if (/(ジェスチャー|ハンドトラッキング).*(停止|終了|オフ|解除)/u.test(normalized)) return false;
  if (
    normalized.includes("ジェスチャー起動") ||
    normalized.includes("ジェスチャー開始") ||
    normalized === "ハンドトラッキング" ||
    /ハンドトラッキング(起動|開始|オン)/u.test(normalized)
  ) return true;
  return null;
}

function detectSystemUnlockCommand(text) {
  const normalized = text.normalize("NFKC").toLowerCase().replace(/[\s・･\-]/gu, "");
  return normalized.includes("ロック解除") || normalized.includes("unlock");
}

function detectSentryChoice(text) {
  const normalized = text.normalize("NFKC").toLowerCase();
  if (/(作業を)?続行|作業を続ける|continue/u.test(normalized)) return "continue";
  if (/スタンバイ|休憩|standby/u.test(normalized)) return "standby";
  return null;
}

function setHousePartyControlsLocked(locked) {
  sendButton.disabled = locked;
  promptInput.disabled = locked;
  microphoneButton.disabled = locked;
  standbyButton.disabled = locked;
  dataScanButton.disabled = locked;
  simulationLaunchButton.disabled = locked;
}

function triggerHousePartyProtocol(text, voice) {
  if (housePartyPending || sendButton.disabled) return;
  [holoDialog, cipherDialog, memoryDialog, prototypeDialog, knowledgeDialog].forEach((dialog) => {
    if (dialog.open) dialog.close();
  });
  housePartyPending = true;
  if (!voice) {
    promptInput.value = "";
    promptInput.style.height = "auto";
  }
  addMessage("user", text);
  history.push({ role: "user", content: text });
  trimHistory();
  persistHistory();
  clearTimeout(standbyRestartTimer);
  standbyRestartTimer = null;
  if (recognition) {
    cancelRecognition = true;
    isListening = false;
    recognition.abort();
  }
  setHousePartyControlsLocked(true);
  setVoiceStatus("HOUSE PARTY // RED ALERT", "speaking");
  houseAlert.hidden = false;
  document.body.classList.add("house-party-active");
  playSfx("house-party", true);
  housePartyTimeout = setTimeout(() => {
    housePartyTimeout = null;
    housePartyPending = false;
    houseAlert.hidden = true;
    document.body.classList.remove("house-party-active");
    setHudMode("mark-iii");

    const reply = "了解いたしました、伊吹様。ハウス・パーティー・プロトコルを起動、全システムを戦闘態勢へ移行します。";
    addMessage("assistant", reply, { scroll: "start" });
    history.push({ role: "assistant", content: reply });
    trimHistory();
    persistHistory();
    setHousePartyControlsLocked(false);
    if (voiceOutputEnabled) speakReply(reply);
    else {
      setVoiceStatus("VOICE OUTPUT // MUTED", "muted");
      scheduleStandbyRecognition();
    }
    if (!voice) promptInput.focus();
  }, 3000);
}

function setCleanSlateControlsLocked(locked) {
  sendButton.disabled = locked;
  promptInput.disabled = locked;
  microphoneButton.disabled = locked;
  standbyButton.disabled = locked;
  dataScanButton.disabled = locked;
  airGestureToggle.disabled = locked;
  sentryToggle.disabled = locked;
  simulationLaunchButton.disabled = locked;
}

function drawCleanSlateExplosion(startedAt) {
  const context = cleanSlateCanvas.getContext("2d");
  if (!context) {
    console.error("CLEAN SLATE spark canvas is unavailable.");
    cleanSlateAnimationFrame = null;
    return;
  }
  const bounds = cleanSlateCanvas.getBoundingClientRect();
  const width = Math.max(1, bounds.width);
  const height = Math.max(1, bounds.height);
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const pixelWidth = Math.round(width * pixelRatio);
  const pixelHeight = Math.round(height * pixelRatio);
  if (cleanSlateCanvas.width !== pixelWidth || cleanSlateCanvas.height !== pixelHeight) {
    cleanSlateCanvas.width = pixelWidth;
    cleanSlateCanvas.height = pixelHeight;
  }
  if (!cleanSlateCanvas.sparkParticles) {
    const diagonal = Math.hypot(width, height);
    cleanSlateCanvas.sparkParticles = Array.from({ length: 240 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = diagonal * (0.25 + Math.random() * 0.75);
      return {
        angle,
        speed,
        length: 4 + Math.random() * 18,
        age: 0,
        life: 0.75 + Math.random() * 1.15,
        color: Math.random() < 0.62 ? "#ffd46a" : "#ff543b",
      };
    });
  }
  const elapsed = (performance.now() - startedAt) / 1000;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);
  cleanSlateCanvas.sparkParticles.forEach((particle) => {
    particle.age = elapsed;
    if (particle.age >= particle.life) return;
    const progress = particle.age;
    const x = width / 2 + Math.cos(particle.angle) * particle.speed * progress;
    const y = height / 2 + Math.sin(particle.angle) * particle.speed * progress +
      120 * progress * progress;
    const alpha = Math.max(0, 1 - particle.age / particle.life);
    context.globalAlpha = alpha;
    context.strokeStyle = particle.color;
    context.lineWidth = 0.8 + alpha * 1.8;
    context.shadowBlur = 9;
    context.shadowColor = particle.color;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(
      x - Math.cos(particle.angle) * particle.length,
      y - Math.sin(particle.angle) * particle.length,
    );
    context.stroke();
  });
  context.globalAlpha = 1;
  context.shadowBlur = 0;
  if (elapsed < 1.9) cleanSlateAnimationFrame = requestAnimationFrame(() => drawCleanSlateExplosion(startedAt));
  else cleanSlateAnimationFrame = null;
}

function clearCleanSlateTimers() {
  cleanSlateTimers.forEach((timer) => {
    clearTimeout(timer);
    clearInterval(timer);
  });
  cleanSlateTimers = [];
}

function completeCleanSlateProtocol(voice, storageCleared) {
  cleanSlateTimers = [];
  cleanSlateOverlay.hidden = true;
  cleanSlateOverlay.classList.remove("is-exploding");
  cleanSlateCanvas.sparkParticles = null;
  if (cleanSlateAnimationFrame !== null) cancelAnimationFrame(cleanSlateAnimationFrame);
  cleanSlateAnimationFrame = null;
  cleanSlatePending = false;
  setCleanSlateControlsLocked(false);
  const reply = "クリーン・スレート・プロトコル完了。全ログを消去し、システムを再起動いたしました、伊吹様。";
  addMessage("assistant", reply, { scroll: "start" });
  if (voice && voiceOutputEnabled) speakReply(reply);
  else if (voice) setVoiceStatus("VOICE OUTPUT // MUTED", "muted");
  if (!storageCleared) updateSessionStatus("SESSION CLEAR FAILED");
  if (!voice) promptInput.focus();
  scheduleStandbyRecognition();
}

function triggerCleanSlateProtocol(text, voice) {
  if (cleanSlatePending || housePartyPending || sendButton.disabled) return;
  cleanSlatePending = true;
  clearCleanSlateTimers();
  if (cleanSlateAnimationFrame !== null) cancelAnimationFrame(cleanSlateAnimationFrame);
  cleanSlateAnimationFrame = null;
  if (!voice) {
    promptInput.value = "";
    promptInput.style.height = "auto";
  }
  clearTimeout(standbyRestartTimer);
  standbyRestartTimer = null;
  if (recognition) {
    cancelRecognition = true;
    isListening = false;
    recognition.abort();
  }
  if (isSpeaking) stopSpeech();
  [holoDialog, cipherDialog, memoryDialog, prototypeDialog, knowledgeDialog].forEach((dialog) => {
    if (dialog.open) dialog.close();
  });
  setCleanSlateControlsLocked(true);
  cleanSlateOverlay.hidden = false;
  cleanSlateOverlay.classList.remove("is-exploding");
  cleanSlateOverlay.querySelector("#clean-slate-message").textContent =
    "WARNING: INITIATING CLEAN SLATE PROTOCOL...";
  cleanSlateCountdown.textContent = "3";
  cleanSlatePhase.textContent = "SECURE WIPE // PREPARING";
  playSfx("countdown", true);
  let remaining = 3;
  const countdown = setInterval(() => {
    remaining -= 1;
    cleanSlateCountdown.textContent = String(remaining);
    if (remaining > 0) {
      playSfx("countdown", true);
      return;
    }

    clearInterval(countdown);
    history.length = 0;
    messagesElement.replaceChildren();
    let storageCleared = true;
    try {
      window.localStorage.removeItem(HISTORY_STORAGE_KEY);
      updateSessionStatus();
    } catch (error) {
      storageCleared = false;
      console.error("CLEAN SLATE could not clear conversation history from localStorage.", error);
      updateSessionStatus("SESSION CLEAR FAILED");
    }
    cleanSlatePhase.textContent = "LOGS PURGED // REBOOTING";
    cleanSlateOverlay.classList.add("is-exploding");
    playSfx("clean-slate-impact", true);
    cleanSlateCanvas.sparkParticles = null;
    drawCleanSlateExplosion(performance.now());
    const finish = setTimeout(() => completeCleanSlateProtocol(voice, storageCleared), 1950);
    cleanSlateTimers.push(finish);
  }, 1000);
  cleanSlateTimers.push(countdown);
}

async function scanClipboard() {
  if (sendButton.disabled) return;
  let clipboardText;
  try {
    if (!navigator.clipboard?.readText) throw new Error("Clipboard text access is unavailable.");
    clipboardText = await navigator.clipboard.readText();
  } catch (error) {
    console.warn("Clipboard data could not be read for DATA SCAN.", error);
    announceDataScanUnavailable();
    return;
  }
  if (!clipboardText.trim()) {
    announceDataScanUnavailable();
    return;
  }

  const prompt = `伊吹様がスキャンした以下のデータを解析してください。英語や外国語が含まれる場合は自然な日本語に翻訳し、重要なポイントを3行以内の箇条書きで分かりやすく要約して報告してください：\n\n【データ】\n${clipboardText}`;
  submitUserInput(prompt, {
    displayText: "DATA SCAN // CLIPBOARD INTEL",
    detectCommands: false,
  });
}

function setOpticalToggle(enabled) {
  opticalToggle.setAttribute("aria-pressed", String(enabled));
  opticalToggleState.textContent = enabled ? "ON" : "OFF";
  updateScanViewButton();
}

function showOpticalError(error) {
  const message = error?.name === "NotAllowedError" || error?.name === "SecurityError"
    ? "CAMERA ACCESS DENIED // ブラウザーのカメラ許可を確認してください"
    : error?.name === "NotFoundError" || error?.name === "DevicesNotFoundError"
      ? "NO CAMERA DEVICE // 利用可能なカメラが見つかりません"
      : `SENSOR ERROR // ${error?.message || "カメラを起動できませんでした"}`;
  opticalStatus.textContent = message;
  opticalWindow.hidden = false;
  setOpticalToggle(false);
}

function updateOpticalReadouts() {
  opticalDistance.textContent = `${(0.8 + Math.random() * 3.2).toFixed(1)} M`;
  opticalAnalysis.textContent = `${Math.floor(76 + Math.random() * 24)}%`;
}

function stopOpticalSensor() {
  opticalRequestVersion += 1;
  clearInterval(opticalReadoutInterval);
  opticalReadoutInterval = null;
  const stream = opticalStream;
  opticalStream = null;
  stream?.getTracks().forEach((track) => track.stop());
  opticalVideo.pause();
  opticalVideo.srcObject = null;
  opticalWindow.hidden = true;
  opticalToggle.disabled = false;
  setOpticalToggle(false);
}

async function startOpticalSensor() {
  if (airGestureCamera || airGesturePending) {
    opticalWindow.hidden = false;
    opticalStatus.textContent = "CAMERA BUSY // STOP AIR GESTURE FIRST";
    setOpticalToggle(false);
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    showOpticalError(new Error("このブラウザーではカメラを利用できません。HTTPS接続をご確認ください。"));
    return;
  }
  const requestVersion = ++opticalRequestVersion;
  opticalWindow.hidden = false;
  opticalStatus.textContent = "REQUESTING CAMERA PERMISSION";
  opticalToggle.disabled = true;
  setOpticalToggle(true);
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (requestVersion !== opticalRequestVersion) {
      stream.getTracks().forEach((track) => track.stop());
      return;
    }
    opticalStream = stream;
    opticalVideo.srcObject = stream;
    await opticalVideo.play();
    if (requestVersion !== opticalRequestVersion) return;
    updateScanViewButton();
    opticalStatus.textContent = "LOCAL FEED // NOT TRANSMITTED";
    updateOpticalReadouts();
    opticalReadoutInterval = setInterval(updateOpticalReadouts, 1100);
    stream.getVideoTracks().forEach((track) => {
      track.addEventListener("ended", () => {
        if (requestVersion !== opticalRequestVersion || opticalStream !== stream) return;
        opticalStream = null;
        stream.getTracks().forEach((activeTrack) => activeTrack.stop());
        clearInterval(opticalReadoutInterval);
        opticalReadoutInterval = null;
        opticalVideo.srcObject = null;
        setOpticalToggle(false);
        opticalStatus.textContent = "CAMERA CONNECTION LOST";
      }, { once: true });
    });
  } catch (error) {
    if (requestVersion !== opticalRequestVersion) return;
    console.error("OPTICAL SENSOR camera startup failed.", error);
    const stream = opticalStream;
    opticalStream = null;
    stream?.getTracks().forEach((track) => track.stop());
    opticalVideo.srcObject = null;
    showOpticalError(error);
  } finally {
    if (requestVersion === opticalRequestVersion) opticalToggle.disabled = false;
  }
}

function toggleOpticalSensor() {
  if (opticalStream) stopOpticalSensor();
  else void startOpticalSensor();
}

function updateAirGestureToggle(enabled, state = enabled ? "ON" : "OFF") {
  airGestureToggle.setAttribute("aria-pressed", String(enabled));
  airGestureToggleState.textContent = state;
  airGestureToggle.setAttribute("aria-busy", String(state === "LINK"));
  updateScanViewButton();
}

function setAirGestureIndicator(locked, message) {
  airGestureIndicatorLight.classList.toggle("is-locked", locked);
  airGestureHud.classList.toggle("is-locked", locked);
  airGestureStatus.textContent = message;
}

function drawGestureSkeleton(landmarks) {
  const context = gesturePreview.getContext("2d");
  if (!context) {
    console.error("AIR GESTURE skeleton preview canvas is unavailable.");
    return;
  }
  const width = gesturePreview.width;
  const height = gesturePreview.height;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#030a12";
  context.fillRect(0, 0, width, height);
  context.strokeStyle = hudMode === "mark-iii" ? "#ffb70028" : "#00f3ff28";
  context.lineWidth = 0.5;
  for (let x = 0; x < width; x += 16) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }
  for (let y = 0; y < height; y += 16) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }
  if (!landmarks) return;

  const points = landmarks.map(({ x, y }) => ({
    x: (1 - x) * width,
    y: y * height,
  }));
  const bright = hudMode === "mark-iii" ? "#ffcf55" : "#8bffff";
  context.strokeStyle = hudMode === "mark-iii" ? "#ff634b" : "#00f3ff";
  context.lineWidth = 1.4;
  context.shadowBlur = 5;
  context.shadowColor = bright;
  HAND_SKELETON_CONNECTIONS.forEach(([start, end]) => {
    context.beginPath();
    context.moveTo(points[start].x, points[start].y);
    context.lineTo(points[end].x, points[end].y);
    context.stroke();
  });
  points.forEach(({ x, y }, index) => {
    context.beginPath();
    context.arc(x, y, index === 8 ? 2.8 : 1.5, 0, Math.PI * 2);
    context.fillStyle = index === 8 ? "#ffffff" : bright;
    context.fill();
  });
  context.shadowBlur = 0;
}

function landmarkDistance(first, second) {
  return Math.hypot(first.x - second.x, first.y - second.y, (first.z || 0) - (second.z || 0));
}

function isOpenPalm(landmarks) {
  const wrist = landmarks[0];
  const extendedFingers = [[4, 3], [8, 6], [12, 10], [16, 14], [20, 18]];
  return extendedFingers.every(([tip, joint]) =>
    landmarkDistance(wrist, landmarks[tip]) > landmarkDistance(wrist, landmarks[joint]) * 1.12) &&
    landmarkDistance(landmarks[8], landmarks[20]) >
      landmarkDistance(landmarks[5], landmarks[17]) * 1.05;
}

function onAirGestureResults(results, version) {
  if (version !== airGestureVersion || !airGesturePending && !airGestureCamera) return;
  const landmarks = results.multiHandLandmarks?.[0];
  if (!landmarks) {
    airIndexPosition = null;
    airOpenPalmFrames = 0;
    drawGestureSkeleton(null);
    setAirGestureIndicator(false, "HAND TRACKING: SEARCHING");
    return;
  }
  drawGestureSkeleton(landmarks);
  setAirGestureIndicator(true, "HAND TRACKING: LOCKED [21 JOINTS]");

  const indexTip = landmarks[8];
  if (airIndexPosition) {
    const deltaX = airIndexPosition.x - indexTip.x;
    const deltaY = indexTip.y - airIndexPosition.y;
    if (Math.abs(deltaX) > 0.0015 || Math.abs(deltaY) > 0.0015) {
      holoRotationY += deltaX * 5.5;
      holoRotationX = Math.max(-Math.PI, Math.min(Math.PI, holoRotationX + deltaY * 5.5));
    }
  }
  airIndexPosition = { x: indexTip.x, y: indexTip.y };

  const pinchDistance = landmarkDistance(landmarks[4], indexTip);
  holoGestureScale += (Math.max(0.65, Math.min(1.65, 0.62 + pinchDistance * 3.2)) - holoGestureScale) * 0.18;
  requestHoloFrame();

  if (isOpenPalm(landmarks)) {
    airOpenPalmFrames += 1;
    if (airOpenPalmFrames >= 3 && !holoExploded) {
      holoExploded = true;
      updateHoloExplodeButton();
      requestHoloFrame();
    }
  } else {
    airOpenPalmFrames = 0;
  }

  if (!airGestureAutoOpened) {
    airGestureAutoOpened = true;
    openHoloProjector();
  }
}

async function releaseAirGestureResources(camera, hands) {
  if (airGestureReleasePromise) return airGestureReleasePromise;
  const release = (async () => {
    if (camera) {
      try {
        await camera.stop();
      } catch (error) {
        console.warn("AIR GESTURE camera helper could not stop cleanly.", error);
      }
    }
    const stream = airGestureVideo.srcObject;
    if (typeof MediaStream !== "undefined" && stream instanceof MediaStream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    airGestureVideo.pause();
    airGestureVideo.srcObject = null;
    if (hands) {
      try {
        await hands.close();
      } catch (error) {
        console.warn("MediaPipe Hands could not release its resources cleanly.", error);
      }
    }
  })();
  airGestureReleasePromise = release;
  try {
    await release;
  } finally {
    if (airGestureReleasePromise === release) airGestureReleasePromise = null;
  }
}

async function startAirGestureMode(previousSession) {
  if (airGesturePending || airGestureCamera) {
    stopAirGestureMode();
    return;
  }
  const version = ++airGestureVersion;
  airGesturePending = true;
  airGestureHud.hidden = false;
  updateAirGestureToggle(true, "LINK");
  setAirGestureIndicator(false, "REQUESTING CAMERA // MEDIAPIPE HANDS");
  airIndexPosition = null;
  airOpenPalmFrames = 0;
  airGestureAutoOpened = holoDialog.open;
  try {
    if (previousSession) await previousSession;
    if (version !== airGestureVersion) return;
    if (airGestureReleasePromise) await airGestureReleasePromise;
    if (version !== airGestureVersion) return;
    if (opticalStream || opticalToggle.disabled) {
      throw new Error("OPTICAL SENSOR is using the camera. Stop it before enabling AIR GESTURE.");
    }
    if (typeof window.Hands !== "function" || typeof window.Camera !== "function") {
      throw new Error("MediaPipe Hands or Camera Utils did not load. Check the network and retry.");
    }
    const hands = new window.Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/${file}`,
    });
    airGestureHands = hands;
    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.65,
    });
    hands.onResults((results) => onAirGestureResults(results, version));
    const camera = new window.Camera(airGestureVideo, {
      onFrame: async () => {
        if (version === airGestureVersion && airGestureHands === hands) {
          await hands.send({ image: airGestureVideo });
        }
      },
      width: 640,
      height: 480,
    });
    airGestureCamera = camera;
    await camera.start();
    if (version !== airGestureVersion) {
      await releaseAirGestureResources(camera, hands);
      return;
    }
    airGesturePending = false;
    updateAirGestureToggle(true);
    setAirGestureIndicator(false, "HAND TRACKING: SEARCHING");
    const stream = airGestureVideo.srcObject;
    if (stream instanceof MediaStream) {
      stream.getTracks().forEach((track) => {
        track.addEventListener("ended", () => {
          if (version === airGestureVersion) stopAirGestureMode();
        }, { once: true });
      });
    }
  } catch (error) {
    if (version !== airGestureVersion) return;
    console.error("AIR GESTURE startup failed.", error);
    const camera = airGestureCamera;
    const hands = airGestureHands;
    airGestureCamera = null;
    airGestureHands = null;
    await releaseAirGestureResources(camera, hands);
    if (version !== airGestureVersion) return;
    airGesturePending = false;
    airGestureHud.hidden = false;
    updateAirGestureToggle(false);
    setAirGestureIndicator(false, `SENSOR ERROR // ${error.message}`);
  }
}

function stopAirGestureMode() {
  airGestureVersion += 1;
  airGesturePending = false;
  const camera = airGestureCamera;
  const hands = airGestureHands;
  airGestureCamera = null;
  airGestureHands = null;
  airGestureAutoOpened = false;
  airIndexPosition = null;
  airOpenPalmFrames = 0;
  holoGestureScale = 1;
  holoExploded = false;
  updateHoloExplodeButton();
  requestHoloFrame();
  drawGestureSkeleton(null);
  setAirGestureIndicator(false, "HAND TRACKING: OFFLINE");
  airGestureHud.hidden = true;
  updateAirGestureToggle(false);
  void releaseAirGestureResources(camera, hands);
}

function toggleAirGestureMode() {
  if (airGesturePending || airGestureCamera) stopAirGestureMode();
  else requestAirGestureStart();
}

function requestAirGestureStart() {
  if (airGesturePending || airGestureCamera) return;
  const previousSession = airGestureSessionPromise;
  const startup = startAirGestureMode(previousSession);
  airGestureSessionPromise = startup;
  void startup.then(
    () => {
      if (airGestureSessionPromise === startup) airGestureSessionPromise = null;
    },
    (error) => {
      console.error("AIR GESTURE startup failed unexpectedly.", error);
      if (airGestureSessionPromise === startup) airGestureSessionPromise = null;
    },
  );
}

function readBlobAsDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result !== "string") {
        reject(new Error("画像ファイルを読み込めませんでした。"));
        return;
      }
      resolve(reader.result);
    }, { once: true });
    reader.addEventListener("error", () => reject(new Error("画像ファイルの読み込みに失敗しました。")), { once: true });
    reader.readAsDataURL(blob);
  });
}

async function createImageAttachment(blob, name) {
  const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
  if (!blob.type.startsWith("image/")) throw new Error("画像ファイルを選択してください。");
  if (blob.size > 24 * 1024 * 1024) throw new Error("画像ファイルは24MB以下にしてください。");
  let normalizedBlob = blob;
  if (!allowedTypes.has(blob.type) || blob.size > MAX_IMAGE_BYTES) {
    if (typeof createImageBitmap !== "function") {
      throw new Error("このブラウザーでは大きな画像やGIFを変換できません。JPEG、PNG、WebPの4MB以下をご利用ください。");
    }
    let bitmap;
    try {
      bitmap = await createImageBitmap(blob);
      if (bitmap.width * bitmap.height > 100_000_000) {
        throw new Error("画像の解像度が大きすぎます。");
      }
      let scale = Math.min(1, 1800 / Math.max(bitmap.width, bitmap.height));
      for (let attempt = 0; attempt < 4; attempt += 1) {
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(bitmap.width * scale));
        canvas.height = Math.max(1, Math.round(bitmap.height * scale));
        const context = canvas.getContext("2d");
        if (!context) throw new Error("画像変換用Canvasを利用できません。");
        context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        const converted = await new Promise((resolve, reject) => {
          canvas.toBlob(
            (result) => result
              ? resolve(result)
              : reject(new Error("画像を圧縮できませんでした。")),
            "image/jpeg",
            attempt < 2 ? 0.88 : 0.76,
          );
        });
        if (converted.size <= MAX_IMAGE_BYTES) {
          normalizedBlob = converted;
          break;
        }
        scale *= 0.72;
      }
    } finally {
      bitmap?.close();
    }
    if (normalizedBlob === blob || normalizedBlob.size > MAX_IMAGE_BYTES) {
      throw new Error("圧縮後も画像が4MBを超えています。小さい画像をお選びください。");
    }
  }

  if (normalizedBlob.size > MAX_IMAGE_BYTES) {
    throw new Error("画像1枚あたりのサイズは4MB以下にしてください。");
  }
  const dataUrl = await readBlobAsDataUrl(normalizedBlob);
  const separator = dataUrl.indexOf(",");
  if (separator < 0) throw new Error("画像データを読み取れませんでした。");
  return {
    id: `image-${++imageAttachmentSequence}`,
    name: name || "camera-frame.jpg",
    mimeType: normalizedBlob.type,
    data: dataUrl.slice(separator + 1),
    dataUrl,
    size: normalizedBlob.size,
  };
}

function renderPendingImages() {
  imageAttachments.replaceChildren();
  imageAttachments.hidden = pendingImages.length === 0;
  pendingImages.forEach((image) => {
    const item = document.createElement("div");
    item.className = "image-attachment";
    const preview = document.createElement("img");
    preview.src = image.dataUrl;
    preview.alt = image.name;
    const label = document.createElement("span");
    label.textContent = image.name;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `${image.name}を添付から削除`);
    remove.addEventListener("click", () => {
      pendingImages = pendingImages.filter((pending) => pending.id !== image.id);
      renderPendingImages();
    });
    item.append(preview, label, remove);
    imageAttachments.append(item);
  });
}

async function addImageFiles(files) {
  const selectedFiles = [...files].filter((file) => file.type.startsWith("image/"));
  if (!selectedFiles.length) {
    addMessage("assistant", "対応する画像を選択してください、伊吹様。");
    return;
  }
  for (const file of selectedFiles) {
    if (pendingImages.length >= MAX_IMAGE_ATTACHMENTS) {
      addMessage("assistant", `画像は最大${MAX_IMAGE_ATTACHMENTS}枚まで添付できます、伊吹様。`);
      break;
    }
    try {
      const attachment = await createImageAttachment(file, file.name);
      if (pendingImages.length >= MAX_IMAGE_ATTACHMENTS) {
        addMessage("assistant", `画像は最大${MAX_IMAGE_ATTACHMENTS}枚まで添付できます、伊吹様。`);
        break;
      }
      const totalSize = pendingImages.reduce((sum, image) => sum + image.size, 0);
      if (totalSize + attachment.size > MAX_TOTAL_IMAGE_BYTES) {
        throw new Error("添付画像の合計サイズは8MB以下にしてください。");
      }
      pendingImages.push(attachment);
    } catch (error) {
      console.warn("An image could not be attached.", error);
      addMessage("assistant", `画像を添付できませんでした、伊吹様。${error.message}`);
    }
  }
  renderPendingImages();
}

function updateScanViewButton() {
  const opticalReady = Boolean(opticalStream?.active && opticalVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA);
  const gestureReady = Boolean(airGestureCamera && airGestureVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA);
  scanViewButton.hidden = !opticalReady && !gestureReady;
}

function getActiveCameraVideo() {
  if (opticalStream?.active && opticalVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    return opticalVideo;
  }
  if (airGestureCamera && airGestureVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    return airGestureVideo;
  }
  return null;
}

async function scanCurrentCameraView() {
  const video = getActiveCameraVideo();
  if (!video || sendButton.disabled) return;
  try {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    if (!context || !canvas.width || !canvas.height) {
      throw new Error("カメラ映像を取得できませんでした。");
    }
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const frame = await new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => blob ? resolve(blob) : reject(new Error("カメラ映像を画像化できませんでした。")),
        "image/jpeg",
        0.88,
      );
    });
    const attachment = await createImageAttachment(frame, "camera-frame.jpg");
    const totalSize = pendingImages.reduce((sum, image) => sum + image.size, 0);
    if (pendingImages.length >= MAX_IMAGE_ATTACHMENTS || totalSize + attachment.size > MAX_TOTAL_IMAGE_BYTES) {
      throw new Error("添付画像の枚数または合計サイズの上限を超えています。");
    }
    pendingImages.push(attachment);
    renderPendingImages();
    const request = promptInput.value.trim() || "このカメラ画像に映っている内容を解析してください。";
    submitUserInput(request, {
      displayText: "SCAN VIEW // CAMERA FRAME",
      detectCommands: false,
      imageAttachments: [...pendingImages],
    });
  } catch (error) {
    console.error("Camera frame capture failed.", error);
    addMessage("assistant", `カメラ映像を解析用に取得できませんでした、伊吹様。${error.message}`);
  }
}

async function sendMessage(
  text,
  {
    voice = false,
    launcherAction = null,
    launcherOpened = true,
    displayText = text,
    requestText = text,
    includeISSContext = false,
    includeThreatContext = false,
    imageAttachments = [],
    simulationTarget = null,
    onReply = null,
    formatReply = null,
    onError = null,
    restorePromptFocus = true,
  } = {},
) {
  if ((!text && !imageAttachments.length) || sendButton.disabled) return;
  playSfx("transmit", true);
  if (voiceStandbyEnabled && recognitionMode === "standby" && recognition) {
    cancelRecognition = true;
    isListening = false;
    recognition.abort();
  }
  if (!voice && isSpeaking) {
    stopSpeech();
    setVoiceStatus("VOICE LINK // READY");
  }
  addMessage("user", displayText, { images: imageAttachments });
  history.push({ role: "user", content: text });
  trimHistory();
  persistHistory();
  recordOperatorActivity("conversation");
  if (!voice) {
    promptInput.value = "";
    promptInput.style.height = "auto";
  }
  setBusy(true);
  const typingMessage = addMessage("assistant", "応答を準備しております...", {
    typing: true,
    scroll: "end",
  });

  try {
    const weatherData = await getWeatherForChat();
    if (includeISSContext) {
      const telemetry = await refreshISSTelemetry();
      requestText = buildISSQuestionContext(requestText, telemetry);
    }
    const threatData = includeThreatContext ? await refreshThreatMonitor() : null;
    if (hudMode === "mark-iii") {
      requestText +=
        "\n\nMARK-III TACTICAL BRIEFING FORMAT: 回答は必ず以下の3見出しで簡潔に構成してください。" +
        "\n【MISSION SUMMARY / 結論】結論を1〜2文。" +
        "\n【EXECUTION STEPS / 実行手順】1〜3の具体的な手順。" +
        "\n【J.A.R.V.I.S. ADVICE / 戦術助言】最重要の助言または注意点。" +
        (simulationTarget
          ? "\nシミュレーション依頼の場合、MISSION SUMMARYに【TARGET / 目標】と【SUCCESS PROBABILITY / 成功確率】、EXECUTION STEPSに【OPTIMAL STRATEGY / 最適攻略ルート】の3段階、J.A.R.V.I.S. ADVICEに【RISK FACTOR / 注意すべきリスク】を必ず含めてください。"
          : "");
    }
    const requestMessages = history.map(({ role, content }) => ({ role, content }));
    if (requestText !== text && requestMessages.at(-1)?.role === "user") {
      requestMessages[requestMessages.length - 1].content = requestText;
    }
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: requestMessages,
        memories: memoryItems,
        hud_mode: hudMode,
        ...(weatherData ? { weather_data: weatherData } : {}),
        ...(imageAttachments.length
          ? {
              images: imageAttachments.map(({ mimeType, data }) => ({
                mime_type: mimeType,
                data,
              })),
            }
          : {}),
        ...(threatData ? { threat_data: threatData } : {}),
        ...(launcherAction ? { launcher_action: launcherAction, launcher_opened: launcherOpened } : {}),
      }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "リクエストに失敗しました。");
    if (typeof data.reply !== "string" || !data.reply.trim()) throw new Error("AIから空の応答が返されました。");
    const presentation = formatReply ? formatReply(data.reply) : null;
    const displayedReply =
      typeof presentation?.displayText === "string" ? presentation.displayText : data.reply;
    const storedReply =
      typeof presentation?.historyText === "string" ? presentation.historyText : data.reply;
    appendSystemLog("PACKET VERIFIED // AI RESPONSE RECEIVED");
    if (imageAttachments.length) {
      const sentImageIds = new Set(imageAttachments.map((image) => image.id));
      pendingImages = pendingImages.filter((image) => !sentImageIds.has(image.id));
      renderPendingImages();
    }
    typingMessage.remove();
    const searchMetadata = normalizeSearchMetadata({
      status: data.search_status,
      query: data.search_query,
      results: data.search_results,
      warning: data.search_warning,
    });
    const assistantMessage = { role: "assistant", content: storedReply };
    if (searchMetadata) assistantMessage.search = searchMetadata;
    if (launcherAction) {
      assistantMessage.launcher_action = launcherAction;
      assistantMessage.launcher_opened = launcherOpened;
    }
    history.push(assistantMessage);
    trimHistory();
    persistHistory();
    addMessage("assistant", displayedReply, { scroll: "start" });
    if (simulationTarget) renderSimulationResult(simulationTarget, data.reply);
    if (onReply) onReply(data.reply);
    playSfx("ready");
    if (searchMetadata) addSearchReceipt(searchMetadata);
    if (launcherAction) addProtocolReceipt(launcherAction, launcherOpened);
    let memoriesSaved = false;
    if (Array.isArray(data.memories)) {
      memoryItems = data.memories;
      memoriesSaved = persistMemories();
      if (memoryDialog.open) renderMemoryList(memoryItems);
    } else if (Number.isInteger(data.memory_count)) {
      updateMemoryCount(data.memory_count);
    }
    if (data.memory_warning) {
      if (memoriesSaved) setMemoryStatus("MEMORY ANALYSIS FAILED", "error");
      memoryDialogStatus.textContent = data.memory_warning;
    } else if (memoriesSaved && data.memory_added) {
      setMemoryStatus(`LOCAL SAVED +${data.memory_added}`);
    }
    if (memoryDialog.open) {
      memoryDialogStatus.textContent = data.memory_added
        ? `${data.memory_added}件の記憶を追加してブラウザーに保存しました。`
        : "記憶データをブラウザーから復元しました。";
    }
    if (voice) {
      if (voiceOutputEnabled) speakReply(presentation?.spokenText || data.reply);
      else setVoiceStatus("VOICE OUTPUT // MUTED", "muted");
    }
  } catch (error) {
    typingMessage.remove();
    if (onError) onError(error);
    if (simulationTarget) simulationStatus.textContent = `SIMULATION FAILED // ${error.message}`;
    addMessage("assistant", `申し訳ありません、伊吹様。${error.message}`, {
      scroll: "start",
    });
    if (launcherAction) addProtocolReceipt(launcherAction, launcherOpened);
    if (history.at(-1)?.role === "assistant") history.pop();
    if (history.at(-1)?.role === "user" && history.at(-1).content === text) history.pop();
    persistHistory();
    if (voice) setVoiceStatus("VOICE LINK // READY");
  } finally {
    setBusy(false);
    scheduleStandbyRecognition();
    if (!voice && restorePromptFocus) promptInput.focus();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredText = promptInput.value.trim();
  const images = [...pendingImages];
  if ((!enteredText && !images.length) || sendButton.disabled) return;
  if (voiceStandbyEnabled && recognition) {
    cancelRecognition = true;
    isListening = false;
    recognition.abort();
  } else if (isListening) {
    toggleVoiceInput();
  }
  submitUserInput(enteredText || "添付画像の内容を解析してください。", {
    displayText: enteredText || "VISION // IMAGE ANALYSIS",
    detectCommands: images.length === 0,
    imageAttachments: images,
  });
});

imageAttachButton.addEventListener("click", () => imageInput.click());
imageInput.addEventListener("change", () => {
  void addImageFiles(imageInput.files || []);
  imageInput.value = "";
});
promptInput.addEventListener("paste", (event) => {
  const images = [...(event.clipboardData?.items || [])]
    .filter((item) => item.type.startsWith("image/"))
    .map((item) => item.getAsFile())
    .filter(Boolean);
  if (!images.length) return;
  event.preventDefault();
  void addImageFiles(images);
});
form.addEventListener("dragover", (event) => {
  if (![...(event.dataTransfer?.types || [])].includes("Files")) return;
  event.preventDefault();
  form.classList.add("is-image-dragging");
});
form.addEventListener("dragleave", (event) => {
  if (event.relatedTarget instanceof Node && form.contains(event.relatedTarget)) return;
  form.classList.remove("is-image-dragging");
});
form.addEventListener("drop", (event) => {
  if (![...(event.dataTransfer?.types || [])].includes("Files")) return;
  event.preventDefault();
  form.classList.remove("is-image-dragging");
  void addImageFiles(event.dataTransfer.files);
});
scanViewButton.addEventListener("click", () => void scanCurrentCameraView());
[opticalVideo, airGestureVideo].forEach((video) => {
  video.addEventListener("loadeddata", updateScanViewButton);
  video.addEventListener("emptied", updateScanViewButton);
});

document.querySelectorAll("[data-protocol]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.protocol === "briefing") {
      submitUserInput(BRIEFING_PROMPT, {
        voice: voiceOutputEnabled,
        forcedProtocol: "briefing",
        displayText: "BRIEFING // 釧路市の天気・日本の主要ニュース",
      });
    }
  });
});

dataScanButton.addEventListener("click", () => void scanClipboard());
opticalToggle.addEventListener("click", toggleOpticalSensor);
opticalCloseButton.addEventListener("click", stopOpticalSensor);
ambientToggle.addEventListener("click", toggleAmbientCore);
airGestureToggle.addEventListener("click", toggleAirGestureMode);
simulationOpenButton.addEventListener("click", () => openSimulationDialog());
simulationCloseButton.addEventListener("click", () => simulationDialog.close());
simulationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const target = simulationTargetInput.value.trim();
  if (!target) return;
  runSimulation(target, `${target} のシミュレーションをしてください`);
});
holoNoteAddButton.addEventListener("click", () => addFloatingNote());
floatingNotes.addEventListener("pointerdown", beginHoloNoteDrag);
window.addEventListener("pointermove", moveHoloNote);
window.addEventListener("pointerup", endHoloNoteDrag);
window.addEventListener("pointercancel", endHoloNoteDrag);
sentryToggle.addEventListener("click", () => setSentryMode(!sentryMode));
sentryContinueButton.addEventListener("click", continueAfterSentryPrompt);
sentryStandbyButton.addEventListener("click", enterSentryStandby);
sentryResumeButton.addEventListener("click", resumeFromSentryStandby);
systemLockButton.addEventListener("click", lockSystem);
systemUnlockButton.addEventListener("click", unlockSystem);
systemLockOverlay.addEventListener("cancel", (event) => event.preventDefault());
sentryDialog.addEventListener("cancel", (event) => event.preventDefault());
icingDismissButton.addEventListener("click", clearIcingAlert);
document.addEventListener("pointermove", (event) => {
  markOperatorActivity(event);
  if (hudMode !== "mark-iii" || event.pointerType === "touch") {
    crosshair.classList.remove("is-visible");
    return;
  }
  crosshair.style.left = `${event.clientX}px`;
  crosshair.style.top = `${event.clientY}px`;
  crosshairCoordinates.textContent =
    `X:${String(Math.round(event.clientX)).padStart(4, "0")} // Y:${String(Math.round(event.clientY)).padStart(4, "0")}`;
  crosshair.classList.add("is-visible");
}, { passive: true });
["pointerdown", "keydown", "touchstart", "wheel"].forEach((eventName) => {
  document.addEventListener(eventName, markOperatorActivity, { passive: true, capture: true });
});
holoOpenButton.addEventListener("click", openHoloProjector);
cityMapOpenButton.addEventListener("click", () => {
  void scanTacticalCity();
});
holoCloseButton.addEventListener("click", () => holoDialog.close());
holoDialog.addEventListener("close", closeHoloProjector);
holoModelSelect.addEventListener("change", () => setHoloModel(holoModelSelect.value));
holoCityToggle.addEventListener("click", () => {
  if (!openHoloProjector()) return;
  setCityViewEnabled(!cityModeActive);
  if (cityModeActive && cityMapCounts.buildings === 0 && cityMapCounts.roads === 0) {
    void scanTacticalCity();
  }
});
cityScanForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const place = cityPlaceInput.value.trim();
  if (!place) {
    cityScanStatus.textContent = "ENTER A CITY OR LANDMARK TO SCAN";
    cityPlaceInput.focus();
    return;
  }
  void scanTacticalCity({ place });
});
cityCurrentScanButton.addEventListener("click", () => {
  void scanTacticalCity();
});
holoExplodeButton.addEventListener("click", () => {
  holoExploded = !holoExploded;
  updateHoloExplodeButton();
  requestHoloFrame();
});
holoCanvas.addEventListener("pointerdown", (event) => {
  holoPointer = { x: event.clientX, y: event.clientY, id: event.pointerId };
  holoCanvas.setPointerCapture(event.pointerId);
});
holoCanvas.addEventListener("pointermove", (event) => {
  if (!holoPointer || event.pointerId !== holoPointer.id) return;
  holoRotationY += (event.clientX - holoPointer.x) * 0.012;
  holoRotationX = Math.max(-Math.PI, Math.min(Math.PI, holoRotationX + (event.clientY - holoPointer.y) * 0.012));
  holoPointer.x = event.clientX;
  holoPointer.y = event.clientY;
  requestHoloFrame();
});
holoCanvas.addEventListener("wheel", (event) => {
  event.preventDefault();
  holoGestureScale = Math.max(0.65, Math.min(1.65, holoGestureScale * Math.exp(-event.deltaY * 0.001)));
  requestHoloFrame();
}, { passive: false });
["pointerup", "pointercancel", "lostpointercapture"].forEach((eventName) => {
  holoCanvas.addEventListener(eventName, () => {
    holoPointer = null;
  });
});
ideaOpenButton.addEventListener("click", () => openIdeaSynthesizer());
ideaCloseButton.addEventListener("click", () => ideaDialog.close());
ideaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const topic = ideaTopicInput.value.trim();
  if (!topic) return;
  runIdeaSynthesis(topic, `テーマ「${topic}」について関連アイデアを合成してください`);
});
chronoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const scheduled = createChronoEvent(chronoEventTime.value, chronoEventTitle.value);
  if (!scheduled) {
    chronoDate.textContent = "INVALID SCHEDULE";
    return;
  }
  chronoEventTitle.value = "";
  appendSystemLog(`CHRONO EVENT // ${scheduled.time} SCHEDULED`);
});
chronoTrack.addEventListener("pointerdown", (event) => setChronoTimeFromPointer(event));
chronoTrack.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  event.preventDefault();
  const current = Number(chronoTrack.getAttribute("aria-valuenow")) || 0;
  const next = Math.max(0, Math.min(1439, current + (event.key === "ArrowRight" ? 15 : -15)));
  chronoEventTime.value = `${String(Math.floor(next / 60)).padStart(2, "0")}:${String(next % 60).padStart(2, "0")}`;
  chronoEventTitle.focus();
});
cipherOpenButton.addEventListener("click", () => {
  if (!cipherDialog.open) cipherDialog.showModal();
  cipherInput.focus();
});
cipherCloseButton.addEventListener("click", () => cipherDialog.close());
cipherEncryptButton.addEventListener("click", () => void runCipherOperation("encrypt"));
cipherDecryptButton.addEventListener("click", () => void runCipherOperation("decrypt"));
prototypeOpenButton.addEventListener("click", () => openPrototypeDialog());
prototypeCloseButton.addEventListener("click", () => prototypeDialog.close());
prototypeDialog.addEventListener("close", () => {
  prototypeFrame.removeAttribute("srcdoc");
  prototypeFrame.hidden = true;
});
prototypeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const target = prototypeTopicInput.value.trim();
  if (!target) {
    prototypeStatus.textContent = "ENTER A PROJECT BRIEF BEFORE BUILDING";
    prototypeTopicInput.focus();
    return;
  }
  if (sendButton.disabled || prototypeBuildPending) {
    prototypeStatus.textContent = "ANOTHER AI REQUEST IS IN PROGRESS";
    return;
  }
  runPrototypeForge(target);
});
prototypeFullscreenButton.addEventListener("click", () => {
  if (typeof prototypeFrame.requestFullscreen !== "function") {
    prototypeStatus.textContent = "FULLSCREEN IS NOT AVAILABLE IN THIS BROWSER";
    return;
  }
  void prototypeFrame.requestFullscreen().catch((error) => {
    console.error("PROTOTYPE FORGE could not enter fullscreen.", error);
    prototypeStatus.textContent = `FULLSCREEN FAILED // ${error.message}`;
  });
});
prototypeDownloadButton.addEventListener("click", () => {
  if (!prototypeHtmlSource) return;
  const blob = new Blob([prototypeHtmlSource], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeName = (prototypeTopicInput.value || "prototype")
    .normalize("NFKC")
    .replace(/[^\p{L}\p{N}_-]+/gu, "-")
    .replace(/^-+|-+$/gu, "")
    .slice(0, 48) || "prototype";
  link.href = url;
  link.download = `${safeName}.html`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
});
knowledgeOpenButton.addEventListener("click", openKnowledgeMatrix);
knowledgeCloseButton.addEventListener("click", () => knowledgeDialog.close());
knowledgeDialog.addEventListener("close", closeKnowledgeMatrix);
knowledgeCanvas.addEventListener("pointerdown", (event) => {
  const bounds = knowledgeCanvas.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  let nodeIndex = -1;
  for (let index = knowledgeNodes.length - 1; index >= 0; index -= 1) {
    const node = knowledgeNodes[index];
    const nodeX = node.x * bounds.width;
    const nodeY = node.y * bounds.height;
    if (Math.hypot(x - nodeX, y - nodeY) <= node.radius + 8) {
      nodeIndex = index;
      break;
    }
  }
  knowledgePointer = {
    pointerId: event.pointerId,
    startX: x,
    startY: y,
    nodeIndex,
    moved: false,
  };
  if (nodeIndex >= 0) {
    knowledgeSelectedIndex = nodeIndex;
    requestKnowledgeFrame();
  }
  knowledgeCanvas.setPointerCapture(event.pointerId);
});
knowledgeCanvas.addEventListener("pointermove", (event) => {
  if (!knowledgePointer || event.pointerId !== knowledgePointer.pointerId || knowledgePointer.nodeIndex < 0) return;
  const bounds = knowledgeCanvas.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  if (Math.hypot(x - knowledgePointer.startX, y - knowledgePointer.startY) > 4) {
    knowledgePointer.moved = true;
  }
  if (!knowledgePointer.moved) return;
  const node = knowledgeNodes[knowledgePointer.nodeIndex];
  node.x = Math.max(0.04, Math.min(0.96, x / bounds.width));
  node.y = Math.max(0.05, Math.min(0.95, y / bounds.height));
  requestKnowledgeFrame();
});
knowledgeCanvas.addEventListener("pointerup", (event) => {
  if (!knowledgePointer || event.pointerId !== knowledgePointer.pointerId) return;
  if (knowledgePointer.nodeIndex >= 0 && !knowledgePointer.moved) {
    showKnowledgeNode(knowledgePointer.nodeIndex);
  }
  knowledgePointer = null;
});
["pointercancel", "lostpointercapture"].forEach((eventName) => {
  knowledgeCanvas.addEventListener(eventName, () => {
    knowledgePointer = null;
  });
});
knowledgeCanvas.addEventListener("keydown", (event) => {
  if (!knowledgeNodes.length) return;
  if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)) {
    event.preventDefault();
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    knowledgeSelectedIndex =
      (knowledgeSelectedIndex + direction + knowledgeNodes.length) % knowledgeNodes.length;
    requestKnowledgeFrame();
  } else if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showKnowledgeNode(Math.max(0, knowledgeSelectedIndex));
  }
});
microphoneButton.addEventListener("click", toggleVoiceInput);
standbyButton.addEventListener("click", toggleVoiceStandby);
speakerButton.addEventListener("click", toggleVoiceOutput);
sfxToggle.addEventListener("click", toggleSfx);
hudModeToggle.addEventListener("click", toggleHudMode);
bootEnableAudioButton.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!sfxEnabled) {
    bootEnableAudioButton.textContent = "SFX MUTED";
    return;
  }
  playSfx("boot", true);
  bootEnableAudioButton.textContent = "AUDIO LINK // ARMED";
  bootEnableAudioButton.disabled = true;
});
bootSkipButton.addEventListener("click", finishBootSequence);
bootOverlay.addEventListener("click", (event) => {
  if (!(event.target instanceof Element) || !event.target.closest("#boot-enable-audio")) {
    finishBootSequence();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("is-booting")) {
    finishBootSequence();
  }
});
sfxVolumeInput.addEventListener("input", () => {
  sfxVolume = Number(sfxVolumeInput.value) / 100;
  sfxVolumeValue.textContent = `${sfxVolumeInput.value}%`;
  updateSfxGain();
});

document.addEventListener("pointerover", (event) => {
  if (event.pointerType && event.pointerType !== "mouse") return;
  const target = event.target instanceof Element ? event.target.closest("button, .launcher-button") : null;
  const previous = event.relatedTarget instanceof Element
    ? event.relatedTarget.closest("button, .launcher-button")
    : null;
  if (target && target !== previous && !target.matches(":disabled")) playSfx("hover");
});
document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target.closest("button, .launcher-button") : null;
  if (!target || target.matches(":disabled")) return;
  playSfx("click", true);
  if (target.matches("a.launcher-button[target='_blank']")) playSfx("launch");
}, true);

promptInput.addEventListener("input", () => {
  promptInput.style.height = "auto";
  promptInput.style.height = `${Math.min(promptInput.scrollHeight, 130)}px`;
});

promptInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    form.requestSubmit();
  }
});

clearButton.addEventListener("click", () => {
  history.length = 0;
  messagesElement.replaceChildren();
  addMessage("assistant", greeting);
  try {
    window.localStorage.removeItem(HISTORY_STORAGE_KEY);
    updateSessionStatus();
  } catch (error) {
    console.error("Conversation history could not be cleared from localStorage.", error);
    updateSessionStatus("SESSION CLEAR FAILED");
  }
  promptInput.focus();
});

document.querySelector("#open-memory").addEventListener("click", () => {
  memoryDialog.showModal();
  memoryDialogStatus.textContent = "ブラウザーの記憶領域を確認しています...";
  renderMemoryList(memoryItems);
  refreshMemory();
});
document.querySelector("#close-memory").addEventListener("click", () => memoryDialog.close());
document.querySelector("#clear-memory").addEventListener("click", clearMemory);
missionTimerToggle.addEventListener("click", toggleMissionTimer);
missionTimerReset.addEventListener("click", resetMissionTimer);
analyticsTaskButton.addEventListener("click", () => {
  recordOperatorActivity("task");
  appendSystemLog("OPERATOR TASK // COMPLETION RECORDED");
});
window.addEventListener("pagehide", () => {
  clearInterval(sentryCheckInterval);
  sentryCheckInterval = null;
  clearTimeout(icingAlertTimer);
  icingAlertTimer = null;
  clearInterval(powerDistributionInterval);
  if (holoNotesSaveTimer !== null) {
    clearTimeout(holoNotesSaveTimer);
    holoNotesSaveTimer = null;
    persistHoloNotes();
  }
  if (housePartyPending) setHousePartyControlsLocked(false);
  clearTimeout(housePartyTimeout);
  housePartyTimeout = null;
  housePartyPending = false;
  houseAlert.hidden = true;
  document.body.classList.remove("house-party-active");
  clearCleanSlateTimers();
  if (cleanSlateAnimationFrame !== null) cancelAnimationFrame(cleanSlateAnimationFrame);
  cleanSlateAnimationFrame = null;
  cleanSlatePending = false;
  cleanSlateOverlay.hidden = true;
  setCleanSlateControlsLocked(false);
  clearTimeout(veronicaDropTimer);
  veronicaDropTimer = null;
  closeKnowledgeMatrix();
  prototypeFrame.removeAttribute("srcdoc");
  closeHoloProjector();
  holoResizeObserver?.disconnect();
  holoModelParts.forEach((part) => {
    part.geometry.dispose();
    part.material.dispose();
  });
  holoRenderer?.dispose();
  holoRenderer = null;
  stopAirGestureMode();
  stopOpticalSensor();
  stopAmbientCore();
});
window.addEventListener("resize", () => {
  holoNotes.forEach((note) => {
    const element = [...floatingNotes.children].find((item) => item.dataset.noteId === note.id);
    if (!element) return;
    const position = getHoloNotePosition(
      Number.parseFloat(element.style.left),
      Number.parseFloat(element.style.top),
      element.offsetWidth,
      element.offsetHeight,
    );
    note.x = position.x;
    note.y = position.y;
    element.style.left = `${note.x}px`;
    element.style.top = `${note.y}px`;
  });
  scheduleHoloNotesSave();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    if (globalRadarFrame !== null) cancelAnimationFrame(globalRadarFrame);
    globalRadarFrame = null;
  } else {
    startGlobalRadar();
  }
});

restoreHistory();
restoreMemories();
restoreHoloNotes();
restoreChronoEvents();
systemLogReady = true;
renderChronoTimeline();
restoreWeatherCache();
appendSystemLog("NEURAL LINK: ACTIVE");
appendSystemLog("BIOMETRIC SESSION: VERIFIED");
updateVoiceStandbyButton();
updateSfxButton();
updateMissionTimerDisplay();
restoreOperatorAnalytics();
updateOperatorAnalytics();
updateMarkModeSystems();
updateSentryStatus();
clearModeInlineOverrides();
document.body.dataset.hudMode = hudMode;
updateHudModeButton();
sfxVolumeValue.textContent = `${sfxVolumeInput.value}%`;
preloadWakeAcknowledgement();
void refreshWeather();
void refreshISSTelemetry();
void refreshThreatMonitor();
updateClock();
updateTelemetryTicker();
updateBiometricWaveform();
updatePowerDistribution();
updateFlightTelemetry();
updateTargetLockReadouts();
createWaveform("#spectrum", 32);
updateTrafficWaveforms();
startBootSequence();
setInterval(updateClock, 1000);
setInterval(updateBiometricWaveform, 110);
powerDistributionInterval = setInterval(updatePowerDistribution, 850);
setInterval(updateFlightTelemetry, 850);
setInterval(updateTargetLockReadouts, 1800);
setInterval(animateTelemetry, 1800);
setInterval(updateTrafficWaveforms, 120);
setInterval(() => void refreshWeather(), WEATHER_REFRESH_INTERVAL);
setInterval(() => void refreshISSTelemetry(), ISS_REFRESH_INTERVAL);
setInterval(() => void refreshUSGSEarthquakes(), USGS_REFRESH_INTERVAL);
setInterval(() => void refreshNOAAKp(), NOAA_REFRESH_INTERVAL);
setInterval(() => void refreshNOAASolarXray(), NOAA_REFRESH_INTERVAL);
startGlobalRadar();
