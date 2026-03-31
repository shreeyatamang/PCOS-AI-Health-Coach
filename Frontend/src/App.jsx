import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import ChatPage from './pages/ChatPage'

function App() {
  const [page, setPage] = useState('landing') 
  const [transitioning, setTransitioning] = useState(false)

  const goToChat = () => {
    setTransitioning(true)
    setTimeout(() => {
      setPage('chat')
      setTransitioning(false)
    }, 500)
  }

  const goToLanding = () => {
    setTransitioning(true)
    setTimeout(() => {
      setPage('landing')
      setTransitioning(false)
    }, 500)
  }

  return (
    <div className={`app-root ${transitioning ? 'fade-out' : 'fade-in'}`}>
      {page === 'landing'
        ? <LandingPage onEnter={goToChat} />
        : <ChatPage onBack={goToLanding} />
      }
    </div>
  )
}

export default App