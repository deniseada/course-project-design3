import { useState } from 'react'
import './Constellations.css'
import ConstellationDetail from './ConstellationDetail'

function Constellations({ onBack }) {
  const [selectedConstellation, setSelectedConstellation] = useState(null)

  const handleConstellationClick = (constellationId) => {
    setSelectedConstellation(constellationId)
  }

  if (selectedConstellation) {
    return (
      <ConstellationDetail 
        constellationId={selectedConstellation}
        onBack={() => setSelectedConstellation(null)}
      />
    )
  }

  return (
    <div className="constellations-page">
      <div className="left-column">
        <h1 className="intro-heading">Introduction</h1>
        <p className="intro-text">
          Forged in the heat of ancient stars, we still look upward for guidance, tracing constellations made from the very elements within us.
        </p>
        <p className="intro-text">
          Explore each star as a story is told behind each with meaning.
        </p>
      </div>
      <div className="right-column">
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>
        <div className="shooting-star shooting-star-4"></div>
        <div className="constellations-container">
          <div 
            className="constellation-item ursa-minor"
            onClick={() => handleConstellationClick('ursa-minor')}
          >
            <img 
              src="/constellations/ursaMinor.svg" 
              alt="Ursa Minor"
              className="constellation-svg"
            />
          </div>
          <div 
            className="constellation-item ursa-major"
            onClick={() => handleConstellationClick('ursa-major')}
          >
            <img 
              src="/constellations/UrsaMajor.svg" 
              alt="Ursa Major"
              className="constellation-svg"
            />
          </div>
          <div 
            className="constellation-item cassiopeia"
            onClick={() => handleConstellationClick('cassiopeia')}
          >
            <img 
              src="/constellations/Cassiopeia.svg" 
              alt="Cassiopeia"
              className="constellation-svg"
            />
          </div>
          <div 
            className="constellation-item pegasus"
            onClick={() => handleConstellationClick('pegasus')}
          >
            <img 
              src="/constellations/Pegasus.svg" 
              alt="Pegasus"
              className="constellation-svg"
            />
          </div>
          <div 
            className="constellation-item gemini"
            onClick={() => handleConstellationClick('gemini')}
          >
            <img 
              src="/constellations/Gemini.svg" 
              alt="Gemini"
              className="constellation-svg"
            />
          </div>
          <div 
            className="constellation-item andromeda"
            onClick={() => handleConstellationClick('andromeda')}
          >
            <img 
              src="/constellations/Andromeda.svg" 
              alt="Andromeda"
              className="constellation-svg"
            />
          </div>
          <div 
            className="constellation-item leo"
            onClick={() => handleConstellationClick('leo')}
          >
            <img 
              src="/constellations/Leo.svg" 
              alt="Leo"
              className="constellation-svg"
            />
          </div>
          <div 
            className="constellation-item scorpius"
            onClick={() => handleConstellationClick('scorpius')}
          >
            <img 
              src="/constellations/Scorpius.svg" 
              alt="Scorpius"
              className="constellation-svg"
            />
          </div>
          <div 
            className="constellation-item orion"
            onClick={() => handleConstellationClick('orion')}
          >
            <img 
              src="/constellations/Orion.svg" 
              alt="Orion"
              className="constellation-svg"
            />
          </div>
          <div 
            className="constellation-item taurus"
            onClick={() => handleConstellationClick('taurus')}
          >
            <img 
              src="/constellations/taurus.svg" 
              alt="Taurus"
              className="constellation-svg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Constellations

