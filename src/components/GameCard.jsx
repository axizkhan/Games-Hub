import React from 'react'
import { Link } from 'react-router-dom'

export default function GameCard({ title, desc, to }) {
  return (
    <div className="game-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to={to} className="btn">Play</Link>
    </div>
  )
}
