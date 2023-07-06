import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'R3DY UI',
  description: 'Interactive 3D React Components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='flex w-full py-3 px-8 justify-between'>
          <Link href='/'>
            <Image width={176} height={40} src='./nav-logo.svg' alt='r3dy-logo-full'/>
          </Link>
          <div className='flex w-full items-center justify-center'>
            <Link href='/docs' className='flex'> <Image width={24} height={24} src='./book.svg' alt='book-icon' className='mr-2' /> Docs </Link>
            <Link href='/about-us' className='flex'> <Image width={24} height={24} src='./user.svg' alt='person-icon' className='mr-2'/> About us </Link>
          </div>
          <button className='px-2 py-2'><Image width={32} height={32} src='./moon.svg' alt='moon-icon'/></button>
          <a href='https://github.com/oslabs-beta/r3Dy' target='_blank' className='px-2 py-2'><Image width={32} height={32} src='./github.svg' alt='github-icon'/></a>
        </nav>
          {children}
      </body>
    </html>
  )
}
