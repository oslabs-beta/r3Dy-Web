import Image, { StaticImageData } from 'next/image'
import React, { ReactElement } from 'react'
import DefaultImage from '../public/headshot-garrett.png'
import GithubIcon from '../public/github.svg'
import LinkedinIcon from '../public/linkedin.svg'
import Link from 'next/link'

type ContributorType = {
    src?: StaticImageData;
    name?: string;
    title?: string;
    githubUrl?: string;
    linkedinUrl?: string;
}

export default function Contributor( {src, name, title, githubUrl, linkedinUrl}:ContributorType ) {
  return (
    <div className='flex items-center mb-[64px]'>
      <Image alt='Contributor Profile Image' src={src ? src : DefaultImage} width={150} height={150}/>
      <div>
        <h3 className='font-bold text-xl mb-2'>{name ? name : 'John Smith'}</h3>
        <p className='text-m mb-4'>{title ? title : 'Software Engineer'}</p>
        <div className='flex'>
          <Link className='mr-4 p-2 bg-white rounded-md hover:bg-slate-200' target='_blank' href={githubUrl ? githubUrl : 'https://github.com/oslabs-beta/r3Dy' }>
            <Image alt='Github Icon' src={GithubIcon} width={22} height={22} />
          </Link>
          <Link target='_blank' className='p-2 bg-white rounded-md hover:bg-slate-200' href={linkedinUrl ? linkedinUrl : 'https://www.linkedin.com/company/r3dyui/' }>
            <Image alt='Linkedin Icon' src={LinkedinIcon} width={22} height={22} />
          </Link>
        </div>
      </div>
    </div>
  )
}
