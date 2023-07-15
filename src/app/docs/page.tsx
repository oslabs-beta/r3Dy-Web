'use client';

import React from 'react'
import { CodeBlock,dracula } from "react-code-blocks";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Title from '../../../components/Title';
import BookIcon from 'public/book.svg'


export default function Overview() {


  return ( 
    <>
    <Title title='Overview' icon={BookIcon} altTag='Overview Icon'/>
    </>
  )
}