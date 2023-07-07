'use client';

import React from 'react'
import { CodeBlock,dracula } from "react-code-blocks";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Docs() {

  
  // / structure
  //    Name of Component
  //    How to Import Your Component
  //    Example of Props it Accepts
  //    Example Code of Implementation

  const buttonName = '3D Button'
  const loaderName = '3D Loader'
  const textFieldName = '3D Text Field'
  const switchName = '3D Switch'

  const buttonImportExample =`import { Button } from 'r3dy';`
  const loaderImportExample =`import { Loader } from 'r3dy';`
  const textFieldImportExample =`import { TextField } from 'r3dy';`
  const switchImportExample =`import { Switch } from 'r3dy';`
  
  const buttonPropsExample = `  scale: number, color: string, hoverColor: string, text: string, fontSize: number, fontColor: string, handleClick: function`;
  const loaderPropsExample = `  color: string, scale: number, rotationAxis: x/y/z, rotationDirection: positive/negative, 
  fancyAnimation: true/false, speed: number, material: (Any ThreeJS material), wireframe: true/false`;
  const switchPropsExample = `  color: string, scale: number, callback: function`;
  const textFieldPropsExample = `  color: string, width: number, height: number, backgroundColor: string, text: string, font: string, onChange: function`;

  const buttonExampleCode = `export default function MyComponent(){ 
    return (
      {data ? data : <Button />}
      )
    };`;
  const loaderExampleCode = `export default function MyComponent(){ 
    return (
      {data ? data : <Loader />}
      )
    };`;
    const switchExampleCode = `export default function MyComponent(){ 
      return (
        {data ? data : <Switch />}
        )
      };`;
    const textFieldExampleCode = `export default function MyComponent(){ 
      return (
        <TextField />
        )
      };`;

  const sliderName = '3D Slider'
  
  const sliderImportExample = `import {Slider} from 'r3ds'`
  const sliderPropsExample = 'onChange: function, value: number, max: number, steps:number'

  const sliderExampleCode = `export default function myComponent(){
  return(
    <Slider />
  )}`



  return ( 
    <>
      {/* BUTTON */}
      <div className='mb-10'>
      <div>
        <h1 className='font-extrabold text-xl mb-4'>{buttonName}</h1>
        </div>
        <div>
        <h1 className='font-medium text-l'>How to Import</h1>
   <SyntaxHighlighter language="javascript" style={okaidia}>
      {buttonImportExample}
    </SyntaxHighlighter>
    </div>
    <div>
    <h1 className='font-medium text-l'>Accepted Props</h1>
    <SyntaxHighlighter language="javascript" style={okaidia}>
      {buttonPropsExample}
    </SyntaxHighlighter>
    </div>
    <div>
    <h1 className='font-medium text-l'>Code Example</h1>
    <SyntaxHighlighter language="javascript" style={okaidia}>
      {buttonExampleCode}
    </SyntaxHighlighter>
    </div>
    </div>
    {/* LOADER */}
    <div className='mb-10'>
      <div>
        <h1 className='font-extrabold text-xl mb-4'>{loaderName}</h1>
        </div>
        <div>
        <h1>How to Import</h1>
   <SyntaxHighlighter language="javascript" style={okaidia}>
      {loaderImportExample}
    </SyntaxHighlighter>
    </div>
    <div>
    <h1 className='font-medium text-l'>Accepted Props</h1>
    <SyntaxHighlighter language="javascript" style={okaidia}>
      {loaderPropsExample}
    </SyntaxHighlighter>
    </div>
    <div>
    <h1 className='font-medium text-l'>Code Example</h1>
    <SyntaxHighlighter language="javascript" style={okaidia}>
      {loaderExampleCode}
    </SyntaxHighlighter>
    </div>
    </div>
    {/* SLIDER */}
    <div className='mb-10'>
  <div>
    <h1 className='font-extrabold text-xl mb-4'>{sliderName}</h1>
    </div>
    <div>
    <h1 className='font-medium text-l'>How to Import</h1>
<SyntaxHighlighter language="javascript" style={okaidia}>
  {sliderImportExample}
</SyntaxHighlighter>
</div>
<div>
<h1 className='font-medium text-l'>Accepted Props</h1>
<SyntaxHighlighter language="javascript" style={okaidia}>
  {sliderPropsExample}
</SyntaxHighlighter>
</div>
<div>
<h1 className='font-medium text-l'>Code Example</h1>
<SyntaxHighlighter language="javascript" style={okaidia}>
  {sliderExampleCode}
</SyntaxHighlighter>
</div>
</div>
    {/* SWITCH */}
    <div className='mb-10'>
  <div>
    <h1 className='font-extrabold text-xl mb-4'>{switchName}</h1>
    </div>
    <div>
    <h1>How to Import</h1>
<SyntaxHighlighter language="javascript" style={okaidia}>
  {switchImportExample}
</SyntaxHighlighter>
</div>
<div>
<h1 className='font-medium text-l'>Accepted Props</h1>
<SyntaxHighlighter language="javascript" style={okaidia}>
  {switchPropsExample}
</SyntaxHighlighter>
</div>
<div>
<h1 className='font-medium text-l'>Code Example</h1>
<SyntaxHighlighter language="javascript" style={okaidia}>
  {switchExampleCode}
</SyntaxHighlighter>
</div>
</div>
    {/* TEXT FIELD */}
    <div className='mb-10'>
   <div>
     <h1 className='font-extrabold text-xl mb-4'>{textFieldName}</h1>
   </div>
     <div>
      <h1 className='font-medium text-l'>How to Import</h1>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {textFieldImportExample}
        </SyntaxHighlighter>
  </div>
  <div>
    <h1 className='font-medium text-l'>Accepted Props</h1>
    <SyntaxHighlighter language="javascript" style={okaidia}>
      {textFieldPropsExample}
    </SyntaxHighlighter>
 </div>
 <div>
    <h1 className='font-medium text-l'>Code Example</h1>
    <SyntaxHighlighter language="javascript" style={okaidia}>
      {textFieldExampleCode}
    </SyntaxHighlighter>
    </div>
 </div>
  </>
  )
}