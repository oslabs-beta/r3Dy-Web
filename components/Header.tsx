'use client'

import React from 'react'

type HeaderProps = {
    text?: string;
}

export default function Header( {text}: HeaderProps) {
  return (
    <h2 className='text-xl font-bold mb-4 mt-8 dark:text-white'>{ text ? text : 'Header'}</h2>
  )
}
