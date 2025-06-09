'use client'
import DarkModeToggle from './DarkModeToggle'

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#frameworks', label: 'Frameworks' },
  { href: '#ideas', label: 'Ideas' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur bg-white/70 dark:bg-black/70 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <span className="font-bold">Jaime HGG</span>
        <nav className="space-x-4 hidden md:block">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </a>
          ))}
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  )
}
