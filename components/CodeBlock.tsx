'use client';
import Image from 'next/image'

import React, {ReactNode, useState} from 'react'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { synthwave84, okaidia, prism, dark, twilight, coy, tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type codeBlockType = {
  codeString: string;
  enableSandbox?: boolean;
  sandboxLink?: string;
}

export default function Overview({ codeString, enableSandbox, sandboxLink }: codeBlockType ) {

  const [copyStatus, setCopyStatus] = useState(false);

  return ( 
    <>
    <div>
      <div className='max-w-2x1 min-w-[15rem] bg-[#3a404d] rounded-md overflow-hidden'>
        <div className='flex justify-between px-4 text-white text-xs item-center mt-3'>
          <p className='text-sm mt-1'>Example</p>
          <div className='flex w-full h-full justify-end'>  
            { !copyStatus ? (

              <button className='mr-4 mb-3 inline-flex items-center gap-1' onClick={() => {
                navigator.clipboard.writeText(codeString)
                setCopyStatus(true)
                setTimeout(() => {
                  setCopyStatus(false)
                }, 3000)
                }}>
                <span className='text-base mt-1'>
                <Image src={'/copy-white.svg'} alt='copy-icon' width={16} height={16} className='ml-2 mb-1'/>
                </span>
                Copy Code
                </button>
            ) : (
              <button className='mr-4 mb-3 inline-flex items-center gap-1'>
              <span className='text-base mt-1'>
              <Image src={'/checkmark-white.svg'} alt='checkmark-icon' width={16} height={16} className='ml-2 mb-1'/>
              </span>
              Copied!
              </button>
            )
            }
            { enableSandbox && 
              <a href={sandboxLink} target='_blank' className='mb-3 inline-flex items-center gap-1'><Image width={18} height={18} src='/codesandbox.svg' alt='codesandbox-icon'/>
                Open Sandbox
              </a> 
            }
          </div>
        </div>
    <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{padding: '25px'}} wrapLongLines={true}>
        {codeString}
    </SyntaxHighlighter>
    </div>
    </div>
    </>
  )
}