'use client'
import { useState } from 'react'

const initialThoughts = [
  'no sé si hay más gente que…',
  'innovating at the intersection of AI and rural life',
]

export default function Ideas() {
  const [thoughts, setThoughts] = useState(initialThoughts)
  const [value, setValue] = useState('')

  const addThought = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    setThoughts([value.trim(), ...thoughts])
    setValue('')
  }

  return (
    <section id="ideas" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Ideas & Writings</h2>
      <form onSubmit={addThought} className="flex mb-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Share a thought..."
          className="flex-1 p-2 border rounded-l"
        />
        <button className="bg-primary text-white px-4 rounded-r">Post</button>
      </form>
      <ul className="space-y-2">
        {thoughts.map((t, i) => (
          <li key={i} className="border-b pb-2">{t}</li>
        ))}
      </ul>
    </section>
  )
}
