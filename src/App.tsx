import { useState, useMemo } from 'react'
import questionsData from './data/questions.json'
import type { Question } from './types'
import BlockSelection from './components/BlockSelection'
import Quiz from './components/Quiz'
import './App.css'

const questions = questionsData as Question[]

function App() {
  const [selectedBlocks, setSelectedBlocks] = useState<string[] | null>(null)

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

  return (
    <>
      <header className="app-header">
        <h1>ETS — Otázky a odpovede</h1>
        <p className="subtitle">Precvičovanie otázok pre elektrotechnickú spôsobilosť</p>
      </header>
      {!selectedBlocks ? (
        <BlockSelection onSelect={setSelectedBlocks} questionCounts={questionCounts} />
      ) : (
        <Quiz questions={filteredQuestions} onBack={() => setSelectedBlocks(null)} />
      )}
    </>
  )
}

export default App
