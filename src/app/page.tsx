'use client';

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  
  const copyClipboard = (): void => {
    navigator.clipboard.writeText('npm install r3dy');
  };
  
  
  return (
    <section className='flex h-full w-full align-center justify-center py-36 px-8'>
      <div className="max-w-screen-lg flex pr-8">
        <div className="p-4 max-w-[1024px]">
        <Image width={120} height={30} className='mb-5' src='./logo-dark.svg' alt='r3dy-logo-dark-full'/>
          <h1 id='main-header' className="text-5xl font-black text-left mb-8">Interactive 3D React UI components.</h1>
          <text id='landing-text' className="text-left font-regular">R3DY UI is a growing suite of 3D components, built to help take your existing 2D projects into 3D.</text>
          <div className="box justify-left mt-8">
            <button className="font-mono flex items-center py-2 px-4 bg-slate-200 rounded-md text-sm mr-6 mb-4" onClick={copyClipboard}>
              npm install r3dy 
              <Image src={'/copy.svg'} alt='copy-icon' width={15} height={5} className='ml-2'/>
              </button>
            <Link href={'/docs'}>
            <button className="bg-indigo-700 py-2 px-4 text-white font-bold rounded-md text-sm">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="w-[512px] h-full bg-slate-200 rounded">
        </div>
      </div>
    </section>
  )
}