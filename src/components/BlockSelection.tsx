interface BlockSelectionProps {
  onSelect: (blocks: string[]) => void
  questionCounts: Record<string, number>
}

const BLOCKS = [
  { key: 'A', title: 'Prvá pomoc pri úraze elektrickým prúdom' },
  { key: 'B', title: 'Bezpečná práca na elektrických zariadeniach' },
  { key: 'C', title: 'Siete, ochrany, napäťové pásma' },
]

export default function BlockSelection({ onSelect, questionCounts }: BlockSelectionProps) {
  const handleAll = () => onSelect(['A', 'B', 'C'])

  return (
    <div className="block-selection">
      <p className="section-label">Vyber blok otázok</p>

      <div className="block-cards">
        {BLOCKS.map((block) => (
          <button
            key={block.key}
            className="block-card"
            onClick={() => onSelect([block.key])}
          >
            <span className={`block-letter ${block.key.toLowerCase()}`}>{block.key}</span>
            <div className="block-info">
              <h3>{block.title}</h3>
              <span className="block-count">{questionCounts[block.key] || 0} otázok</span>
            </div>
          </button>
        ))}
      </div>

      <button className="btn btn-primary btn-large" onClick={handleAll}>
        Všetky bloky ({Object.values(questionCounts).reduce((a, b) => a + b, 0)} otázok)
      </button>
    </div>
  )
}
