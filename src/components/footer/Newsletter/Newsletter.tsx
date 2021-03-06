import React from 'react'
import Form from './Form/Form'
import { SectionName, Wrapper, Desc } from './Newsletter.style'

interface NewsletterProps {
  sectionName: string
  desc: string
}

const Newsletter: React.FC<NewsletterProps> = ({ sectionName, desc }) => {
  return (
    <Wrapper>
      <SectionName>{sectionName}</SectionName>
      <Desc>{desc}</Desc>
      <Form />
    </Wrapper>
  )
}

export default Newsletter
