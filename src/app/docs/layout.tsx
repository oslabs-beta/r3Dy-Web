import React from 'react'
import DocsNavigation from '../../../components/DocsNavigation'



export default function DocsLayout({
  children,
}:{
  children: React.ReactNode
}) 
{
  
  return (
    <section className="basic-transition flex h-full dark:darkmode-backround">
        <DocsNavigation />
      <section className='basic-transition ml-[250px] p-8 flex bg-white justify-center items-top w-full h-full dark:darkmode-backround'>
        <div className ='basic-transition w-full bg-slate-100 rounded-md p-8 dark:bg-slate-800'>
        {children}
        </div>
      </section>
    </section>
  )
}
