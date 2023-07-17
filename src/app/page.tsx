'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber';
import { MeshBasicMaterial, MeshStandardMaterial, MeshMatcapMaterial} from 'three';
import { Loader, Switch, Slider, TextField, Button } from 'r3dy';
export default function Home() {
  
  const copyClipboard = (): void => {
    navigator.clipboard.writeText('npm install r3dy');
  };
  
  
  return (
    <section className='flex h-full w-full align-center justify-center md:py-36 py-16 md:px-8 overflow-hidden'>
      <div className="w-full md:flex justify-center block md:pr-8 p-4 z-10">
        <div className="p-4 max-w-[1024px]">
          <div className='flex justify-center md:justify-start'>
            <Image width={120} height={30} className='mb-5' src='./logo-dark.svg' alt='r3dy-logo-dark-full'/>
          </div>
          <h1 id='main-header' className="text-5xl font-black text-center md:text-left mb-8">Interactive 3D React UI components.</h1>
          <p id='landing-text' className="text-center md:text-left ">R3DY UI is a growing suite of 3D components, built to help take your existing 2D projects into 3D.</p>
          <div className="md:my-8 mt-8 md:block flex flex-col items-center">
            <button className="font-mono flex items-center py-2 px-4 bg-slate-200 rounded-md text-sm mb-7 ease-linear transition duration-150 hover:bg-slate-300" onClick={copyClipboard}>
              npm install r3dy 
              <Image src={'/copy.svg'} alt='copy-icon' width={15} height={5} className='ml-2'/>
            </button>
            <Link href={'/docs'}  className="bg-indigo-700 py-2 px-8 text-white font-bold rounded-md text-base ease-linear transition duration-150 hover:bg-indigo-600">
              Get Started
            </Link>
          </div>
        </div>
        <div className="md:w-[512px] md:h-[512px] w-full h-[250px]">
          <Canvas>
            <Loader color='purple' matcapIndex={40} rotationAxis='x'/>
          </Canvas>
        </div>
      </div>
      <div className='absolute w-screen h-screen'> 
      <Canvas > 
          <mesh position-y={2} position-z={-1} rotation-x={-1}>
            <planeGeometry args={[20,20,20,20]} />
            <meshBasicMaterial wireframe={true} color='#DDDFE1'/>
          </mesh>
      </Canvas>
      </div>
    </section>
  )
}