import { useState, useEffect } from 'react'
import './ConstellationDetail.css'

const constellationData = {
  'ursa-minor': {
    name: 'Ursa Minor',
    meaning: 'The Little Bear',
    file: 'usraminor.svg',
    cardImage: 'little bear.png',
    description: 'The guardian of the north, guiding travelers through darkness with its unwavering light.',
    quote: 'In the darkest night, find your guiding light.',
    funFact: 'Ursa Minor contains Polaris, the North Star, which has been used for navigation for thousands of years and remains almost perfectly aligned with Earth\'s rotational axis.'
  },
  'ursa-major': {
    name: 'Ursa Major',
    meaning: 'The Great Bear',
    file: 'greatBear.svg',
    cardImage: 'greatbear.png',
    description: 'A celestial guide, its seven stars forming the Big Dipper, a beacon of direction and hope.',
    quote: 'Follow the stars that lead you home.',
    funFact: 'The Big Dipper is not actually a constellation itself, but an asterism within Ursa Major. Its seven stars have been used for navigation and storytelling across countless cultures throughout history.'
  },
  'cassiopeia': {
    name: 'Cassiopeia',
    meaning: 'The Queen',
    file: 'castopia.svg',
    cardImage: 'Cassopia.png',
    description: 'The vain queen of the heavens, forever bound to her throne, a reminder of hubris and consequence.',
    quote: 'Pride may crown you, but humility sustains you.',
    funFact: 'Cassiopeia is easily recognizable by its distinctive W or M shape. In Greek mythology, she was punished for her vanity by being placed in the sky, where she must spend half her time upside down.'
  },
  'pegasus': {
    name: 'Pegasus',
    meaning: 'The Winged Horse',
    file: 'Pegasus.svg',
    cardImage: 'pegasus.png',
    description: 'Born from Medusa\'s blood, symbol of inspiration and flight, carrying dreams across the cosmos.',
    quote: 'Let imagination give you wings beyond reason.',
    funFact: 'Pegasus wasn\'t just a flying horse, he was born from the blood of Medusa when Perseus slayed her, and later became the loyal companion of heroes, even creating magical springs with a single stomp of his hoof.'
  },
  'gemini': {
    name: 'Gemini',
    meaning: 'The Twins',
    file: 'gemini.svg',
    cardImage: 'Gemini.png',
    description: 'The celestial twins, Castor and Pollux, bound by brotherhood and the eternal dance of duality.',
    quote: 'In unity, we find our greatest strength.',
    funFact: 'The two brightest stars in Gemini are named Castor and Pollux after the twin brothers from Greek mythology. Castor was mortal while Pollux was immortal, and they were so close that Zeus placed them together in the sky.'
  },
  'andromeda': {
    name: 'Andromeda',
    meaning: 'The Princess',
    file: 'andromeda.svg',
    cardImage: 'Andromedant.png',
    description: 'The chained princess, saved by Perseus, a constellation of sacrifice and liberation.',
    quote: 'From chains to freedom, hope always finds a way.',
    funFact: 'Andromeda is home to the Andromeda Galaxy, the nearest major galaxy to our Milky Way, visible to the naked eye on clear nights. It contains over a trillion stars and is on a collision course with our galaxy.'
  },
  'leo': {
    name: 'Leo',
    meaning: 'The Lion',
    file: 'Leo.svg',
    cardImage: 'leo.png',
    description: 'The mighty lion of the zodiac, symbol of courage, strength, and the fire within.',
    quote: 'Roar with the courage that defines you.',
    funFact: 'Leo contains Regulus, one of the brightest stars in the night sky, known as the "Heart of the Lion." In ancient times, the appearance of Leo in the sky marked the beginning of the hot summer months.'
  },
  'scorpius': {
    name: 'Scorpius',
    meaning: 'The Scorpion',
    file: 'scorpio.svg',
    cardImage: 'scorpious.png',
    description: 'The deadly scorpion that felled Orion, a reminder of nature\'s power and the cycle of life.',
    quote: 'Even the smallest can bring down the mightiest.',
    funFact: 'Scorpius contains Antares, a red supergiant star that is one of the largest known stars. If placed at the center of our solar system, it would extend beyond the orbit of Mars.'
  },
  'orion': {
    name: 'Orion',
    meaning: 'The Hunter',
    file: 'orion.svg',
    cardImage: 'orion.png',
    description: 'The great hunter, forever pursuing the Pleiades, a constellation of ambition and eternal quest.',
    quote: 'Hunt not for what you need, but for what you dream.',
    funFact: 'Orion\'s Belt, three bright stars in a row, is one of the most recognizable asterisms in the night sky. The constellation also contains the Orion Nebula, a stellar nursery where new stars are being born.'
  },
  'taurus': {
    name: 'Taurus',
    meaning: 'The Bull',
    file: 'taurus.svg',
    cardImage: 'Taurus.png',
    description: 'The celestial bull, symbol of fertility and strength, charging through the starry fields.',
    quote: 'Charge forward with unwavering determination.',
    funFact: 'Taurus contains the Pleiades star cluster, also known as the Seven Sisters, which has been observed and celebrated by cultures worldwide. The cluster is actually made up of hundreds of stars, though only six or seven are visible to the naked eye.'
  }
}

function ConstellationDetail({ constellationId, onBack }) {
  const [constellation, setConstellation] = useState(null)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    if (constellationId && constellationData[constellationId]) {
      setConstellation(constellationData[constellationId])
      setIsFlipped(false)
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
          <div 
            className={`card-container ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className="card-front">
              <img 
                src="/cards/Card.png" 
                alt="Card"
                className="card-image"
              />
            </div>
            <div className="card-back">
              <img 
                src={`/cards/${constellation.cardImage}`}
                alt={`${constellation.name} Card`}
                className="card-image"
              />
            </div>
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
