import React from 'react'
import { LinkBtn } from '../../../shared/LinkButton/LinkButton.style'
import { Desc, DescWrapper, Image, SubTitle, Title, Wrapper } from './Slide.styles'

export interface SlideProps {
  title: string
  subtitle: string
  imgLink: string
  link: string
}

const Slide: React.FC<SlideProps> = ({ title, subtitle, link, imgLink }) => {
  return (
    <Wrapper>
      <Image src={imgLink} alt={title} />
      <DescWrapper>
        <Desc>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <LinkBtn kind="contain" category="secondary" href={link}>
            View Products
          </LinkBtn>
        </Desc>
      </DescWrapper>
    </Wrapper>
  )
}

export default Slide
