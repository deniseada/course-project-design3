import './Constellations.css'

const constellations = [
  { name: 'Ursa Minor', meaning: 'The Little Bear', file: 'ursaMinor.svg', id: 'ursa-minor' },
  { name: 'Ursa Major', meaning: 'The Great Bear', file: 'UrsaMajor.svg', id: 'ursa-major' },
  { name: 'Cassiopeia', meaning: 'The Queen', file: 'Cassiopeia.svg', id: 'cassiopeia' },
  { name: 'Pegasus', meaning: 'The Winged Horse', file: 'Pegasus.svg', id: 'pegasus' },
  { name: 'Gemini', meaning: 'The Twins', file: 'Gemini.svg', id: 'gemini' },
  { name: 'Andromeda', meaning: 'The Princess', file: 'Andromeda.svg', id: 'andromeda' },
  { name: 'Leo', meaning: 'The Lion', file: 'Leo.svg', id: 'leo' },
  { name: 'Scorpius', meaning: 'The Scorpion', file: 'Scorpius.svg', id: 'scorpius' },
  { name: 'Orion', meaning: 'The Hunter', file: 'Orion.svg', id: 'orion' },
  { name: 'Taurus', meaning: 'The Bull', file: 'taurus.svg', id: 'taurus' }
]

function Constellations() {
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
        <div className="constellations-container">
          {constellations.map((constellation) => (
            <div key={constellation.id} className={`constellation-item ${constellation.id}`}>
              <img 
                src={`/constellations/${constellation.file}`} 
                alt={constellation.name}
                className="constellation-svg"
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Constellations

