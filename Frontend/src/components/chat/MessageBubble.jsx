export default function MessageBubble({ msg }) {
  const isUser = msg.role === "user";
  const isError = msg.role === "error";

  
  const formatContent = (text) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      const boldLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      if (line.startsWith("- ") || line.startsWith("• ")) {
        return (
          <ul key={i} style={{ paddingLeft: 16, marginBottom: 2 }}>
            <li dangerouslySetInnerHTML={{ __html: boldLine.replace(/^[-•]\s/, "") }} />
          </ul>
        );
      }
      if (line.trim() === "") return <br key={i} />;
      return <p key={i} style={{ margin: "2px 0" }} dangerouslySetInnerHTML={{ __html: boldLine }} />;
    });
  };

  return (
    <div className={`message-row ${isUser ? "user" : ""}`}>
      <div className={`avatar ${isUser ? "user-av" : "bot"}`}>
        {isUser ? "✦" : "✿"}
      </div>
      <div className={`bubble ${isError ? "error" : isUser ? "user" : "bot"}`}>
        {isUser ? msg.content : formatContent(msg.content)}
      </div>
    </div>
  );
}