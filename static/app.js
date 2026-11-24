const form = document.querySelector("#chat-form");
const promptInput = document.querySelector("#prompt");
const messagesElement = document.querySelector("#messages");
const sendButton = document.querySelector("#send-button");
const clearButton = document.querySelector("#clear-chat");
const core = document.querySelector("#core");
const coreCaption = document.querySelector("#core-caption");
const connectionStatus = document.querySelector("#connection-status");

const history = [];
const greeting = "お帰りなさいませ、サー。ご用件をどうぞ。調査でもアイデア出しでも、お手伝いいたします。";

function addMessage(role, text, { typing = false } = {}) {
  const article = document.createElement("article");
  article.className = `message ${role === "user" ? "user-message" : "assistant-message"}${typing ? " typing" : ""}`;

  const avatar = document.createElement("span");
  avatar.className = "message-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = role === "user" ? "S" : "A";

  const content = document.createElement("div");
  content.className = "message-content";
  const sender = document.createElement("span");
  sender.className = "message-sender";
  sender.textContent = role === "user" ? "YOU" : "AETHER";
  if (!typing) {
    const time = document.createElement("time");
    time.textContent = new Intl.DateTimeFormat("ja-JP", { hour: "2-digit", minute: "2-digit" }).format(new Date());
    sender.append(" ", time);
  }
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  content.append(sender, paragraph);
  article.append(avatar, content);
  messagesElement.append(article);
  messagesElement.scrollTop = messagesElement.scrollHeight;
  return article;
}

function setBusy(busy) {
  sendButton.disabled = busy;
  promptInput.disabled = busy;
  core.classList.toggle("is-thinking", busy);
  coreCaption.textContent = busy ? "思考中です、サー..." : "いつでもお手伝いいたします、サー。";
  connectionStatus.textContent = busy ? "PROCESSING" : "SYSTEM ONLINE";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = promptInput.value.trim();
  if (!text || sendButton.disabled) return;

  addMessage("user", text);
  history.push({ role: "user", content: text });
  promptInput.value = "";
  promptInput.style.height = "auto";
  setBusy(true);
  const typingMessage = addMessage("assistant", "応答を準備しております...", { typing: true });

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "リクエストに失敗しました。");
    if (typeof data.reply !== "string" || !data.reply.trim()) throw new Error("AIから空の応答が返されました。");
    typingMessage.remove();
    history.push({ role: "assistant", content: data.reply });
    addMessage("assistant", data.reply);
  } catch (error) {
    typingMessage.remove();
    addMessage("assistant", `申し訳ありません、サー。${error.message}`);
    history.pop();
  } finally {
    setBusy(false);
    promptInput.focus();
  }
});

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
  promptInput.focus();
});
