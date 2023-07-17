import React from 'react'
import DocsNavigation from '../../../components/DocsNavigation'



export default function DocsLayout({
  children,
}:{
  children: React.ReactNode
}) 
{
  
  return (
    <section className="flex h-full">
        <DocsNavigation />
      <section className='ml-[250px] p-8 flex bg-white justify-center items-top w-full'>
        <div className ='h-full w-full bg-slate-100 rounded-md p-8'>
        {children}
        </div>
      </section>
  </section>
    
  )
}
