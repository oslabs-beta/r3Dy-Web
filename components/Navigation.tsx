'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


export default function Navigation() {
    const pathname = usePathname();
    const [dropdown, setDropdown] = useState(false)
    const [darkMode, setDarkMode] = useState(false);

    let dropdownActive: string = 'dark:darkmode-backround md:hidden z-20 ease-linear transition-all absolute duration-300 top-0 w-full bg-white border-b dark:border-none overflow-hidden drop-shadow-lg p-2 mt-[60px] max-h-32';
    let dropdownInactive: string = 'dark:darkmode-backround md:hidden z-20 ease-linear transition-all absolute duration-300 top-0 w-full bg-white px-2 overflow-hidden mt-[60px] max-h-0';

    const enableDarkMode = () => {
      setDarkMode(!darkMode);
    };

    useEffect(() => {
      const preferDark = window.watchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (preferDark) setDarkMode(true);
    },[]);

    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    },[darkMode]);


    
  return (
    <>
      <nav className='md:px-8 basic-transition z-20 fixed top-0 flex w-full align-middle py-2 px-4 justify-between border border-slate-200 dark:border-slate-700 bg-white dark:darkmode-backround'>

      {/* LOGO */}
      <Link href='/' className='flex align-middle w-full'>
        <Image width={130} height={32} src='/nav-logo.svg' alt='r3dy-logo-full'/>
      </Link>

      {/* DOCS & ABOUT US */}
      <div className='md:flex hidden w-full h-full items-center justify-center'>
        <Link href='/docs' className={(pathname.includes('/docs')) ? 'nav-link-active' : 'nav-link'}> 
          <Image width={24} height={24} src='/book.svg' alt='book-icon' className='mr-4' /> 
          Docs 
        </Link>

        <Link href='/about-us' className={(pathname.includes('/about-us')) ? 'nav-link-active' : 'nav-link'}> 
          <Image width={24} height={24} src='/user.svg' alt='person-icon' className='mr-4'/> 
          About us 
        </Link>
      </div>

      <div className='flex w-full h-full justify-end'>
      <button className='nav-link p-2 mr-2 bg-white rounded-md hover:bg-slate-200 flex items-cent' onClick={enableDarkMode}><Image width={28} height={28} src={ !darkMode ? '/moon.svg' : '/sun.svg'} alt={ !darkMode ? 'moon-icon' : 'sun-icon'}/></button>
      <a href='https://github.com/oslabs-beta/r3Dy' target='_blank' className='nav-link p-2 bg-white rounded-md ease-linear transition duration-150 hover:bg-slate-200'><Image width={24} height={24} src='/github.svg' alt='github-icon'/></a>
      
      {/* MOBILE HAMBURGER */}
      <button className='nav-link md:hidden p-2 ml-2 bg-white rounded-md hover:bg-slate-200 flex items-center' onClick={()=>{setDropdown(!dropdown)}} ><Image width={24} height={24} src='/menu.svg' alt='menu-icon'/></button>
      </div>
    </nav>

        {/* MOBILE DROPDOWN */}
 
    <div className={dropdown ? dropdownActive : dropdownInactive}> 
      <Link href='/docs' className={(pathname.includes('/docs')) ? 'nav-link-active' : 'nav-link'} onClick={() => setDropdown(false)}> 
        <Image width={24} height={24} src='/book.svg' alt='book-icon' className='mr-4' /> 
        Docs 
      </Link>

      <Link href='/about-us' className={(pathname.includes('/about-us')) ? 'nav-link-active' : 'nav-link'} onClick={() => setDropdown(false)}> 
        <Image width={24} height={24} src='/user.svg' alt='person-icon' className='mr-4'/> 
        About us 
      </Link>
    </div>

    </>
  )
}
