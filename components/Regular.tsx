'use client'

import React, { ReactNode } from 'react'

type RegularProps = {
    children?: ReactNode;
}

export default function Regular( {children}:RegularProps) {
  return (
    <div className='mb-2 align-middle inline-block leading-6 dark:text-white'>{ children }</div>
  )
}
