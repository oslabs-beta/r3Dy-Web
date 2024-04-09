'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux';
import { store } from '../src/app/store/store'
import { RootState } from '../src/app/store/store'


export default function DocsNavigation() {
    const [dropdown, setDropdown] = useState(false);
    const pathname: string = usePathname();

    const darkModeState = useSelector((state:RootState) => state.darkMode.value);

    return (
        <div className='md:flex h-screen hidden'>
            <nav className="basic-transition w-[250px] flex px-4 py-10 flex-column border-x border-slate-200 bg-white dark:darkmode-background dark:border-slate-700">
                <div className='grow'>
                    <div className="py-2 px-4 rounded-md bg-slate-100 mb-8 max-w-[150px] hover:cursor-default text-sm dark:text-white dark:bg-slate-700">R3DY v1.0</div>
                    <Link href='/docs' className={(pathname === '/docs') ? 'doc-link-active' : 'doc-link'}>
                        <Image className="mr-4" width={24} height={24} src={ darkModeState ? '/book-white.svg' : '/book.svg'} alt='book icon' />
                        <p> Overview </p>
                    </Link >
                    <Link href='/docs/install' className={(pathname.includes('install')) ? 'doc-link-active' : 'doc-link'}>
                        <Image className="mr-4" width={24} height={24} src={ darkModeState ? '/install-white.svg' : '/install.svg'} alt='install icon' />
                        <p> Install </p>
                    </Link >
                    <button onClick={() => setDropdown(!dropdown)} className="nav-link ease-linear transition duration-150 ml-0 px-2 py-4 flex items-center mb-4 grow w-full rounded-md hover:bg-[#E3E7FC] text-sm font-medium hover:text-indigo-700 active:text-indigo-700">
                        <Image className="mr-4" width={24} height={24} src={darkModeState ? '/box-white.svg' : '/box.svg'} alt='box icon' />
                        <p className='w-full text-left'> Components </p>
                        {dropdown ? <Image className="mr-4 " width={24} height={24} src={darkModeState ? '/down-white.svg' : '/down.svg'} alt='arrow icon' /> : <Image className="mr-4 -rotate-90" width={24} height={24} src={darkModeState ? '/down-white.svg' : '/down.svg'} alt='arrow icon' />}
                    </button >
                    {dropdown && (
                        <div className='pl-4'>
                            <Link href='/docs/components/button' className={(pathname.includes('button')) ? 'doc-link-active' : 'doc-link'}>
                                <Image className="mr-4" width={24} height={24} src={darkModeState ? '/button-white.svg' : '/button.svg'} alt='button icon' />
                                <p> Button </p>
                            </Link >
                            <Link href='/docs/components/loader' className={(pathname.includes('loader')) ? 'doc-link-active' : 'doc-link'}>
                                <Image className="mr-4" width={24} height={24} src={darkModeState ? '/loader-white.svg' : '/loader.svg'} alt='loader icon' />
                                <p> Loader </p>
                            </Link >
                            <Link href='/docs/components/slider' className={(pathname.includes('slider')) ? 'doc-link-active' : 'doc-link'}>
                                <Image className="mr-4" width={24} height={24} src={darkModeState ? '/slider-white.svg' : '/slider.svg'} alt='slider icon' />
                                <p> Slider </p>
                            </Link >
                            <Link href='/docs/components/switch' className={(pathname.includes('switch')) ? 'doc-link-active' : 'doc-link'}>
                                <Image className="mr-4" width={24} height={24} src={darkModeState ? '/toggle-white.svg' : '/toggle.svg'} alt='toggle icon' />
                                <p> Switch </p>
                            </Link >
                            <Link href='/docs/components/textfield' className={(pathname.includes('textfield')) ? 'doc-link-active' : 'doc-link'}>
                                <Image className="mr-4" width={24} height={24} src={darkModeState ? '/text-white.svg' : '/text.svg'} alt='text icon' />
                                <p> Text Field </p>
                            </Link >
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}
