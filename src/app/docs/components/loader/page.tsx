'use client'

import React from 'react'
import loader from 'public/loader.svg'
import loaderWhite from 'public/loader-white.svg'
import Title from '../../../../../components/Title'
import Regular from '../../../../../components/Regular'
import Header from '../../../../../components/Header'
import Callout from '../../../../../components/Callout'
import CodeBlock from '../../../../../components/CodeBlock'
import InlineCode from '../../../../../components/InlineCode'
import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber'
import { Loader } from 'r3dy'


const example1: string  = 
`<Loader theme="light" />
<Loader theme="dark" />
`

const example2: string = 
`import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "r3dy";

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://example.com/");
        setData(response);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return !isLoading ? (
    <div>{data}</div>
  ) : (
    <div className="loader">
      <Canvas>
        <Loader color="red" rotationAxis="y" />
      </Canvas>
    </div>
  );
}`



export default function LoaderDoc() {

  const darkModeState = useSelector((state) => state.darkMode.value);
  return (
    <>
    <Title title={'Loader'} icon={darkModeState ? loaderWhite : loader} altTag={'Loader Icon'} />
  
    <div className='flex justify-around align-center py-7'>
        <div className="w-64 h-64">
        <Canvas>
            <Loader model={1} color='lightblue' scale={1.03}/>
        </Canvas>
        </div>
        <div className="w-64 h-64">
        <Canvas>
          <Loader model={2} color='white' />
        </Canvas>
        </div>
        <div className="w-64 h-64">
        <Canvas>
          <Loader model={3} color='lightblue' />
        </Canvas>
        </div>
      </div>

    <Regular> 
      The Loader component is a 3D loading animation that comes standard
      with three different models that can be easily dropped into your project.
    </Regular>
    <Header text={'3D Loader'}/>
    <Regular> The <InlineCode> 3D Loader </InlineCode> component comes with two themes: light (default) and dark </Regular>
    
    <CodeBlock codeString={example1} />
   
    <Header text={'Color'}/>
    <Regular> 
      With the <InlineCode> color </InlineCode> prop, you have the power to define the color of your 3D model.
  </Regular>

    <Header text={'Scale'}/>
    <Regular> 
      By using the <InlineCode> scale </InlineCode> prop, you can enter numerical values that determine the model's size.
    </Regular>
    <Header text={'Rotation Axis and Direction'}/>
    <Regular> 
    Specify the model's rotation axis (x, y, or z) with the <InlineCode>rotationAxis</InlineCode> prop. Use the <InlineCode>rotationDirection</InlineCode>  prop to set the spin direction to either 'positive' or 'negative'.
    </Regular>

    <Header text={'Animation and Speed'}/>
    <Regular> 
      Set the <InlineCode>easeAnimation </InlineCode> prop to true to enable a easing spinning animation. Control the model's rotation speed by inputting numerical values into the <InlineCode>speed</InlineCode> prop.
    </Regular>

    <Header text={'Theme and Material'}/>
    <Regular> 
    Change the model's default color and material with the <InlineCode>theme</InlineCode> prop by choosing either 'dark' or 'light'. For more customization, use the <InlineCode>material</InlineCode> prop to pass any ThreeJS material.
    </Regular>

    <Header text={'Wireframe and Matcap'}/>
    <Regular> 
    The <InlineCode>wireframe</InlineCode> prop, when set to true, enables wireframe rendering for the model (If applicable). Use the <InlineCode>matcapIndex</InlineCode> and <InlineCode>matcapSize</InlineCode> props to apply matcaps with the <InlineCode>useMatcapTexture</InlineCode> function from React-Three-Drei.
    </Regular>

    <Header text={'Loader Type'}/>
    <Regular> 
    The model prop determines the specific child loader component to be rendered. It currently accepts an integer between 1 and 3, with 1 being the default.
    <CodeBlock codeString='<Loader model={2} />'/>
    </Regular>

    <Header text={'Code Sample'}/>
    <Regular> 
    Below is an example use of the 3D Loader component:

    <CodeBlock codeString={example2} />

    </Regular>

    <Callout>
    Note: The easing animation feature is currently in an experimental phase, and it may behave unpredictably if rendered for a long time.
      </Callout>
      <Callout>
      Note: You can directly import specific loader models like <InlineCode>HexagonLoader</InlineCode>, <InlineCode>ChipLoader</InlineCode>, and <InlineCode>MeshLoader</InlineCode> for additional customization options without supplying the <InlineCode>model</InlineCode> prop.
      </Callout>

    </>
  )
}