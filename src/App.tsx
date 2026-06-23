import { useState, useMemo, useCallback } from 'react'
import questionsData from './data/questions.json'
import type { Question } from './types'
import BlockSelection from './components/BlockSelection'
import Quiz from './components/Quiz'
import './App.css'

const questions = questionsData as Question[]
const PER_BLOCK = 10

function pickRandom(arr: Question[], count: number) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, count)
}

function App() {
  const [selectedBlocks, setSelectedBlocks] = useState<string[] | null>(null)
  const [randomTestQuestions, setRandomTestQuestions] = useState<Question[] | null>(null)

  const questionCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const q of questions) {
      counts[q.block] = (counts[q.block] || 0) + 1
    }
    return counts
  }, [])

  const filteredQuestions = useMemo(() => {
    if (!selectedBlocks) return []
    return questions.filter((q) => selectedBlocks.includes(q.block))
  }, [selectedBlocks])

  const handleRandomTest = useCallback(() => {
    const a = pickRandom(questions.filter((q) => q.block === 'A'), PER_BLOCK)
    const b = pickRandom(questions.filter((q) => q.block === 'B'), PER_BLOCK)
    const c = pickRandom(questions.filter((q) => q.block === 'C'), PER_BLOCK)
    setRandomTestQuestions([...a, ...b, ...c])
  }, [])

  const handleBack = useCallback(() => {
    setSelectedBlocks(null)
    setRandomTestQuestions(null)
  }, [])

  const quizQuestions = randomTestQuestions ?? filteredQuestions

  return (
    <>
      <header className="app-header">
        <h1>ETS — Otázky a odpovede</h1>
        <p className="subtitle">Precvičovanie otázok pre elektrotechnickú spôsobilosť</p>
      </header>
      {!selectedBlocks && !randomTestQuestions ? (
        <BlockSelection
          onSelect={setSelectedBlocks}
          onRandomTest={handleRandomTest}
          questionCounts={questionCounts}
        />
      ) : (
        <Quiz questions={quizQuestions} onBack={handleBack} />
      )}
    </>
  )
}

export default App
