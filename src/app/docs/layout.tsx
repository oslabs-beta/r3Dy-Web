import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-row">
      <div className="fixed w-[250px] h-screen flex pt-24 px-4 flex-column border-x border-slate-200 bg-white">
          <nav className='grow'>
              <div className="py-2 px-4 rounded-md bg-slate-100 mb-8 max-w-[150px] text-sm">R3DY v1.0</div>
                  <Link href='/docs' className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                      <Image className="mr-4" width={24} height={24} src='./book.svg' alt='book icon' /> 
                      <text> Overview </text>
                  </Link >
                  <Link href='/docs/install' className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                      <Image className="mr-4" width={24} height={24} src='./install.svg' alt='install icon' />
                      <text> Install </text>
                  </Link >
              <Link href='/docs/components' className="ease-linear transition duration-150 px-2 py-4 flex items-center mb-4 grow rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                  <Image className="mr-4" width={24} height={24} src='./box.svg' alt='box icon' />
                  <text> Components </text>
              </Link >
          </nav>
      </div>
      <div className='ml-[250px] py-20 px-8 flex bg-white justify-center items-top'>
        <div className ='h-full w-full bg-slate-100 rounded-md p-16'>
        {children}
        </div>
      </div>
  </div>
    
  )
}
