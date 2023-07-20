'use client'

import React, {useState} from 'react'
import sliderIMG from 'public/slider.svg'
import sliderIMGWhite from 'public/slider-white.svg'
import Title from '../../../../../components/Title'
import Regular from '../../../../../components/Regular'
import Header from '../../../../../components/Header'
import Callout from '../../../../../components/Callout'
import CodeBlock from '../../../../../components/CodeBlock'
import InlineCode from '../../../../../components/InlineCode'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store'

const example: string = 
`import { Canvas } from "@react-three/fiber";
import { Slider } from "r3dy";

export default function App() {
  return (
      <Canvas>
        <Slider />
      </Canvas>
  );
}`

const Slider = dynamic(
  () => import('r3dy').then(mod => mod.Slider),
  { ssr: false }
)

export default function SliderDoc() {

  const [sliderState, setSliderState] = useState(0)

  const codeString = `import React, { useState }  from 'react'
  import { Canvas } from '@react-three/fiber'
  import {Slider} from 'r3dy'
  
  const [slider, setSlider] = useState(0);
    return (
      <Canvas 
      camera = { {
        near:.1,
        far:200,
        position: [0, 1, 8]
      } }
      >
        <Slider 
        onChange={setSlider}
        maxValue={10}
        steps={2}
        value={slider} />
      </Canvas>
    )}`

    
    const darkModeState = useSelector((state: RootState) => state.darkMode.value);
  
  return (
    
    <>
    <Title title={'Slider'} icon={darkModeState ? sliderIMGWhite : sliderIMG} altTag={'Slider Icon'} />
    
    <div className='h-[300px]'>
    <Canvas>
      <Slider onChange={setSliderState}  value={sliderState}/>
    </Canvas>
    </div>

    <Regular> 
      The Slider is a 3D component that provides users with an interactive way to select parameters.
    </Regular>
    <Header text={'Slider'}/>

    <Regular> The <InlineCode> Slider </InlineCode> wrapper creates and renders a 3D interactive slder in a react application </Regular>
    
    {/* <CodeBlock codeString={codeString}
      /> */}
    <Callout>
      Note: The slider will always start from zero.
    </Callout>
    

    <Header text={'maxValue (optional):'}/>
    <Regular> 
      The <InlineCode> maxValue </InlineCode> prop sets the max value of the slider. Defaults to 10.
    </Regular>

    <Header text={'steps (optional):'}/>
    <Regular> 
      The <InlineCode> steps </InlineCode> prop sets the increment of each tick/mark. If you want the sluder to be in increments of 3, then steps would be 3. Defaults to 2.
    </Regular>

    <Header text={'onChange (required):'}/>
    <Regular> 
      The <InlineCode> onChange </InlineCode> prop takes in the callback function that is fired when the sliders value changes.
      Will take in a number corresponding to slider position. Recommended that the function be a useState hook
    </Regular>

    <Header text={'value (optional):'}/>
    <Regular> 
      The <InlineCode>value</InlineCode> prop is used to show a visual number that corresponds with each position. Should be the output
      of the <InlineCode>onChange</InlineCode> prop.
    </Regular>
    <Header text={'Code Sample'}/>
    <CodeBlock codeString={example} enableSandbox={true} sandboxLink='https://codesandbox.io/s/slider-sandbox-cx3lty?file=/src/App.js'></CodeBlock>
    </>
  )
}