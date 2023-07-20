'use client';
import Image, { StaticImageData } from 'next/image'
import React, { ReactElement } from 'react'
import DefaultImage from '../public/headshot-garrett.png'
import GithubIcon from '../public/github.svg'
import GithubIconWhite from '../public/github-white.svg'
import LinkedinIcon from '../public/linkedin.svg'
import LinkedinIconWhite from '../public/linkedin-white.svg'
import Link from 'next/link'
import { useSelector } from 'react-redux';

import { store } from '../src/app/store/store'
import { RootState } from '../src/app/store/store'


type ContributorType = {
    src?: StaticImageData;
    name?: string;
    title?: string;
    githubUrl?: string;
    linkedinUrl?: string;
}

export default function Contributor( {src, name, title, githubUrl, linkedinUrl}:ContributorType ) {
  const darkModeState = useSelector((state:RootState) => state.darkMode.value);

  return (
    <div className='flex items-center mb-[64px] mx-[32px]'>
      <Image alt='Contributor Profile Image' src={src ? src : DefaultImage} width={150} height={150}/>
      <div>
        <h3 className='basic-transition font-bold text-xl mb-2 dark:text-white'>{name ? name : 'John Smith'}</h3>
        <p className='basic-transition text-sm mb-4 dark:text-white'>{title ? title : 'Software Engineer'}</p>
        <div className='flex'>
          <Link className='nav-link mr-[1px] p-2 bg-white rounded-md' target='_blank' href={githubUrl ? githubUrl : 'https://github.com/oslabs-beta/r3Dy' }>
            <Image alt='Github Icon' src={darkModeState ? GithubIconWhite : GithubIcon} width={22} height={22} />
          </Link>
          <Link target='_blank' className='nav-link mr-4 p-2 bg-white rounded-md' href={linkedinUrl ? linkedinUrl : 'https://www.linkedin.com/company/r3dyui/' }>
            <Image alt='Linkedin Icon' src={darkModeState ? LinkedinIconWhite : LinkedinIcon} width={22} height={22} />
          </Link>
        </div>
      </div>
    </div>
  )
}
