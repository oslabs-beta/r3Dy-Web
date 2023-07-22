/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import Title from '../../../../components/Title'
import InstallIcon from 'public/install.svg'
import InstallIconWhite from 'public/install-white.svg';
import Regular from '../../../../components/Regular'
import Header from '../../../../components/Header'
import Callout from '../../../../components/Callout'
import CodeBlock from '../../../../components/CodeBlock'
import InlineCode from '../../../../components/InlineCode'
import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber'
import { RootState } from '../../../../src/app/store/store'
import dynamic from 'next/dynamic'

const Switch = dynamic(
  () => import('r3dy').then(mod => mod.Switch),
  { ssr: false }
)


export default function Install() {
  const darkModeState = useSelector((state: RootState) => state.darkMode.value);
  const implementationCode: string = `import { Canvas } from '@react-three/fiber'
import { Switch } from 'r3dy'
  
<div className="flex justify-center">
  <div className='h-[200px] w-[300px] '>
    <Canvas shadows>
      <Switch model={1}/>
    </Canvas>
  </div>
</div>`

  return (
    <>
    <Title title="Install" icon={darkModeState ? InstallIconWhite : InstallIcon} altTag='Install Icon'/>
    <Header text={'NPM Package'}/>
    <CodeBlock codeString={'npm install r3dy'}></CodeBlock>
    <Header text={'Implementation'}/>
    <Regular> Once you've installed the npm package, its time to add a component to your project. In the code snippet below, you can see how this is implemented.  </Regular>
    <CodeBlock codeString={implementationCode}></CodeBlock>
    <Callout> As you can see, the above code generated the switch below it. However there are a few things you want to make note of. </Callout>
    <div className="flex justify-center">
      <div className='h-[200px] w-[300px] '>
        <Canvas shadows>
          <Switch model={1}/>
        </Canvas>
      </div>
    </div>
    <Regular> 
    You want to make sure that you have imported the necessary dependencies. Import the desired component from <InlineCode> r3dy </InlineCode> as well as <InlineCode>Canvas</InlineCode> from <InlineCode>@react-three/fiber.</InlineCode> Now that you've included dependencies, wrap your component in a <InlineCode>Canvas</InlineCode> tag. Make sure to include shadows in the <InlineCode>Canvas</InlineCode> tag or they will not show up.
       </Regular>
       <Callout> Note: As you can see, the <InlineCode> Canvas </InlineCode> is nested in 2 divs. The first div is meant to contain the <InlineCode> Canvas </InlineCode>. By nature <InlineCode> Canvas </InlineCode> will try to fill as much space as its allowed, so if you dont nest it in a div, and you have margins, it will constantly expand to fit those margins.
       The second div is used to adjust the placement of the first. As mentioned, <InlineCode> Canvas </InlineCode> took up the entire space of the first div. Now that its contained, you will need another to move it about the page. 
          </Callout>
          <Header text={'Customization'}/>
          <Regular> Now that you have the component installed, its time to style! Please head over to our component pages where you will fine more details on how to customize these components to you liking and needs.</Regular>
          <Callout>  Thank you for taking the time to check out R3DY UI  </Callout>
    </>
  )
}
