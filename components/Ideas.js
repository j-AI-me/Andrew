'use client'
import { useState } from 'react'

const initialThoughts = [
  'no sé si hay más gente que…',
  'innovating at the intersection of AI and rural life',
]

export default function Ideas() {
  const [thoughts] = useState(initialThoughts)
  return (
    <section id="ideas" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Ideas & Writings</h2>
      <ul className="space-y-2">
        {thoughts.map((t, i) => (
          <li key={i} className="border-b pb-2">{t}</li>
        ))}
      </ul>
    </section>
  )
}
