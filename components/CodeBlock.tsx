'use client';

import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84, okaidia, prism, dark, twilight, coy, tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism';


type codeBlockType = {
  children?: string;
  inline?: boolean;
}



export default function Overview({ children, inline }: codeBlockType ) {

  const inlineTrue = {
    paddingY: '4px',
    paddingX: '6px',
    display: 'inline',
    margin: '0px',
    fontSize: '14px',
  } as React.CSSProperties
    
  const inlineFalse = {
    margin: '0px',
    fontSize: '14px'
  } as React.CSSProperties
    
  const divInlineTrue = 'rounded-md overflow-hidden inline-block mx-2'
  const divInlineFalse = 'rounded-md overflow-hidden mb-2'

  return ( 
    <>
    <div className={inline ? divInlineTrue : divInlineFalse}>
    <SyntaxHighlighter language="javascript" wrapLines={true} style={synthwave84} customStyle={inline ? inlineTrue : inlineFalse }>
        {children}
    </SyntaxHighlighter>
    </div>
    </>
  )
}