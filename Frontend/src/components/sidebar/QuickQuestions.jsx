const questions = [
  "Why is my period late?",
  "What should I eat today?",
  "Best workouts for PCOS?",
  "How to manage stress?",
  "What causes hair loss in PCOS?",
  "Can I reverse insulin resistance?",
];

export default function QuickQuestions({ onAsk }) {
  return (
    <div className="card">
      <h4>💬 Ask Me</h4>
      {questions.map((q, i) => (
        <button key={i} className="quick-btn" onClick={() => onAsk?.(q)}>
          {q}
        </button>
      ))}
    </div>
  );
}