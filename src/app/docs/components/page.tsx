'use client';

import React from 'react'
import { Canvas } from '@react-three/fiber';
import Button from 'src/app/components/Button.tsx';
import Switch from 'src/app/components/Switch.tsx';
import TextField from 'src/app/components/TextField.tsx';
import Slider from 'src/app/components/Slider.tsx';
import Loader from 'src/app/components/Loader.tsx';
import LogoLoader from 'src/app/components/LogoLoader.tsx';
import { useState } from 'react';

export default function Components() {
  const [slider, setSlider] = useState(0)
  
  return ( 
    <section>

      <div className='mb-8'>
        <h3 className='font-extrabold text-xl mb-4'>Button</h3>
        <div className='w-full h-[300px] p-8 border border-[#3F37C9] bg-white rounded-md'>
          <Canvas shadows>
              <Button/>
          </ Canvas>
        </div>
      </div>

     <div className="mb-8">
      <h3 className='font-extrabold text-xl mb-4'>Switch</h3>
        <div className='w-full h-[300px] p-8 border border-[#3F37C9] bg-white rounded-md'>
          <Canvas shadows>
            <Switch />
          </Canvas>
        </div>
      </div>

     <div className="mb-8">
      <h3 className='font-extrabold text-xl mb-4'>Text Field</h3>
      <div className='w-full h-[300px] p-8 border border-[#3F37C9] bg-white rounded-md'>
        <Canvas>
          <TextField width={20} height={3}/>
        </Canvas> 
        </div>
      </div>

     <div className="mb-8">
       <h3 className='font-extrabold text-xl mb-4'>Slider</h3>
       <div className='w-full h-[300px] p-8 border border-[#3F37C9] bg-white rounded-md'>
        <Canvas 
          camera = { {
            near:.1,
            far:200,
            position: [0, 0, 6]
          } }
        >
          <Slider 
            onChange={setSlider}
            // maxValue={10}
            // steps={2}
            value={slider} 
          />
        </Canvas>
        </div>
       </div>

        <div className="mb-8">
         <h3 className='font-extrabold text-xl mb-4'>Loaders</h3>
          <div className='w-full p-8 border border-[#3F37C9] bg-white rounded-md'>
            <div className='flex flex-row h-[300px]'>
              <div>
              <Canvas>
                <Loader loader={1} />
              </Canvas>
              </div>
              <div>
              <Canvas>
                <Loader loader={2} rotationDirection={'positive'}/>
              </Canvas>
             </div>
             <div>
              <Canvas>
                <Loader loader={3} />
              </Canvas>
             </div>
          </div>
        </div>
       </div>
       
      </section>
  )
}
