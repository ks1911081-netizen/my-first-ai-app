const form = document.querySelector("#chat-form");
const promptInput = document.querySelector("#prompt");
const messagesElement = document.querySelector("#messages");
const sendButton = document.querySelector("#send-button");
const microphoneButton = document.querySelector("#voice-input");
const microphoneLabel = document.querySelector("#mic-label");
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
const HISTORY_STORAGE_KEY = "jarvis.conversation.v1";
const MEMORY_STORAGE_KEY = "jarvis.long-term-memory.v1";
const MAX_HISTORY_MESSAGES = 40;
const MAX_MEMORY_ITEMS = 80;
const WEATHER_REFRESH_INTERVAL = 5 * 60 * 1000;
const BRIEFING_PROMPT =
  "伊吹様向けに、今日の北海道釧路市の天気予報と、本日の日本の主要ニュース3つをWeb検索で調べて簡潔に報告して";
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
let isListening = false;
let cancelRecognition = false;
let isSpeaking = false;
let voiceOutputEnabled = true;
let activeUtterance = null;
let activeAudio = null;
let activeAudioUrl = null;
let speechRequestId = 0;
let requestInProgress = false;

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
    return true;
  } catch (error) {
    console.error("Long-term memory could not be saved to localStorage.", error);
    setMemoryStatus("LOCAL SAVE FAILED", "error");
    if (memoryDialog.open) memoryDialogStatus.textContent = "ブラウザーの記憶領域に保存できませんでした。";
    return false;
  }
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

function formatWeatherValue(value, digits = 0) {
  return Number.isFinite(value)
    ? new Intl.NumberFormat("ja-JP", { maximumFractionDigits: digits }).format(value)
    : "--";
}

async function refreshWeather() {
  try {
    const response = await fetch("/api/weather");
    const weather = await response.json();
    if (!response.ok) throw new Error(weather.error || "気象データを取得できませんでした。");

    document.querySelector("#weather-current").textContent =
      formatWeatherValue(weather.current.temperature_c);
    document.querySelector("#weather-description").textContent =
      weather.current.description.toUpperCase();
    document.querySelector("#weather-wind").textContent =
      formatWeatherValue(weather.current.wind_speed_kmh, 1);
    document.querySelector("#weather-high").textContent = formatWeatherValue(weather.today.high_c);
    document.querySelector("#weather-low").textContent = formatWeatherValue(weather.today.low_c);
    document.querySelector("#weather-updated").textContent =
      `DATA // ${weather.current.time.slice(11, 16)}`;
    weatherPanel.dataset.state = "ready";
    weatherError.hidden = true;
  } catch (error) {
    console.error("Kushiro weather could not be loaded.", error);
    document.querySelector("#weather-current").textContent = "--";
    document.querySelector("#weather-description").textContent = "DATA UNAVAILABLE";
    document.querySelector("#weather-wind").textContent = "--";
    document.querySelector("#weather-high").textContent = "--";
    document.querySelector("#weather-low").textContent = "--";
    document.querySelector("#weather-updated").textContent = "DATA // OFFLINE";
    weatherPanel.dataset.state = "error";
    weatherError.textContent = error.message;
    weatherError.hidden = false;
  }
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
  core.classList.toggle("is-thinking", requestInProgress);
  core.classList.toggle("is-listening", isListening);
  core.classList.toggle("is-speaking", isSpeaking);
  coreStage.classList.toggle("is-busy", requestInProgress);
  coreStage.classList.toggle("is-active", isListening || isSpeaking || requestInProgress);
  reactorStatus.textContent = isListening
    ? "LISTENING"
    : isSpeaking
      ? "SPEAKING"
      : requestInProgress
        ? "PROCESSING"
        : "NOMINAL";
  coreCaption.textContent = isListening
    ? "聞き取り中です、伊吹様..."
    : isSpeaking
      ? "音声で応答しています、伊吹様..."
      : requestInProgress
        ? "応答を生成中です、伊吹様..."
        : "システムは正常です。ご用件をどうぞ。";
  connectionStatus.textContent = requestInProgress
    ? "PROCESSING"
    : isListening
      ? "VOICE INPUT"
      : isSpeaking
        ? "VOICE OUTPUT"
        : "SYSTEM ONLINE";
}

function setVoiceStatus(message, state = "ready") {
  voiceStatus.textContent = message;
  voiceStatus.dataset.state = state;
  microphoneButton.classList.toggle("is-listening", state === "listening");
  microphoneButton.setAttribute("aria-pressed", String(isListening));
  microphoneButton.setAttribute(
    "aria-label",
    isListening ? "音声入力をキャンセル" : "音声入力を開始",
  );
  microphoneLabel.textContent = isListening ? "STOP" : "MIC";
}

function stopSpeech() {
  speechRequestId += 1;
  activeUtterance = null;
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
  };
  window.speechSynthesis.speak(utterance);
}

function finishAudioPlayback(audio, requestId, error = null) {
  if (speechRequestId !== requestId || activeAudio !== audio) return;
  activeAudio = null;
  audio.removeAttribute("src");
  audio.load();
  if (activeAudioUrl) {
    URL.revokeObjectURL(activeAudioUrl);
    activeAudioUrl = null;
  }
  isSpeaking = false;
  setVoiceStatus(error ? "音声の再生に失敗しました" : "VOICE LINK // READY", error ? "error" : "ready");
  syncCoreState();
}

async function speakReply(text) {
  if (!voiceOutputEnabled) return;
  stopSpeech();
  const requestId = speechRequestId;
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
    setVoiceStatus(error.error || `音声APIがHTTP ${response.status}を返しました`, "error");
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
    setVoiceStatus("音声APIから空のデータが返されました", "error");
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
  if (voiceOutputEnabled) {
    setVoiceStatus(isListening ? "聞き取り中..." : "VOICE LINK // READY", isListening ? "listening" : "ready");
  } else {
    stopSpeech();
    setVoiceStatus(
      isListening ? "聞き取り中..." : "VOICE OUTPUT // MUTED",
      isListening ? "listening" : "muted",
    );
  }
}

function toggleVoiceInput() {
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

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    setVoiceStatus("このブラウザーは音声認識に対応していません", "error");
    return;
  }

  stopSpeech();
  const activeRecognition = new SpeechRecognition();
  let transcript = "";
  let recognitionError = "";
  cancelRecognition = false;
  recognition = activeRecognition;
  isListening = true;
  setVoiceStatus("聞き取り中...", "listening");
  syncCoreState();

  activeRecognition.lang = "ja-JP";
  activeRecognition.continuous = false;
  activeRecognition.interimResults = true;
  activeRecognition.maxAlternatives = 1;
  activeRecognition.onresult = (event) => {
    if (recognition !== activeRecognition || cancelRecognition) return;
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
    const errors = {
      "audio-capture": "マイクを検出できません",
      "no-speech": "音声を検出できませんでした",
      "not-allowed": "マイクの使用が許可されていません",
      "service-not-allowed": "音声認識サービスが許可されていません",
      network: "音声認識サービスに接続できません",
    };
    recognitionError = errors[event.error] || `音声認識に失敗しました (${event.error})`;
    setVoiceStatus(recognitionError, "error");
  };
  activeRecognition.onend = () => {
    if (recognition !== activeRecognition) return;
    const shouldSend = isListening && !cancelRecognition && !recognitionError && transcript.trim();
    const wasCancelled = cancelRecognition;
    recognition = null;
    isListening = false;
    cancelRecognition = false;
    syncCoreState();
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
    isListening = false;
    cancelRecognition = false;
    syncCoreState();
    const detail = error instanceof Error ? error.message : String(error);
    setVoiceStatus(`音声入力を開始できませんでした: ${detail}`, "error");
  }
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
}
animateTelemetry.cpu = 32;
animateTelemetry.ram = 58;

function addMessage(role, text, { typing = false, scroll = null } = {}) {
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
  if (!typing) {
    const time = document.createElement("time");
    time.textContent = new Intl.DateTimeFormat("ja-JP", { hour: "2-digit", minute: "2-digit" }).format(new Date());
    sender.append(" ", time);
  }
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
  content.append(sender, body);
  article.append(avatar, content);
  messagesElement.append(article);
  if (scroll) scrollMessageIntoView(article, scroll);
  return article;
}

function setBusy(busy) {
  requestInProgress = busy;
  sendButton.disabled = busy;
  promptInput.disabled = busy;
  microphoneButton.disabled = busy;
  syncCoreState();
}

function submitUserInput(
  text,
  { voice = false, forcedProtocol = null, displayText = text } = {},
) {
  const launcherAction = forcedProtocol || detectProtocol(text);
  const launcherOpened = launcherAction ? openProtocolTab(launcherAction) : true;
  const requestText = launcherAction === "briefing" ? BRIEFING_PROMPT : text;
  void sendMessage(text, {
    voice,
    launcherAction,
    launcherOpened,
    displayText,
    requestText,
  });
}

async function sendMessage(
  text,
  {
    voice = false,
    launcherAction = null,
    launcherOpened = true,
    displayText = text,
    requestText = text,
  } = {},
) {
  if (!text || sendButton.disabled) return;
  if (!voice && isSpeaking) {
    stopSpeech();
    setVoiceStatus("VOICE LINK // READY");
  }
  addMessage("user", displayText);
  history.push({ role: "user", content: text });
  trimHistory();
  persistHistory();
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
        ...(launcherAction ? { launcher_action: launcherAction, launcher_opened: launcherOpened } : {}),
      }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "リクエストに失敗しました。");
    if (typeof data.reply !== "string" || !data.reply.trim()) throw new Error("AIから空の応答が返されました。");
    typingMessage.remove();
    const searchMetadata = normalizeSearchMetadata({
      status: data.search_status,
      query: data.search_query,
      results: data.search_results,
      warning: data.search_warning,
    });
    const assistantMessage = { role: "assistant", content: data.reply };
    if (searchMetadata) assistantMessage.search = searchMetadata;
    if (launcherAction) {
      assistantMessage.launcher_action = launcherAction;
      assistantMessage.launcher_opened = launcherOpened;
    }
    history.push(assistantMessage);
    trimHistory();
    persistHistory();
    addMessage("assistant", data.reply, { scroll: "start" });
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
      if (voiceOutputEnabled) speakReply(data.reply);
      else setVoiceStatus("VOICE OUTPUT // MUTED", "muted");
    }
  } catch (error) {
    typingMessage.remove();
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
    if (!voice) promptInput.focus();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = promptInput.value.trim();
  if (!text || sendButton.disabled) return;
  if (isListening) toggleVoiceInput();
  submitUserInput(text);
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

microphoneButton.addEventListener("click", toggleVoiceInput);
speakerButton.addEventListener("click", toggleVoiceOutput);

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

restoreHistory();
restoreMemories();
void refreshWeather();
updateClock();
createWaveform(".network-wave", 42);
createWaveform("#spectrum", 32);
setInterval(updateClock, 1000);
setInterval(animateTelemetry, 1800);
setInterval(() => void refreshWeather(), WEATHER_REFRESH_INTERVAL);
