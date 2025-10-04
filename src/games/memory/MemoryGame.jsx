import React, { useState, useEffect } from 'react'

const icons = ['🍎','🍌','🍇','🍒','🥝','🍍']

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5)
}

export default function MemoryGame() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])

  useEffect(() => {
    setCards(shuffle([...icons, ...icons]))
  }, [])

  function flipCard(i) {
    if (flipped.includes(i) || matched.includes(i)) return
    const newFlipped = [...flipped, i]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      const [a, b] = newFlipped
      if (cards[a] === cards[b]) {
        setMatched([...matched, a, b])
      }
      setTimeout(() => setFlipped([]), 800)
    }
  }

  function reset() {
    setCards(shuffle([...icons, ...icons]))
    setFlipped([])
    setMatched([])
  }

  return (
    <div className="memory">
      <div className="memory-grid">
        {cards.map((card, i) => {
          const isShown = flipped.includes(i) || matched.includes(i)
          return (
            <button key={i} className="memory-card" onClick={() => flipCard(i)}>
              {isShown ? card : "❓"}
            </button>
          )
        })}
      </div>
      <button onClick={reset} className="btn">Reset</button>
    </div>
  )
}
