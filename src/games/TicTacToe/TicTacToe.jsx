import React, { useState } from 'react'

const combos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  const winner = getWinner(board)

  function handleClick(i) {
    if (board[i] || winner) return
    const newBoard = [...board]
    newBoard[i] = isX ? "X" : "O"
    setBoard(newBoard)
    setIsX(!isX)
  }

  function reset() {
    setBoard(Array(9).fill(null))
    setIsX(true)
  }

  return (
    <div className="tictactoe">
      <div className="board">
        {board.map((cell, i) => (
          <button key={i} className="cell" onClick={() => handleClick(i)}>{cell}</button>
        ))}
      </div>
      <p>{winner ? `Winner: ${winner}` : `Next: ${isX ? "X" : "O"}`}</p>
      <button onClick={reset} className="btn">Reset</button>
    </div>
  )
}

function getWinner(board) {
  for (let [a,b,c] of combos) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a]
  }
  return null
}
