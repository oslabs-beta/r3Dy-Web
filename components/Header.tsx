'use client'

import React from 'react'

type HeaderProps = {
    text?: string;
}

export default function Header( {text}: HeaderProps) {
  return (
    <h2 className='text-xl font-bold mb-4'>{ text ? text : 'Header'}</h2>
  )
}