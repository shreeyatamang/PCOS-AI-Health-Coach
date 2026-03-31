export default function LandingPage({ onEnter }) {
  return (
    <div className="landing">

      {/* ── Decorative blobs ── */}
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <div className="blob b4" />

      {/* ── Nav ── */}
      <nav className="landing-nav">
        <div className="nav-logo">
          <span className="nav-flower">✿</span>
          <span className="nav-name">Maya</span>
          <span className="nav-tag">PCOS Coach</span>
        </div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#disclaimer">Disclaimer</a></li>
        </ul>
        <button className="nav-cta" onClick={onEnter}>Start Chatting →</button>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-badge">✦ AI-Powered · RAG · Llama 3.3</div>

        <h1 className="hero-title">
          Your personal<br />
          <em>PCOS health</em><br />
          companion
        </h1>

        <p className="hero-sub">
          Ask Maya anything — diet, hormones, workouts, stress.<br />
          Get warm, evidence-based answers in seconds.
        </p>

        <button className="hero-cta" onClick={onEnter}>
          <span className="cta-flower">🌸</span>
          Meet Maya, Your AI Health Coach
          <span className="cta-arrow">→</span>
        </button>

        <p className="hero-note">Free · No sign-up · Powered by medical research</p>

        {/* Floating cards */}
        <div className="float-cards">
          <div className="fcard fc1">
            <span>🥗</span>
            <p>"What should I eat today?"</p>
          </div>
          <div className="fcard fc2">
            <span>🩺</span>
            <p>"Why is my period late?"</p>
          </div>
          <div className="fcard fc3">
            <span>💪</span>
            <p>"Best workouts for PCOS?"</p>
          </div>
          <div className="fcard fc4">
            <span>🧘‍♀️</span>
            <p>"How do I manage stress?"</p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features" id="features">
        <div className="section-label">✦ What Maya Can Do</div>
        <h2 className="section-title">Everything you need to manage PCOS</h2>

        <div className="features-grid">
          {[
            { icon: "🥗", title: "Diet Guidance", desc: "Low-GI meal plans, foods to avoid, anti-inflammatory eating tailored for PCOS." },
            { icon: "🏃‍♀️", title: "Exercise Plans", desc: "Workouts that lower insulin resistance without spiking cortisol." },
            { icon: "🌙", title: "Hormone Support", desc: "Understand your cycle, androgen levels, and what's driving your symptoms." },
            { icon: "🧘‍♀️", title: "Stress & Sleep", desc: "Cortisol management, sleep hygiene, and mindfulness practices for PCOS." },
            { icon: "💊", title: "Supplement Info", desc: "Evidence-based info on inositol, magnesium, spearmint, and more." },
            { icon: "📚", title: "RAG-Powered", desc: "Answers backed by Mayo Clinic, NHS, and peer-reviewed PCOS research." },
          ].map((f, i) => (
            <div className="feat-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="feat-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="how" id="how">
        <div className="section-label">✦ Under the Hood</div>
        <h2 className="section-title">How Maya gives you real answers</h2>

        <div className="steps">
          {[
            { n: "01", title: "You ask a question", desc: "Type anything about PCOS — symptoms, food, exercise, hormones." },
            { n: "02", title: "RAG retrieves context", desc: "FAISS vector search finds the most relevant chunks from the PCOS knowledge base." },
            { n: "03", title: "Llama 3.3 responds", desc: "Groq's Llama 3.3 70B model crafts a warm, accurate, concise answer." },
            { n: "04", title: "You feel supported", desc: "No jargon, no judgement. Just clear guidance you can actually use." },
          ].map((s, i) => (
            <div className="step" key={i}>
              <div className="step-num">{s.n}</div>
              <div className="step-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="banner-flower">🌸</div>
        <h2>Ready to take control of your PCOS?</h2>
        <p>Maya is here — free, instant, and always empathetic.</p>
        <button className="hero-cta" onClick={onEnter}>
          <span className="cta-flower">✿</span>
          Start Your Conversation
          <span className="cta-arrow">→</span>
        </button>
      </section>

      {/* ── Footer ── */}
      <footer className="landing-footer" id="disclaimer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="nav-flower">✿</span>
            <span className="nav-name">Maya</span>
            <p>An AI health coach for women with PCOS. Built with care and research.</p>
          </div>

          <div className="footer-col">
            <h4>Sources</h4>
            <ul>
              <li><a href="https://www.mayoclinic.org" target="_blank">Mayo Clinic</a></li>
              <li><a href="https://www.nhs.uk" target="_blank">NHS UK</a></li>
              <li><a href="https://my.clevelandclinic.org" target="_blank">Cleveland Clinic</a></li>
              <li>Peer-reviewed research</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Coming Soon</h4>
            <ul>
              <li>Symptom tracker</li>
              <li>Period calendar</li>
              <li>Multi-language support</li>
              <li>Mobile app</li>
            </ul>
          </div>

          <div className="footer-col disclaimer-col">
            <h4>⚠️ Disclaimer</h4>
            <p>Maya is for <strong>educational purposes only</strong> and does not replace professional medical advice. Always consult a qualified healthcare provider for medical decisions.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Made with 💗 to support women with PCOS 🌸</p>
        </div>
      </footer>

    </div>
  )
}