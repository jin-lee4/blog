import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'blawg',
  description: 'developed by jin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href='/'>
          <h1>jins blog</h1>
          </Link>
        <h1 className='text-3x1 font-bold text-white'> 
          jin's blawg</h1>
        <p className='text-slate-300'>welcome to my little corner of the world</p>
      </div>
    </header>
  ); 

  const footer = (
    <footer>
      <div className='border-t border-slate-400 mt-6 py-6 text-center text-slate-400'>
        <h3>developed by jin</h3>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <head />
      <body>
        <div className='mx-auto max-w-2xl font-sans'>
        {header}
        {children}
        {footer}
        </div>
        </body>
    </html>
  )
}