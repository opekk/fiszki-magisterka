import { useState } from 'react'
import './Flashcard.css'

function Flashcard({ question, answer, direction = 'next' }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      className={`flashcard flashcard-enter-${direction} ${flipped ? 'is-flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
    >
      <div className="flashcard-inner">
        <div className="flashcard-face flashcard-front">{question}</div>
        <div className="flashcard-face flashcard-back">{answer}</div>
      </div>
    </button>
  )
}

export default Flashcard
