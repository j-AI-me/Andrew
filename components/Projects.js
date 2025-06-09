'use client'
import { motion } from 'framer-motion'

const projects = [
  { title: 'RuralGuru app', img: '/projects/ruralguru.png' },
  { title: 'La Casa del Tesoro', img: '/projects/tesoro.png' },
  { title: 'AI wedding game', img: '/projects/wedding.png' },
  { title: 'Narrative trilogy', img: '/projects/trilogy.png' },
  { title: 'Space Station Crew Model', img: '/projects/crew.png' },
]

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once:true }}
          >
            <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded mb-2 flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
