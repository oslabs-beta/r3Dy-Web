'use client'


import toggle from 'public/toggle.svg'
import React from 'react'
import text from 'public/text.svg'
import Title from '../../../../../components/Title'
import Regular from '../../../../../components/Regular'
import Header from '../../../../../components/Header'
import Callout from '../../../../../components/Callout'
import CodeBlock from '../../../../../components/CodeBlock'
import InlineCode from '../../../../../components/InlineCode'
import { Canvas } from '@react-three/fiber'
import { Switch } from 'r3dy'

export default function SwitchDoc() {
  return (
    <>
    <Title title={'Switch'} icon={toggle} altTag={'Switch Icon'} />
    <div className='flex justify-center'>
      <div className=' flex w-4/5 '>
        <Canvas shadows>
            <Switch model={1}/>
        </Canvas>

        <Canvas shadows>
          <Switch model={2}/>
        </Canvas>
      </div>
    </div>
    <Regular> 
      The 2 Switches are 3D components that let users toggle between an on and off state
    </Regular>

    <Header text={'Toggle Switch'}/>
    <Regular> The toggle switch is a classic up and down flicking switch modeled after switches used for vintage audio equipment. </Regular>

    <Header text={'Color Property'}/>
    <Regular> The <InlineCode> Color </InlineCode> prop allows you to change the color of the switch while maintaining its overall metal appearance. The color prop needs to be a string </Regular>
    
    <CodeBlock codeString={'<Switch color={”red”} /> <Switch color={"#1B263B"} />'}></CodeBlock>
    <Regular> Note: If you do not choose a color a default color will be applied for you.</Regular>

    <Header text={'Size Property'}/>
    <Regular> 
      The <InlineCode> Size </InlineCode> prop allows you to scale the size of the switch to your liking. This is a general scaling option and will increase or decrease the entire size of the object as opposed to width and height. The size property needs to be a number  
    </Regular>

    <CodeBlock codeString={'<Switch size={1} /> <Switch size={1.69} />'}></CodeBlock>
    
    <Regular> Note: The size property allows you to enter any positive number as an input including decimals. If you choose not to use the size property a default size will be applied for you. </Regular>
    
    <Header text={'Callback Function'}/>
    <Regular> 
      The <InlineCode> Callback </InlineCode> prop allows you to pass in a function that will be called when the switch is in its on position. You can pass in any type of function you like. When the switch is down or ‘on’ then the callback function will be run.  
    </Regular>

    <CodeBlock codeString={'<Switch callback={() => {console.log(`hello`)}} /> <Switch callback={() => {counter ++ }} />'}></CodeBlock>

    <Regular> Note: Please be aware of scope, and where you variables are, before passing in a function to be run.  </Regular>


    {/* ********************************************************************************************************************************* */}
    {/* ********************************************************************************************************************************* */}
    {/* ********************************************************************************************************************************* */}


    <Header text={'Slider Switch'}/>
    <Regular> The slider switch is a more modern left to right thumb switch. It was modeled off of switches used in more modern electronic applications.  </Regular>

    <Header text={'Color Property'}/>
    <Regular> The <InlineCode> mainColor </InlineCode> and <InlineCode> slideColor </InlineCode> props allow you to customize both the body of the switch as well as the slide. 
    And just like the above color property you may use plain english for colors or hex code. Both properties need to be strings.  </Regular>
    
    <CodeBlock codeString={'<Switch color={”red”} /> <Switch color={"#1B263B"} />'}></CodeBlock>
    <Regular> Note: If you do not choose any colors they will be applied for you. </Regular>

    <Header text={'Size Property'}/>
    <Regular> 
      The <InlineCode> Size </InlineCode> prop allows you to scale the size of the switch to your liking. 
      This is a general scaling option and will increase or decrease the entire size of the object as opposed to width and height. The size property needs to be a number  
    </Regular>

    <CodeBlock codeString={'<Switch size={1} /> <Switch size={1.69} />'}></CodeBlock>
 
    
    <Regular> Note: The size property allows you to enter any positive number as an input including decimals. 
      If you choose not to use the size property a default size will be applied for you. </Regular>
    
    <Header text={'Callback Function'}/>
    <Regular> 
      The <InlineCode> Callback </InlineCode> prop allows you to pass in a function that will be called when the switch is in its on position. 
      You can pass in any type of function you like. When the switch is down or ‘on’ then the callback function will be run.  
    </Regular>

    <CodeBlock codeString={'<Switch2 callback={() => {console.log(`hello`)}} /> <Switch2 callback={() => {counter ++ }} />'}></CodeBlock>

    <Regular> Note: Please be aware of scope, and where you variables are, before passing in a function to be run.  </Regular>

    <Header text={'Callback Function'}/>
    <Regular> 
      The <InlineCode> Tension </InlineCode> prop allows you to control the amount of ‘bounce’ the slider has when it is turned on and off. This must be a number greater than 0  
    </Regular>

    <CodeBlock codeString={'<Switch2 tension={.9} /><Switch2 tension={2.3} />'}></CodeBlock>

    <Regular> Note: I would recommend using smaller numbers to adjust this property. The internal value is multiplied by whatever you input. So small changes can have a large effect. 
      The higher a number the faster and more precise the switch is. The smaller it is give it a softer bouncier feel. 
      Again this is optional and it will default to predetermined values if you don’t enter anything. The default values were meant to simulate the most realistic feel.  </Regular>

    
    </>
  )
}