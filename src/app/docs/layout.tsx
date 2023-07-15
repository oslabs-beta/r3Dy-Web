"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function DocsLayout({
  children,
}:{
  children: React.ReactNode
}) 
{
  const [dropdown, setDropdown] = useState(false);
  return (
    <section className="flex">
      <nav className="fixed w-[250px] h-screen flex px-4 py-10 flex-column border-x border-slate-200 bg-white">
          <div className='grow'>
              <div className="py-2 px-4 rounded-md bg-slate-100 mb-8 max-w-[150px] text-sm">R3DY v1.0</div>
                  <Link href='/docs' className="doc-link">
                      <Image className="mr-4" width={24} height={24} src='/book.svg' alt='book icon' /> 
                      <p> Overview </p>
                  </Link >
                  <Link href='/docs/install' className="doc-link">
                      <Image className="mr-4" width={24} height={24} src='/install.svg' alt='install icon' />
                      <p> Install </p>
                  </Link >
                  <button onClick={() => setDropdown(!dropdown)} className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow w-full rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                      <Image className="mr-4" width={24} height={24} src='/box.svg' alt='box icon' />
                      <p className='w-full text-left'> Components </p>
                      {dropdown ? <Image className="mr-4 " width={24} height={24} src='/down.svg' alt='arrow icon' /> : <Image className="mr-4 -rotate-90" width={24} height={24} src='/down.svg' alt='arrow icon' />}
                  </button >
                    {dropdown && (
                    <div className='pl-4'>
                          <Link href='/docs/components/button' className="doc-link">
                            <Image className="mr-4" width={24} height={24} src='/button.svg' alt='button icon' />
                            <p> Button </p>
                          </Link >
                          <Link href='/docs/components/loader' className="doc-link">
                              <Image className="mr-4" width={24} height={24} src='/loader.svg' alt='loader icon' />
                              <p> Loader </p>
                          </Link >
                          <Link href='/docs/components/slider' className="doc-link">
                              <Image className="mr-4" width={24} height={24} src='/slider.svg' alt='slider icon' />
                              <p> Slider </p>
                          </Link >
                          <Link href='/docs/components/switch' className="doc-link">
                              <Image className="mr-4" width={24} height={24} src='/toggle.svg' alt='toggle icon' />
                              <p> Switch </p>
                          </Link >
                          <Link href='/docs/components/textfield' className="doc-link">
                              <Image className="mr-4" width={24} height={24} src='/text.svg' alt='text icon' />
                              <p> Text Field </p>
                          </Link >
                  </div>
                  )}
              </div>
        </nav>
      <section className='ml-[250px] p-8 flex bg-white justify-center items-top w-full'>
        <div className ='h-full w-full bg-slate-100 rounded-md p-8'>
        {children}
        </div>
      </section>
  </section>
    
  )
}
