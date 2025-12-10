import { useState, useEffect } from 'react'
import './ConstellationDetail.css'

const constellationData = {
  'ursa-minor': {
    name: 'Ursa Minor',
    meaning: 'The Little Bear',
    file: 'usraminor.svg',
    description: 'The guardian of the north, guiding travelers through darkness with its unwavering light.'
  },
  'ursa-major': {
    name: 'Ursa Major',
    meaning: 'The Great Bear',
    file: 'greatBear.svg',
    description: 'A celestial guide, its seven stars forming the Big Dipper, a beacon of direction and hope.'
  },
  'cassiopeia': {
    name: 'Cassiopeia',
    meaning: 'The Queen',
    file: 'castopia.svg',
    description: 'The vain queen of the heavens, forever bound to her throne, a reminder of hubris and consequence.'
  },
  'pegasus': {
    name: 'Pegasus',
    meaning: 'The Winged Horse',
    file: 'Pegasus.svg',
    description: 'Born from Medusa\'s blood, symbol of inspiration and flight, carrying dreams across the cosmos.'
  },
  'gemini': {
    name: 'Gemini',
    meaning: 'The Twins',
    file: 'gemini.svg',
    description: 'The celestial twins, Castor and Pollux, bound by brotherhood and the eternal dance of duality.'
  },
  'andromeda': {
    name: 'Andromeda',
    meaning: 'The Princess',
    file: 'andromeda.svg',
    description: 'The chained princess, saved by Perseus, a constellation of sacrifice and liberation.'
  },
  'leo': {
    name: 'Leo',
    meaning: 'The Lion',
    file: 'Leo.svg',
    description: 'The mighty lion of the zodiac, symbol of courage, strength, and the fire within.'
  },
  'scorpius': {
    name: 'Scorpius',
    meaning: 'The Scorpion',
    file: 'scorpio.svg',
    description: 'The deadly scorpion that felled Orion, a reminder of nature\'s power and the cycle of life.'
  },
  'orion': {
    name: 'Orion',
    meaning: 'The Hunter',
    file: 'orion.svg',
    description: 'The great hunter, forever pursuing the Pleiades, a constellation of ambition and eternal quest.'
  },
  'taurus': {
    name: 'Taurus',
    meaning: 'The Bull',
    file: 'taurus.svg',
    description: 'The celestial bull, symbol of fertility and strength, charging through the starry fields.'
  }
}

function ConstellationDetail({ constellationId, onBack }) {
  const [constellation, setConstellation] = useState(null)

  useEffect(() => {
    if (constellationId && constellationData[constellationId]) {
      setConstellation(constellationData[constellationId])
    }
  }, [constellationId])

  if (!constellation) {
    return null
  }

  return (
    <div className="detail-page">
      <div className="detail-content">
        <div className="corner-triangle">
          <button className="back-button" onClick={onBack}>
            ×
          </button>
        </div>
        <div className="detail-left">
          <div className="card-container">
            <img 
              src="/cards/Card.png" 
              alt="Card"
              className="card-image"
            />
          </div>
        </div>
        <div className="detail-right">
          <div className="detail-constellation">
            <img 
              src={`/cards/${constellation.file}`}
              alt={constellation.name}
              className="detail-constellation-svg"
            />
          </div>
          <div className="detail-text">
            <h1 className="detail-name">{constellation.name}</h1>
            <p className="detail-meaning">({constellation.meaning})</p>
            <p className="detail-description">{constellation.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConstellationDetail
