'use client'

import React from 'react'
import Image from 'next/image'
import BoxIcon from 'public/box.svg'


type TitleProps = {
    title: string;
    icon: string;
    altTag: string;
}

export default function Title({ title, icon, altTag }: TitleProps) {
  return (
    <div className='flex items-center py-4 border-b border-gray-300 mb-8'>
        <Image src={icon ? icon : BoxIcon} alt={altTag ? altTag : 'Title Icon'} className='mr-4'/>
        <h1 className='text-2xl font-bold text-indigo-700'>{title ? title : 'Page Title'}</h1>
    </div>
  )
}