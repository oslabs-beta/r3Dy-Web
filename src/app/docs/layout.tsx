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
                  <Link href='/docs' className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                      <Image className="mr-4" width={24} height={24} src='/book.svg' alt='book icon' /> 
                      <text> Overview </text>
                  </Link >
                  <Link href='/docs/install' className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                      <Image className="mr-4" width={24} height={24} src='/install.svg' alt='install icon' />
                      <text> Install </text>
                  </Link >
                  <button onClick={() => setDropdown(!dropdown)} className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow w-full rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                      <Image className="mr-4" width={24} height={24} src='/box.svg' alt='box icon' />
                      <text className='w-full text-left'> Components </text>
                      <Image className="mr-4" width={24} height={24} src='/down.svg' alt='arrow icon' />
                  </button >
                    {dropdown && (
                    <div className='pl-4'>
                          <Link href='/docs/components/button' className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                            <Image className="mr-4" width={24} height={24} src='/button.svg' alt='button icon' />
                            <text> Button </text>
                          </Link >
                          <Link href='/docs/components/loader' className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                              <Image className="mr-4" width={24} height={24} src='/loader.svg' alt='loader icon' />
                              <text> Loader </text>
                          </Link >
                          <Link href='/docs/components/slider' className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                              <Image className="mr-4" width={24} height={24} src='/slider.svg' alt='slider icon' />
                              <text> Slider </text>
                          </Link >
                          <Link href='/docs/components/switch' className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                              <Image className="mr-4" width={24} height={24} src='/toggle.svg' alt='toggle icon' />
                              <text> Switch </text>
                          </Link >
                          <Link href='/docs/components/textfield' className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                              <Image className="mr-4" width={24} height={24} src='/text.svg' alt='text icon' />
                              <text> Text Field </text>
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
