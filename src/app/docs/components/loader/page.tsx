import React from 'react'
import loader from 'public/loader.svg'
import Title from '../../../../../components/Title'

export default function Loader() {
  return (
    <>
    <Title title={'Loader'} icon={loader} altTag={'Loader Icon'} />
    </>
  )
}