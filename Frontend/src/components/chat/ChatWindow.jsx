import { useState, useRef, useEffect } from "react";
import { sendChat } from "../../services/api";
import TypingIndicator from "./TypingIndicator";
import MessageBubble from "./MessageBubble";

const WELCOME_CHIPS = [
  "Why is my period late?",
  "What should I eat today?",
  "Best workouts for PCOS?",
  "How to manage stress with PCOS?",
  "Does PCOS affect fertility?",
];

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const historyRef = useRef([]);
  const bottomRef = useRef();
  const textareaRef = useRef();

  // Listen for quick-ask events from sidebar
  useEffect(() => {
    const handler = (e) => handleSend(e.detail);
    window.addEventListener("quick-ask", handler);
    return () => window.removeEventListener("quick-ask", handler);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const autoResize = () => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 140) + "px";
  };

  const handleSend = async (text = input) => {
    if (!text.trim() || loading) return;

    const userMsg = { role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    historyRef.current.push(userMsg);

    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "52px";
    setLoading(true);

    try {
      const res = await sendChat(text, historyRef.current.slice(-6));
      const botMsg = { role: "assistant", content: res.response };
      setMessages(prev => [...prev, botMsg]);
      historyRef.current.push(botMsg);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "error", content: "Couldn't reach the server. Make sure the backend is running." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.length === 0 && (
          <div className="welcome">
            <div className="welcome-flower">🌸</div>
            <h2>Hi, I'm Maya</h2>
            <p>Your personal PCOS health coach. Ask me anything about diet, hormones, workouts, or how you're feeling.</p>
            <div className="welcome-chips">
              {WELCOME_CHIPS.map((q, i) => (
                <button key={i} className="welcome-chip" onClick={() => handleSend(q)}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <MessageBubble key={i} msg={msg} />
        ))}

        {loading && (
          <div className="message-row">
            <div className="avatar bot">✿</div>
            <TypingIndicator />
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="input-area">
        <div className="input-wrap">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => { setInput(e.target.value); autoResize(); }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask Maya anything about PCOS…"
            rows={1}
          />
        </div>

        <button className="send-btn" onClick={() => handleSend()} disabled={loading || !input.trim()}>
          <svg viewBox="0 0 24 24">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
}