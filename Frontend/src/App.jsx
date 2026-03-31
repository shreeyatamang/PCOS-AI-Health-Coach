import { useState } from 'react'
import './App.css'
import ChatWindow from './components/chat/ChatWindow'
import Sidebar from './components/sidebar/sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [chatKey, setChatKey] = useState(0)

  const handleNewChat = () => {
    setChatKey(k => k + 1)
  }

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
          <button className="new-chat-btn" onClick={handleNewChat}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            New Chat
          </button>
          <div className="header-badge">Powered by RAG + AI</div>
        </div>
      </header>

      <div className="app-body">
        {/* Mobile overlay — only render when sidebar open AND on mobile */}
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

export default App