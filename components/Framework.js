'use client'
import { motion } from 'framer-motion'

const roles = [
  { title: 'Captain', desc: 'Leader' },
  { title: 'AI bot', desc: 'Assistant' },
  { title: 'Mission Ops', desc: 'Execution' },
  { title: 'Community Linker', desc: 'Partners' },
  { title: 'Doctor', desc: 'Team health' },
]

export default function Framework() {
  return (
    <section id="frameworks" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Team Framework</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {roles.map((r, i) => (
          <motion.div key={i} initial={{ scale:0.8, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }} className="w-40 h-40 bg-gray-100 dark:bg-gray-800 rounded-full flex flex-col items-center justify-center text-center p-4">
            <span className="font-semibold mb-1">{r.title}</span>
            <span className="text-sm text-gray-500">{r.desc}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
