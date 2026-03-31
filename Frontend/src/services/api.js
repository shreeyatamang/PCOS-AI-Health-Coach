const API_BASE = "http://localhost:8000";

export async function sendChat(message, history) {
  const res = await fetch(`${API_BASE}/chat/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      history,
    }),
  });

  if (!res.ok) {
    throw new Error("Server error");
  }

  return res.json();
}