'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


export default function Navigation() {
    const pathname = usePathname();
    const [dropDown, setDropDown] = useState(false)
  return (
    <>
    {/* MOBILE */}
    <nav className='min-md:hidden z-20 fixed top-0 flex w-full align-middle py-2 px-4 justify-between border border-slate-200 bg-white'>
      <Link href='/' className='flex align-middle'>
        <Image width={176} height={40} src='/nav-logo.svg' alt='r3dy-logo-full'/>
      </Link>
      <div className='flex'>
      <button className='p-2 mr-2 bg-white rounded-md hover:bg-slate-200 flex items-cent'><Image width={32} height={32} src='/moon.svg' alt='moon-icon'/></button>
      <a href='https://github.com/oslabs-beta/r3Dy' target='_blank' className='p-2 mr-2 bg-white rounded-md hover:bg-slate-200'><Image width={32} height={32} src='/github.svg' alt='github-icon'/></a>
      <button className='p-2 mr-2 bg-white rounded-md hover:bg-slate-200 flex items-cent' onClick={()=>{setDropDown(!dropDown)}} ><Image width={32} height={32} src='/menu.svg' alt='menu-icon'/></button>
      {dropDown && (
        <div> 
          {/* Dropdown for mobile */}
          <Link href='/docs'> 
            {/* <Image src = '/nav-logo'/> */}
          </Link>
        </div>
      )}
      </div>
    </nav>


    {/* WEB */}
      <nav className='max-md:hidden z-20 fixed top-0 flex w-full align-middle py-2 px-8 justify-between border border-slate-200 bg-white'>
      <Link href='/' className='flex align-middle'>
        <Image width={176} height={40} src='/nav-logo.svg' alt='r3dy-logo-full'/>
      </Link>
      <div className='flex w-full items-center justify-center'>
        <Link href='/docs' className={(pathname.includes('/docs')) ? 'nav-link-active' : 'nav-link'}> 
          <Image width={24} height={24} src='/book.svg' alt='book-icon' className='mr-4' /> 
          Docs 
        </Link>

        <Link href='/about-us' className={(pathname.includes('/about-us')) ? 'nav-link-active' : 'nav-link'}> 
          <Image width={24} height={24} src='/user.svg' alt='person-icon' className='mr-4'/> 
          About us 
        </Link>

      </div>
      <button className='p-2 mr-2 bg-white rounded-md hover:bg-slate-200 flex items-cent'><Image width={32} height={32} src='/moon.svg' alt='moon-icon'/></button>
      <a href='https://github.com/oslabs-beta/r3Dy' target='_blank' className='p-2 bg-white rounded-md hover:bg-slate-200'><Image width={32} height={32} src='/github.svg' alt='github-icon'/></a>
    </nav>
    </>
  )
}
