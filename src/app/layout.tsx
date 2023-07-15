import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Canvas } from './components/exports';
import LogoLoader from './components/LogoLoader.tsx';
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
        <nav className='z-10 fixed top-0 flex w-full align-middle py-2 px-8 justify-between border border-slate-200 bg-white'>
          <Link href='/' className='flex align-middle'>
            <div className="flex w-16 h-14 mb-1">
            <Canvas> <LogoLoader/> </Canvas>
            </div>
            <Image width={176} height={40} src='./text-logo.svg' alt='r3dy-logo-full'/>
          </Link>
          <div className='flex w-full items-center justify-center'>

            <Link href='/docs' className='bg-white flex align-middle font-medium text-sm px-4 py-2 rounded-md ease-linear transition duration-150 hover:bg-[#E3E7FC] hover:text-indigo-700 active:text-indigo-700'> 
            <Image width={24} height={24} src='./book.svg' alt='book-icon' className='mr-4' /> Docs </Link>

            <Link href='/about-us' className='bg-white flex align-middle font-medium text-sm px-4 py-2 rounded-md ease-linear transition duration-150 hover:bg-[#E3E7FC] hover:text-indigo-700 active:text-indigo-700'> <Image width={24} height={24} src='./user.svg' alt='person-icon' className='mr-4'/> About us </Link>

          </div>
          <button className='p-2 mr-2 bg-white rounded-md hover:bg-slate-200 flex items-cent'><Image width={32} height={32} src='./moon.svg' alt='moon-icon'/></button>
          <a href='https://github.com/oslabs-beta/r3Dy' target='_blank' className='p-2 bg-white rounded-md hover:bg-slate-200'><Image width={32} height={32} src='./github.svg' alt='github-icon'/></a>
        </nav>
          {children}
      </body>
    </html>
  )
}
