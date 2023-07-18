'use client'
import React from 'react'
import Title from '../../../../components/Title'
import InstallIcon from 'public/install.svg'
import Regular from '../../../../components/Regular'
import Header from '../../../../components/Header'
import Callout from '../../../../components/Callout'
import CodeBlock from '../../../../components/CodeBlock'
import InlineCode from '../../../../components/InlineCode'
import { Canvas } from '@react-three/fiber'
import { Switch } from 'r3dy'


export default function Install() {

  const implementationCode: string = `'use client'

import { Canvas } from '@react-three/fiber'
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
    <Title title="Install" icon={InstallIcon} altTag='Install Icon'/>
    <Header text={'NPM Package'}/>
    <CodeBlock codeString={'npm install r3dy'}></CodeBlock>
    <Header text={'Implementation'}/>
    <Regular> Once you've installed the npm package, its time to add a component to your project. In the code snippet below, you can see how this is implemented.  </Regular>
    <CodeBlock codeString={implementationCode}></CodeBlock>
    <Callout> Note: As you can see, the above code generated the switch below it. However there are a few things you want to make note of.  </Callout>
    <div className="flex justify-center">
      <div className='h-[200px] w-[300px] '>
        <Canvas shadows>
          <Switch model={1}/>
        </Canvas>
      </div>
    </div>
    <Regular> 
      First - You want to make sure you have imported the necessary dependencies. Import the desired component from <InlineCode> r3dy </InlineCode> as well as <InlineCode> Canvas </InlineCode> from <InlineCode> @react-three/fiber </InlineCode>.
      Afterwards you need to include the <InlineCode> use client </InlineCode> at the top of the page. Now that you've included the dependencies, wrap your component in a <InlineCode> Canvas </InlineCode> tag. Make sure to include <InlineCode> shadows </InlineCode> in the canvas tag or they will not show up. 
       </Regular>
       <Callout> Note: As you can see, Ive nested the <InlineCode> Canvas </InlineCode> in 2 divs. The first div is meant to contain the <InlineCode> Canvas </InlineCode>. By nature <InlineCode> Canvas </InlineCode> will try to fill as much space as its allowed, so if you dont nest it in a div, and you have margins, it will constantly expand to fit those margins.
       The second div is used to adjust the placement of the first. As mentioned, <InlineCode> Canvas </InlineCode> took up the entire space of the first div. Now that its contained, you will need another to move it about the page. 
          </Callout>
          <Header text={'Customization'}/>
          <Regular> Now that you have the component installed, its time to style! Please head over to our component pages where you will fine more details on how to customize these components to you liking and needs.</Regular>
          <Callout>  Thank you for taking the time to check out R3DY UI  </Callout>
    </>
  )
}
