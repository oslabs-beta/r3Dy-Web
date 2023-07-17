import Image from 'next/image'
import React from 'react'
import FooterLogo from '../public/footer-logo.svg'
import Link from 'next/link'
import FooterGithub from '../public/githubFooter.svg'

export default function Footer() {
  return (
    <section className='md:px-24 px-12 py-12 bg-[#0D1B2A]'>
        <div className='w-full md:flex md:items-start justify-between '>
            <Link href="/"> 
              <Image alt='Footer Logo' src={FooterLogo} width={186} height={37} className='md:mr-32 mb-8 md:mb-0'/>
            </Link>
            <div className="flex flex-col w-[150px] mr-32 mb-8 md:mb-0">
                <Link href='/docs' className='text-[#4895EF] font-bold mb-4 hover:text-[#1478eb] w-[70px]'>Docs</Link>
                <Link href='/docs/install' className='text-[#F0F1F1] text-[14px] w-[90px] font-light py-2 hover:text-[#97a6ba]'>Install</Link>
                <div className='bg-slate-200 h-px w-full my-2'></div>
                <Link href='/docs/components/loader' className='text-[#F0F1F1] text-[14px] w-[90px] font-light py-2 hover:text-[#97a6ba]'>Loader</Link>
                <Link href='/docs/components/button' className='text-[#F0F1F1] text-[14px] w-[90px] font-light py-2 hover:text-[#97a6ba]'>Button</Link>
                <Link href='/docs/components/switch' className='text-[#F0F1F1] text-[14px] w-[90px] font-light py-2 hover:text-[#97a6ba]'>Switch</Link>
                <Link href='/docs/components/textfield' className='text-[#F0F1F1] text-[14px] w-[90px] font-light py-2 hover:text-[#97a6ba]'>Text Field</Link>
                <Link href='/docs/components/slider' className='text-[#F0F1F1] text-[14px] w-[90px] font-light py-2 hover:text-[#97a6ba]'>Slider</Link>
            </div>
                <div className='flex flex-col w-[150px] mb-8 md:mb-0'>
                <Link href='/about-us' className='text-[#4895EF] font-bold mb-4 hover:text-[#1478eb] w-[90px]'>About us</Link>
                <Link href='https://github.com/bryanltrang' target='_blank' className='text-[#F0F1F1] text-[14px] w-[90px] font-light py-2 hover:text-[#97a6ba]'>Bryan Trang</Link>
                <Link href='https://github.com/alecjessen' target='_blank' className='text-[#F0F1F1] text-[14px] w-[90px] font-light py-2 hover:text-[#97a6ba]'>Alex Jessen</Link>
                <Link href='https://github.com/18gwoo' target='_blank' className='text-[#F0F1F1] text-[14px] w-[90px] font-light py-2 hover:text-[#97a6ba]'>Garrett Woo</Link>
                <Link href='https://github.com/nrking913' target='_blank' className='text-[#F0F1F1] text-[14px] w-[90px] font-light py-2 hover:text-[#97a6ba]'>Nick King</Link>
                <Link href='https://github.com/corsodr' target='_blank' className='text-[#F0F1F1] text-[14px] w-[90px] font-light py-2 hover:text-[#97a6ba]'>Corso Rosati</Link>
                </div>
                <div className='grow md:flex md:justify-end' >
                    <Link href="https://github.com/oslabs-beta/r3Dy-Web" className="w-[40px] h-[40px] bg-[#415A77] hover:bg-[#4c6a8a] rounded-[100px] flex justify-center items-center " >
                    <Image alt="Footer Github Image" src={FooterGithub}/>
                    </Link>
                </div>
        </div>
    </section>
  )
}
