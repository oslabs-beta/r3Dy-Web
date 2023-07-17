import React from 'react'
import button from 'public/button.svg'
import Title from '../../../../../components/Title'
import CodeBlock from '../../../../../components/CodeBlock'
import Header from '../../../../../components/Header'
import Regular from '../../../../../components/Regular'

export default function Button() {
  return (
    <>
    <Title title={'Button'} icon={button} altTag={'Button Icon'} />
    <CodeBlock codeString={`console.log('Hello World!')`}/>
    </>
  )
}
