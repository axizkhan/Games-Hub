import React, { useEffect, useState } from 'react'

const GRID = 15
const START = [{x:7, y:7}]

function randPos() {
  return { x: Math.floor(Math.random()*GRID), y: Math.floor(Math.random()*GRID) }
}

export default function SnakeGame() {
  const [snake, setSnake] = useState(START)
  const [dir, setDir] = useState({x:1, y:0})
  const [food, setFood] = useState(randPos)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowUp" && dir.y !== 1) setDir({x:0,y:-1})
      if (e.key === "ArrowDown" && dir.y !== -1) setDir({x:0,y:1})
      if (e.key === "ArrowLeft" && dir.x !== 1) setDir({x:-1,y:0})
      if (e.key === "ArrowRight" && dir.x !== -1) setDir({x:1,y:0})
      if (e.key === " ") setRunning(r => !r)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [dir])

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setSnake(prev => {
        const head = { x: (prev[0].x + dir.x + GRID) % GRID, y: (prev[0].y + dir.y + GRID) % GRID }
        if (prev.some(s => s.x === head.x && s.y === head.y)) return START
        const newSnake = [head, ...prev]
        if (head.x === food.x && head.y === food.y) {
          setFood(randPos())
        } else newSnake.pop()
        return newSnake
      })
    }, 150)
    return () => clearInterval(id)
  }, [dir, food, running])

  return (
    <div>
      <div className="snake-grid" style={{gridTemplateColumns:`repeat(${GRID},1fr)`}}>
        {Array.from({length: GRID*GRID}).map((_, i) => {
          const x = i % GRID, y = Math.floor(i/GRID)
          const isSnake = snake.some(s => s.x===x && s.y===y)
          const isFood = food.x===x && food.y===y
          return <div key={i} className={`cell ${isSnake?'snake':''} ${isFood?'food':''}`}></div>
        })}
      </div>
      <p>Arrow keys to move. Space to pause.</p>
    </div>
  )
}
