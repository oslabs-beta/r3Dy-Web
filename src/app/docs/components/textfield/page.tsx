'use client'

import React from 'react'
import text from 'public/text.svg'
import Title from '../../../../../components/Title'
import Regular from '../../../../../components/Regular'
import Header from '../../../../../components/Header'
import CodeBlock from '../../../../../components/CodeBlock'

export default function TextField() {
  return (
    <>
    <Title title={'Text Field'} icon={text} altTag={'Text Icon'} />
    <Regular> 
      The Text Field is a 3D component that lets users enter and edit text 
      The Text Field allows users to enter their text into the 3D UI component
    </Regular>
    <Header text={'Basic TextField'}/>
    <Regular> The <CodeBlock inline> Text Field </CodeBlock> wrapper component comes with two themes: light (default) and dark </Regular>
    
    <CodeBlock>
      &lt;TextField theme=”light” /&gt;
      &lt;TextField theme=”dark” /&gt;
    </CodeBlock>

    <Header text={'Theme'}/>
    <Regular> 
      The <CodeBlock inline> Theme </CodeBlock> prop enables the ability to change the style of the Text Field to dark or light. 
      By default this is set to light. 
    </Regular>


    <Header text={'OnChange'}/>
    <Regular> 
      The <CodeBlock inline> OnChange </CodeBlock> prop takes a callback function. 
      <br/>
      This callback function is invoked each time a change is registered on the Text Field. By default an <CodeBlock inline> event </CodeBlock> object is provided as an argument to the callback function which provides access to various properties on regarding the Text Field. To access this event object properties, you can use <CodeBlock inline> event.currentTarget </CodeBlock>.
    </Regular>

    <Header text={'Color'}/>
    <Regular> 
      The <CodeBlock inline> color </CodeBlock> prop enables the ability to change the color of the display text within the Text Field when typed.
    </Regular>

    <Header text={'Width & Height'}/>
    <Regular> 
      The default <CodeBlock inline>width</CodeBlock> is set to <CodeBlock inline>15</CodeBlock> and the default height is set to <CodeBlock inline>3</CodeBlock>. Unlike <CodeBlock inline>pixels(px)</CodeBlock> on a screen. These number represents the size and dimensions of the rendered 3D component on the canvas.
    </Regular>


    <Header text={'Background Color'}/>
    <Regular> 
      The default <CodeBlock inline>backgroundColor</CodeBlock> prop enables the ability to change the background color of the text field. 

      This effect is currently only supported when a color code is provided for the <CodeBlock inline>backgroundColor</CodeBlock> prop (e.g. <CodeBlock inline>backgroundColor=”#F4FAFF”</CodeBlock>). This will be updated soon to support all color declarations (e.g. <CodeBlock inline>backgroundColor=”red”</CodeBlock>).
    </Regular>

    <Header text={'Fonts'}/>
    <Regular> 
      Alternative fonts can be provided to Text Field through the <CodeBlock inline>font</CodeBlock> prop. 

      The default font used is <CodeBlock inline>Inter-bold</CodeBlock>. Unlike your typical text field, this 3D Text Field requires access to the font <CodeBlock inline>.ttf</CodeBlock> file. To properly change the font, it is recommended that you upload the .<CodeBlock inline>.ttf</CodeBlock>  font file into a <CodeBlock inline>font</CodeBlock>  directory on your project’s root and pass the path to the <CodeBlock inline>font</CodeBlock>  prop. (e.g. <CodeBlock inline>font=”fonts/Inter-Bold.ttf”</CodeBlock> ).
    </Regular>

    <Header text={'Font Size'}/>
    <Regular> 
    The <CodeBlock inline>fontSize</CodeBlock> prop allows you to change the size of the 3D font on the Text Field. 

    Similarly to the <CodeBlock inline>height</CodeBlock> and <CodeBlock inline>width</CodeBlock> props, the <CodeBlock inline>fontSize</CodeBlock> represents the size and dimensions of the rendered 3D text on the canvas. The default fontSize is set to `1`.
    </Regular>

    </>
  )
}