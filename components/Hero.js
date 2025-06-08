'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }} className="text-4xl md:text-6xl font-bold mb-4">
        Jaime Héctor García González
      </motion.h1>
      <motion.h2 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }} className="text-xl md:text-2xl font-semibold text-primary mb-2">
        Redesigning systems with intelligence
      </motion.h2>
      <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.2 }} className="max-w-xl">
        AI strategist, systems thinker, narrative architect. Bridging education, technology, and innovation.
      </motion.p>
    </section>
  )
}
