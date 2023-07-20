'use client';
import React from 'react'
import Image from 'next/image';
import Title from '../../../components/Title';
import InstallIcon from 'public/install.svg'
import Regular from '../../../components/Regular'
import Header from '../../../components/Header'
import Callout from '../../../components/Callout'
import CodeBlock from '../../../components/CodeBlock'
import InlineCode from '../../../components/InlineCode'
import BookIcon from 'public/book.svg'
import BookIconWhite from 'public/book-white.svg'
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/app/store/store'
import Link from 'next/link'
import Banner from 'public/r3dy-banner.png'


export default function Overview() {

  const codeExample = `
import { Canvas } from '@react-three/fiber'
import { Switch } from 'r3dy'

<div className="flex justify-center">
  <div className='h-[200px] w-[300px] '>
    <Canvas shadows>
      <TextField theme="light" />
    </Canvas>
  </div>
</div>`

const darkModeState = useSelector((state: RootState) => state.darkMode.value);

  return ( 
    <>
    <Title title='Overview' icon={darkModeState ? BookIconWhite : BookIcon} altTag='Overview Icon'/>
    <div className='flex justify-center pb-20 pt-10'>
    <Image className='max-w-6xl w-full' src={Banner} width={1240} height={300} alt='Overview Banner'/>
    </div>
    <Header text={'What is R3DY UI?'}/>
    <Regular>
      R3DY UI is a library of ready made 3D components built with <Link className='text-violet-500' href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'>React Three Fiber</Link>.
      These components are readily interactive and take close to no knowledge on 3D rendering to utilize.
    </Regular>
    <Header text={'Components'}/>
    <Regular>
    Currently there are 5 components: Button, Loader, Slider, Switch, and Text Field. 
    Each component is able to be dropped into a <Link className='text-violet-500' href={'https://react.dev/'}>react</ Link> app and take a number of properties.
    </Regular>
    <Header text={'What it looks like'}/>
    <CodeBlock codeString={codeExample}></CodeBlock>
    <Header text={'What\'s next?'} />
    <Regular>
      R3DY UI is being actively worked on and many changes are planned.
      These include new components as well as adjustments to current components to better the user experience.
    </Regular>
    <Header text={'How to contribute'}/>
    <Regular>
      If you like what we are doing here and want to contribute, or give us feedback, feel free to check us out on <Link className='text-violet-500' href={'https://github.com/oslabs-beta/r3Dy'}>Github!</ Link>
    </Regular>
    </>
  )
}