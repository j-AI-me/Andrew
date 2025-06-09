import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jaime Héctor García González',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} pt-16 bg-white text-gray-900 dark:bg-black dark:text-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
