'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const tagline = 'AI strategist, systems thinker, narrative architect. Bridging education, technology, and innovation.'

export default function Hero() {
  const [text, setText] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(tagline.slice(0, i))
      i++
      if (i > tagline.length) clearInterval(interval)
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }} className="text-4xl md:text-6xl font-bold mb-4">
        Jaime Héctor García González
      </motion.h1>
      <motion.h2 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }} className="text-xl md:text-2xl font-semibold text-primary mb-2">
        Redesigning systems with intelligence
      </motion.h2>
      <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.2 }} className="max-w-xl min-h-[4rem]">
        {text}
      </motion.p>
    </section>
  )
}
