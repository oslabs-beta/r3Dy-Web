'use client'

import React from 'react'
import TextIcon from 'public/text.svg'
import TextIconWhite from 'public/text-white.svg'
import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber'
import { TextField } from 'r3dy'
import Title from '../../../../../components/Title'
import Regular from '../../../../../components/Regular'
import Header from '../../../../../components/Header'
import Callout from '../../../../../components/Callout'
import CodeBlock from '../../../../../components/CodeBlock'
import InlineCode from '../../../../../components/InlineCode'

const example: string = 
`import { Canvas } from "@react-three/fiber";
import { TextField } from "r3dy";

export default function App() {
  return (
      <Canvas>
        <TextField />
      </Canvas>
  );
}`

export default function TextFieldDoc() {


  const codeExample: string = `<TextField theme=”light” />;
<TextField theme=”dark”/>;`

const darkModeState = useSelector((state) => state.darkMode.value);
  return (
    <>
    <Title title={'Text Field'} icon={darkModeState ? TextIconWhite : TextIcon} altTag={'Text Icon'} />
    <div className='h-[300px]'>
      <Canvas shadows> 
        <TextField/>
      </Canvas>
    </div>
    <div className='h-[300px]'>
      <Canvas shadows> 
        <TextField theme='dark'/>
      </Canvas>
    </div>
    <Regular> 
      The Text Field is a 3D component that lets users enter and edit text 
      The Text Field allows users to enter their text into the 3D UI component
    </Regular>
    <Header text={'Basic TextField'}/>
    <Regular> The <InlineCode> Text Field </InlineCode> wrapper component comes with two themes: light (default) and dark </Regular>
    
    <CodeBlock codeString={codeExample}
      />

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
    <Callout> Note: <InlineCode> backgroundColor </InlineCode> will automatically darken <InlineCode> onFocus </InlineCode> to for an improved UI experience.</Callout>

    <Header text={'Fonts'}/>
    <Regular> 
      Alternative fonts can be provided to Text Field through the <InlineCode>font</InlineCode> prop. 

      The default font used is <InlineCode>Inter-bold</InlineCode>. Unlike your typical text field, this 3D Text Field requires access to the font <InlineCode>.ttf</InlineCode> file. To properly change the font, it is recommended that you upload the .<InlineCode>.ttf</InlineCode>  font file into a <InlineCode>font</InlineCode>  directory on your project’s root and pass the path to the <InlineCode>font</InlineCode>  prop. (e.g. <InlineCode>font=”fonts/Inter-Bold.ttf”</InlineCode> ).
    </Regular>

    <Header text={'Font Size'}/>
    <Regular> 
    The <InlineCode>fontSize</InlineCode> prop allows you to change the size of the 3D font on the Text Field. 

    Similarly to the <InlineCode>height</InlineCode> and <InlineCode>width</InlineCode> props, the <InlineCode>fontSize</InlineCode> represents the size and dimensions of the rendered 3D text on the canvas. The default fontSize is set to `1`.
    </Regular>

    <Header text={'Code Sample'}/>
    <CodeBlock codeString={example} enableSandbox={true} sandboxLink=''></CodeBlock>
    </>
  )
}