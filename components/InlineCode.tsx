'use client'

import React from 'react'


type InlineCodeProps = {
    children?: string;
}

export default function InlineCode({children}:InlineCodeProps) {
  return (
    <p className='text-sm font-mono mx-[4px] px-[4px] py-[4px] bg-indigo-100 text-indigo-700 rounded-md inline-block dark:text-violet-200 dark:bg-slate-600'>{children}</p>
  )
}
