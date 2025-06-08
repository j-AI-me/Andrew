'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  return (
    <section id="contact" className="container mx-auto px-4 pb-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <form onSubmit={(e)=>{e.preventDefault();setStatus('Thanks!')}} className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4" required />
        <button type="submit" className="w-full bg-primary text-white p-2 rounded">Send</button>
      </form>
      {status && <p className="text-center mt-4">{status}</p>}
      <div className="flex justify-center mt-4 space-x-4">
        <a href="mailto:example@example.com" className="underline">Email</a>
        <a href="https://www.linkedin.com" className="underline">LinkedIn</a>
      </div>
    </section>
  )
}
