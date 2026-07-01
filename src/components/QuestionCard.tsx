import type { Question } from '../types'

interface QuestionCardProps {
  question: Question
  selected: string | null
  showResult: boolean
  onSelect: (answer: string) => void
}

const optionLabels = ['a', 'b', 'c', 'd', 'e', 'f']

function resolveImageSrc(image: string) {
  if (/^(https?:)?\/\//.test(image) || image.startsWith('data:') || image.startsWith('blob:')) {
    return image
  }

  const baseUrl = import.meta.env.BASE_URL
  if (image.startsWith('/')) {
    return `${baseUrl.replace(/\/$/, '')}${image}`
  }

  return `${baseUrl}${image}`
}

export default function QuestionCard({ question, selected, showResult, onSelect }: QuestionCardProps) {
  return (
    <div className="question-card">
      <div className="question-meta">
        <span className="badge">Blok {question.block}</span>
        <span className="badge badge-secondary">Otázka {question.number}</span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      {question.image && (
        <div className="question-image-wrap">
          <img
            className="question-image"
            src={resolveImageSrc(question.image)}
            alt={question.imageAlt ?? ''}
          />
        </div>
      )}

      <div className="options">
        {optionLabels.map((key) => {
          if (!(key in question.options)) return null
          const isSelected = selected === key
          const isCorrect = question.correct.includes(key)

          let className = 'option'
          if (isSelected && !showResult) className += ' selected'
          if (showResult && isCorrect) className += ' correct'
          if (showResult && isSelected && !isCorrect) className += ' wrong'

          return (
            <button
              key={key}
              className={className}
              onClick={() => !showResult && onSelect(key)}
              disabled={showResult}
            >
              <span className="option-key">{key.toUpperCase()}</span>
              <span className="option-text">{question.options[key]}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
