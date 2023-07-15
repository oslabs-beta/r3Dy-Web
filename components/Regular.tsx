'use client'

import React, { ReactNode } from 'react'

type RegularProps = {
    children?: ReactNode;
}

export default function Regular( {children}:RegularProps) {
  return (
    <div className='mb-2'>{ children }</div>
  )
}
