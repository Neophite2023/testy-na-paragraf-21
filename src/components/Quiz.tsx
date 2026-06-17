import { useState, useCallback, useMemo } from 'react'
import type { Question, Answer } from '../types'
import QuestionCard from './QuestionCard'
import ProgressBar from './ProgressBar'
import Result from './Result'

interface QuizProps {
  questions: Question[]
  onBack: () => void
}

export default function Quiz({ questions, onBack }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [finished, setFinished] = useState(false)

  const shuffled = useMemo(() => {
    const arr = [...questions]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }, [questions])

  const current = shuffled[currentIndex]
  const selected = answers[current?.id] ?? null

  const handleSelect = useCallback((answer: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: answer }))
  }, [current?.id])

  const goNext = useCallback(() => {
    if (currentIndex < shuffled.length - 1) {
      setCurrentIndex((i) => i + 1)
    } else {
      setFinished(true)
    }
  }, [currentIndex, shuffled.length])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1)
    }
  }, [currentIndex])

  const answered = Object.keys(answers).length

  const results: Answer[] = shuffled.map((q) => ({
    questionId: q.id,
    selected: answers[q.id] || '',
    correct: q.correct,
    isCorrect: answers[q.id] ? answers[q.id].split('').every((a) => q.correct.includes(a)) : false,
  }))
  const correctCount = results.filter((r) => r.isCorrect).length

  if (finished) {
    return (
      <Result
        total={shuffled.length}
        correct={correctCount}
        results={results}
        questions={shuffled}
        onRestart={onBack}
      />
    )
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <button className="btn-back" onClick={onBack}>← Späť</button>
        <ProgressBar current={answered} total={shuffled.length} />
      </div>

      <QuestionCard
        question={current}
        selected={selected}
        showResult={selected != null}
        onSelect={handleSelect}
      />

      <div className="quiz-nav">
        <button className="btn" onClick={goPrev} disabled={currentIndex === 0}>
          ← Predchádzajúca
        </button>
        <span className="quiz-counter">
          {currentIndex + 1} / {shuffled.length}
        </span>
        <button
          className="btn btn-primary"
          onClick={goNext}
          disabled={!selected}
        >
          {currentIndex < shuffled.length - 1 ? 'Ďalšia →' : 'Dokončiť →'}
        </button>
      </div>
    </div>
  )
}
