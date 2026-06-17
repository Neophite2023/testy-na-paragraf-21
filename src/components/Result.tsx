import type { Answer, Question } from '../types'

interface ResultProps {
  total: number
  correct: number
  results: Answer[]
  questions: Question[]
  onRestart: () => void
}

export default function Result({ total, correct, results, questions, onRestart }: ResultProps) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0

  let grade = ''
  let gradeClass = ''
  if (pct >= 90) { grade = 'Výborný'; gradeClass = 'grade-a' }
  else if (pct >= 75) { grade = 'Dobrý'; gradeClass = 'grade-b' }
  else if (pct >= 60) { grade = 'Dostatočný'; gradeClass = 'grade-c' }
  else { grade = 'Nedostatočný'; gradeClass = 'grade-d' }

  return (
    <div className="result">
      <h1>Výsledok</h1>

      <div className={`result-score ${gradeClass}`}>
        <span className="result-pct">{pct}%</span>
        <span className="result-label">{grade}</span>
        <span className="result-detail">{correct} / {total} správne</span>
      </div>

      <div className="result-breakdown">
        <h2>Prehľad otázok</h2>
        {questions.map((q, i) => {
          const r = results[i]
          return (
            <div key={q.id} className={`result-item ${r.isCorrect ? 'item-correct' : 'item-wrong'}`}>
              <div className="result-item-header">
                <span className="badge">Blok {q.block} #{q.number}</span>
                <span className={`result-mark ${r.isCorrect ? 'mark-correct' : 'mark-wrong'}`}>
                  {r.isCorrect ? '✓' : '✗'}
                </span>
              </div>
              <p className="result-question">{q.question}</p>
              {!r.isCorrect && (
                <div className="result-answers">
                  {r.selected && <p>Tvoja odpoveď: <strong>{r.selected.toUpperCase()}</strong></p>}
                  <p>Správna odpoveď: <strong>{r.correct.toUpperCase()}</strong></p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <button className="btn btn-primary btn-large" onClick={onRestart}>
        Skúsiť znova
      </button>
    </div>
  )
}
