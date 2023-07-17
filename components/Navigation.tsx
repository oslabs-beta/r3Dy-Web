'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


export default function Navigation() {
  const pathname = usePathname();
  const [dropdown, setDropdown] = useState(false)
  const [subDrop, setSubDrop] = useState(false)
  const [componentDrop, setComponentDrop] = useState(false)

  let dropdownActive: string = 'md:hidden flex flex-col z-20 ease-linear transition-all absolute duration-300 top-0 w-full bg-white border-b overflow-hidden drop-shadow-lg p-2 mt-[60px] ';
  let dropdownInactive: string = 'md:hidden z-20 ease-linear transition-all absolute duration-300 top-0 w-full bg-white px-2 overflow-hidden mt-[60px] max-h-0';

  return (
    <>
      <nav className='md:px-8 z-20 fixed top-0 flex w-full align-middle py-2 px-4 justify-between border border-slate-200 bg-white'>

        {/* LOGO */}
        <Link href='/' className='flex align-middle w-full'>
          <Image width={130} height={32} src='/nav-logo.svg' alt='r3dy-logo-full' />
        </Link>

        {/* DOCS & ABOUT US */}
        <div className='md:flex hidden w-full h-full items-center justify-center'>
          <Link href='/docs' className={(pathname.includes('/docs')) ? 'nav-link-active' : 'nav-link my-0'}> 
            <Image width={24} height={24} src='/book.svg' alt='book-icon' className='mr-4' />
            Docs
          </Link>

          <Link href='/about-us' className={(pathname.includes('/about-us')) ? 'nav-link-active' : 'nav-link'}>
            <Image width={24} height={24} src='/user.svg' alt='person-icon' className='mr-4' />
            About us
          </Link>
        </div>

        <div className='flex w-full h-full justify-end'>
          <button className='p-2 mr-2 bg-white rounded-md hover:bg-slate-200 flex items-center'><Image width={24} height={24} src='/moon.svg' alt='moon-icon' /></button>
          <a href='https://github.com/oslabs-beta/r3Dy' target='_blank' className='p-2 bg-white rounded-md hover:bg-slate-200'><Image width={24} height={24} src='/github.svg' alt='github-icon' /></a>

          {/* MOBILE HAMBURGER */}
          <button className='md:hidden p-2 ml-2 bg-white rounded-md hover:bg-slate-200 flex items-center' onClick={() => { setDropdown(!dropdown) }} ><Image width={24} height={24} src='/menu.svg' alt='menu-icon' /></button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}

      <div className={dropdown ? dropdownActive : dropdownInactive}>
        <button className='bg-white flex align-middle font-medium text-sm my-2 md:my-0 mx-2 px-4 py-2 rounded-md' onClick={() => {
          setSubDrop(!subDrop)
        }}>
          <Image width={24} height={24} src='/book.svg' alt='book-icon' className='mr-4' />
          Docs
          {subDrop ? <Image className="mr-4 justify-self-end ml-auto" width={24} height={24} src='/down.svg' alt='arrow icon' /> : <Image className="mr-4 -rotate-90 justify-self-end	ml-auto" width={24} height={24} src='/down.svg' alt='arrow icon' />}
        </ button>
        {subDrop && (
          <div className='grow ml-6'>
            <Link href='/docs' onClick={() => { setDropdown(false) }} className={(pathname === '/docs') ? 'nav-link-active' : 'nav-link my-0 '}>
              <Image className="mr-4" width={24} height={24} src='/book.svg' alt='book icon' />
              <p> Overview </p>
            </Link >
            <Link href='/docs/install' onClick={() => { setDropdown(false) }} className={(pathname.includes('install')) ? 'nav-link-active' : 'nav-link'}>
              <Image className="mr-4" width={24} height={24} src='/install.svg' alt='install icon' />
              <p> Install </p>
            </Link >
            <button onClick={() => setComponentDrop(!componentDrop)} className='bg-white flex align-middle font-medium text-sm my-2 md:my-0 mx-2 px-4 py-2 rounded-md w-11/12'>
              <Image className="mr-4" width={24} height={24} src='/box.svg' alt='box icon' />
              <p className='w-full text-left'> Components </p>
              {componentDrop ? <Image className="mr-4 " width={24} height={24} src='/down.svg' alt='arrow icon' /> : <Image className="mr-4 -rotate-90" width={24} height={24} src='/down.svg' alt='arrow icon' />}
            </button >
            {componentDrop && (
              <div className='ml-4'>
                <Link href='/docs/components/button' onClick={() => { setDropdown(false) }} className={(pathname.includes('button')) ? 'nav-link-active' : 'nav-link'}>
                  <Image className="mr-4" width={24} height={24} src='/button.svg' alt='button icon' />
                  <p> Button </p>
                </Link >
                <Link href='/docs/components/loader' onClick={() => { setDropdown(false) }} className={(pathname.includes('loader')) ? 'nav-link-active' : 'nav-link'}>
                  <Image className="mr-4" width={24} height={24} src='/loader.svg' alt='loader icon' />
                  <p> Loader </p>
                </Link >
                <Link href='/docs/components/slider' onClick={() => { setDropdown(false) }} className={(pathname.includes('slider')) ? 'nav-link-active' : 'nav-link'}>
                  <Image className="mr-4" width={24} height={24} src='/slider.svg' alt='slider icon' />
                  <p> Slider </p>
                </Link >
                <Link href='/docs/components/switch' onClick={() => { setDropdown(false) }} className={(pathname.includes('switch')) ? 'nav-link-active' : 'nav-link'}>
                  <Image className="mr-4" width={24} height={24} src='/toggle.svg' alt='toggle icon' />
                  <p> Switch </p>
                </Link >
                <Link href='/docs/components/textfield' onClick={() => { setDropdown(false) }} className={(pathname.includes('textfield')) ? 'nav-link-active' : 'nav-link'}>
                  <Image className="mr-4" width={24} height={24} src='/text.svg' alt='text icon' />
                  <p> Text Field </p>
                </Link >
              </div>
            )}
          </div>
        )}

        <Link href='/about-us' className={(pathname.includes('/about-us')) ? 'nav-link-active' : 'nav-link'} onClick={() => setDropdown(false)}>
          <Image width={24} height={24} src='/user.svg' alt='person-icon' className='mr-4' />
          About us
        </Link>
      </div>

    </>
  )
}
