import { useState } from 'react'
import ChatWindow from '../components/chat/ChatWindow'
import Sidebar from '../components/sidebar/sidebar'

export default function ChatPage({ onBack }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [chatKey, setChatKey] = useState(0)

  return (
    <div className="app-shell">
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />

      {/* Header */}
      <header className="app-header">
        <div className="header-left">
          <button
            className={`menu-btn ${sidebarOpen ? 'active' : ''}`}
            onClick={() => setSidebarOpen(o => !o)}
            aria-label="Toggle sidebar"
          >
            <span /><span /><span />
          </button>
          <div className="logo">
            <span className="logo-icon">✿</span>
            <span className="logo-text">Maya</span>
            <span className="logo-sub">PCOS Coach</span>
          </div>
        </div>

        <div className="header-right">
          <button className="back-btn" onClick={onBack}>
            ← Home
          </button>
          <button className="new-chat-btn" onClick={() => setChatKey(k => k + 1)}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            New Chat
          </button>
          <div className="header-badge">RAG + AI</div>
        </div>
      </header>

      <div className="app-body">
        <div
          className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
          onClick={() => setSidebarOpen(false)}
        />

        <aside className={`sidebar-wrapper ${sidebarOpen ? 'open' : 'closed'}`}>
          <Sidebar onAsk={(q) => {
            if (window.innerWidth < 768) setSidebarOpen(false)
            window.dispatchEvent(new CustomEvent('quick-ask', { detail: q }))
          }} />
        </aside>

        <main className="main-content">
          <ChatWindow key={chatKey} />
        </main>
      </div>
    </div>
  )
}