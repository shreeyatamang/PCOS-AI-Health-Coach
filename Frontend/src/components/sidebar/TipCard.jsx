const tips = [
  { icon: "🍵", text: "Spearmint tea twice daily can help lower androgen levels naturally." },
  { icon: "🏃‍♀️", text: "30 minutes of low-impact cardio 5x a week improves insulin sensitivity." },
  { icon: "🥗", text: "A low-GI diet rich in fiber helps regulate blood sugar and hormones." },
  { icon: "😴", text: "Quality sleep (7–9 hrs) reduces cortisol and supports cycle regularity." },
  { icon: "🧘‍♀️", text: "Daily mindfulness or meditation helps lower stress-driven androgen spikes." },
  { icon: "💊", text: "Inositol (myo + d-chiro) is one of the most studied supplements for PCOS." },
];

export default function TipCard() {
  const tip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="card">
      <h4>🌿 Today's Tip</h4>
      <span className="tip-icon">{tip.icon}</span>
      <p className="tip-text">{tip.text}</p>
    </div>
  );
}