'use client'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Framework from '../components/Framework'
import Ideas from '../components/Ideas'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="space-y-24">
      <Hero />
      <Experience />
      <Projects />
      <Framework />
      <Ideas />
      <Contact />
    </main>
  )
}
