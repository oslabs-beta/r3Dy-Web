'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Button } from 'r3dy'
import button from 'public/button.svg'
import buttonWhite from 'public/button-white.svg'
import Title from '../../../../../components/Title'
import CodeBlock from '../../../../../components/CodeBlock'
import Header from '../../../../../components/Header'
import Regular from '../../../../../components/Regular'
import InlineCode from '../../../../../components/InlineCode'
import { useSelector } from 'react-redux'; 

const example: string = 
`import { Canvas } from "@react-three/fiber";
import { Button } from "r3dy";

export default function App() {
  return (
      <Canvas>
        <Button />
      </Canvas>
  );
}`

export default function ButtonDocs() {

  const darkModeState = useSelector((state) => state.darkMode.value);

  return (
    <>
    <Title title={'Button'} icon={darkModeState ? buttonWhite : button} altTag={'Button Icon'} />
    <div className='h-[300px]'>
      <Canvas > 
        <Button />
      </Canvas>
    </div>
    <Regular> 
      The button component is a clickable 3D button.
    </Regular>
    <Header text={'Scale'}/>
    <Regular> 
      The <InlineCode> scale </InlineCode> prop defines the button size. Change it by passing a number.
  </Regular>
  <Header text={'Color'}/>
    <Regular> 
      The <InlineCode> color </InlineCode> prop defines the button color. Change it by passing a color name or hex code as a string.
  </Regular>
  <Header text={'HoverColor'}/>
    <Regular> 
      The <InlineCode> hoverColor </InlineCode> prop defines the button color on hover. Change it by passing a color name or hex code as a string.
  </Regular>
  <Header text={'Text'}/>
    <Regular> 
    The <InlineCode> text </InlineCode> prop defines the button text. Change it by passing a string.
  </Regular>
  <Header text={'Font Size'}/>
    <Regular> 
    The <InlineCode> fontSize </InlineCode> prop defines the font size of the button text. Change it by passing a number.
  </Regular>
  <Header text={'Font Color'}/>
    <Regular> 
    The <InlineCode> fontColor </InlineCode> prop defines the color of the button text. Change it by passing a color name or hex code as a string.
  </Regular>
  <Header text={'HandleClick'}/>
    <Regular> 
      The <InlineCode> handleClick </InlineCode> prop defines a callback function for the button’s onClick event. Set it by passing a function.
  </Regular>
  <Header text={'Code Sample'}/>
  <CodeBlock codeString={example} enableSandbox={true} sandboxLink='https://codesandbox.io/s/unruffled-ives-p8tk5j?file=/src/App.js'></CodeBlock>
    </>
  )
}
