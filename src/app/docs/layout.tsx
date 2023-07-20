'use client'
import React from 'react'
import DocsNavigation from '../../../components/DocsNavigation'



export default function DocsLayout({
  children,
}:{
  children: React.ReactNode
}) 
{
  
  return (
    <section className="basic-transition flex h-full dark:darkmode-background fixed w-full">
        <DocsNavigation />
      <section className='basic-transition max-md:ml-[0px] max-md:p-0 p-8 mb-16 flex bg-white justify-center items-top w-full dark:darkmode-background'>
        <div className ='basic-transition h-full w-full bg-slate-100 rounded-md p-8 dark:bg-slate-800 overflow-y-auto no-scrollbar'>
        {children}
        </div>
      </section>
    </section>
  )
}
