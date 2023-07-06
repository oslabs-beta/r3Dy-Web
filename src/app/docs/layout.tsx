import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-[250px] h-[964px] flex pt-8 pr-2 pb-177 pl-4 flex-column items-start gap-24 shrink-0 border-x-2 border-color );">
        
        <nav>
            <div className="pt-2 pb-2 pl-4 pr-4 rounded-md bg-slate-100 mb-8 ">R3DY v1.0</div>
                <Link href='/docs' className="flex mb-4">
                    <Image className="mr-2 mb-5" width={24} height={24} src='./book.svg' alt='book icon' /> 
                    Overview
                </Link >
                <Link href='/docs/install' className="flex mb-4">
                    <Image className="mr-2 mb-5" width={24} height={24} src='./install.svg' alt='install icon' />
                    Install 
                </Link >
            <Link href='/docs/components' className="flex">
                <Image className="mr-2 mb-2" width={24} height={24} src='./box.svg' alt='box icon' />
                Components
            </Link >
        </nav>
      <div className=''>
        {children}
      </div>
  </div>
    
  )
}
