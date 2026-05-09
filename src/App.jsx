import { useState } from 'react'
import Flashcard from './components/Flashcard.jsx'
import questions from './data/questions.json'
import './App.css'

function shuffle(items) {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function App() {
  const [deck, setDeck] = useState(questions)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const card = deck[index]

  const prev = () => {
    setDirection('prev')
    setIndex((i) => Math.max(0, i - 1))
  }
  const next = () => {
    setDirection('next')
    setIndex((i) => Math.min(deck.length - 1, i + 1))
  }
  const randomize = () => {
    setDirection('next')
    setDeck(shuffle(deck))
    setIndex(0)
  }

  return (
    <main>
      <h1>Fiszki — magisterka</h1>
      <Flashcard
        key={card.id}
        question={card.question}
        answer={card.answer || '(brak odpowiedzi — uzupełnij w questions.json)'}
        direction={direction}
      />
      <div className="deck-controls">
        <button type="button" onClick={prev} disabled={index === 0}>
          ← Poprzednia
        </button>
        <span className="deck-counter">
          {index + 1} / {deck.length}
        </span>
        <button
          type="button"
          onClick={next}
          disabled={index === deck.length - 1}
        >
          Następna →
        </button>
      </div>
      <button type="button" className="deck-shuffle" onClick={randomize}>
        🔀 Wylosuj kolejność
      </button>
      <footer className="site-footer">
        Bugi / pomysły:{' '}
        <a href="mailto:oldakowskimaciej16@gmail.com?subject=Fiszki%20%E2%80%94%20feedback">
          oldakowskimaciej16@gmail.com
        </a>
      </footer>
    </main>
  )
}

export default App
