import { useState } from 'react'
import './App.css'
import Constellations from './Constellations'

function App() {
  const [showConstellations, setShowConstellations] = useState(false)

  if (showConstellations) {
    return <Constellations />
  }

  return (
    <div className="cosmic-container">
      <div className="stars"></div>
      <div className="content">
        <p className="cosmic-text">
          We are made of the same elements forged in<br />
          collapsing stars — iron, oxygen, carbon. The<br />
          universe isn't above us; it's within us.
        </p>
        <button 
          className="start-button"
          onClick={() => setShowConstellations(true)}
        >
          Start
        </button>
      </div>
    </div>
  )
}

export default App
