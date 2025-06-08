'use client'
import { motion } from 'framer-motion'

const items = [
  { title: 'Microsoft', desc: 'AI for Education, National Initiatives, Channel Strategy' },
  { title: 'RuralGuru', desc: 'Gamified rural tourism' },
  { title: 'Jaleo Rural', desc: 'Nature + landscaping services' },
  { title: 'Fragments of Silence', desc: 'Transmedia universe visionary' },
]

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-center font-semibold">10+ years of high-impact projects — AI meets nature, culture, and storytelling</p>
    </section>
  )
}
