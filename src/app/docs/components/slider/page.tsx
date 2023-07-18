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
import { useSelector } from 'react-redux'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84, okaidia, prism, dark, twilight, coy, tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Slider } from 'r3dy'
import { Canvas } from '@react-three/fiber'


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

  const notionCodeBlockStyle ={
    fonFamily: "SFMono-Regular, Menlo, Consolas, PT Mono, Liberation Mono, Courier, monospace",
    lineHeight: "normal",
    background: "rgba(135,131,120,0.15)",
    color: "#EB5757",
    borderRadius: "3px",
    fonSize: "85%",
    padding: "0.2em 0.4em",
    fontWeight: "600",
  }
  const darkModeState = useSelector((state) => state.darkMode.value);
  return (
    
    <>
    <Title title={'Slider'} icon={darkModeState ? sliderIMGWhite : sliderIMG} altTag={'Slider Icon'} />
    
    <div className='h-[300px]'>
    <Canvas>
      <Slider onChange={setSliderState}  value={sliderState}/>
    </Canvas>
    </div>

    <Regular> 
      The Slider is a 3D component that provides users with an interactive way to select parameters
    </Regular>
    <Header text={'Slider'}/>

    <Regular> The <InlineCode> Slider </InlineCode> wrapper creates and renders a 3D interactive slder in a react application </Regular>
    
    <SyntaxHighlighter language="javascript" wrapLines={true} customStyle={notionCodeBlockStyle}>
        {codeString}
    </SyntaxHighlighter>
    

    <Header text={'Theme'}/>
    <Regular> 
      The <InlineCode> Theme </InlineCode> prop enables the ability to change the style of the Text Field to dark or light. 
      By default this is set to light. 
    </Regular>

    <Header text={'OnChange'}/>
    <Regular> 
      The <InlineCode> OnChange </InlineCode> prop takes a callback function. 
      <br/>
      This callback function is invoked each time a change is registered on the Text Field. By default an <InlineCode> event </InlineCode> object is provided as an argument to the callback function which provides access to various properties on regarding the Text Field. To access this event object properties, you can use <InlineCode> event.currentTarget </InlineCode>.
    </Regular>

    <Header text={'Color'}/>
    <Regular> 
      The <InlineCode> color </InlineCode> prop enables the ability to change the color of the display text within the Text Field when typed.
    </Regular>

    <Header text={'Width & Height'}/>
    <Regular> 
      The default <InlineCode>width</InlineCode> is set to <InlineCode>15</InlineCode> and the default height is set to <InlineCode>3</InlineCode>. Unlike <InlineCode>pixels(px)</InlineCode> on a screen. These number represents the size and dimensions of the rendered 3D component on the canvas.
    </Regular>
    <Callout> Note: We do not recommend changing the <InlineCode>width</InlineCode> or <InlineCode>height</InlineCode>. The current dimensions are optimized to fill the canvas. The maximum height allowed is <InlineCode>5</InlineCode>. </Callout>

    <Header text={'Background Color'}/>
    <Regular> 
      The default <InlineCode>backgroundColor</InlineCode> prop enables the ability to change the background color of the text field. 

      This effect is currently only supported when a color code is provided for the <InlineCode>backgroundColor</InlineCode> prop (e.g. <InlineCode>backgroundColor=”#F4FAFF”</InlineCode>). This will be updated soon to support all color declarations (e.g. <InlineCode>backgroundColor=”red”</InlineCode>).
    </Regular>

    <Header text={'Fonts'}/>
    <Regular> 
      Alternative fonts can be provided to Text Field through the <InlineCode>font</InlineCode> prop. 

      The default font used is <InlineCode>Inter-bold</InlineCode>. Unlike your typical text field, this 3D Text Field requires access to the font <InlineCode>.ttf</InlineCode> file. To properly change the font, it is recommended that you upload the .<InlineCode>.ttf</InlineCode>  font file into a <InlineCode>font</InlineCode>  directory on your project’s root and pass the path to the <CodeBlock>font</CodeBlock>  prop. (e.g. <CodeBlock>font=”fonts/Inter-Bold.ttf”</CodeBlock> ).
    </Regular>

    <Header text={'Font Size'}/>
    <Regular> 
    The <CodeBlock>fontSize</CodeBlock> prop allows you to change the size of the 3D font on the Text Field. 

    Similarly to the <CodeBlock>height</CodeBlock> and <CodeBlock>width</CodeBlock> props, the <CodeBlock>fontSize</CodeBlock> represents the size and dimensions of the rendered 3D text on the canvas. The default fontSize is set to `1`.
    </Regular>
    </>
  )
}