import React from 'react'
import { Button } from '../../shared/LinkButton/LinkButton'
import { Wrapper, Desc, Image, Title } from './Banner.style'

interface BannerProps {
  id: number | string
  title: string
  buttonText: string
  imgLink: string
  siteLink: string
}

const Banner: React.FC<BannerProps> = ({ title, buttonText, imgLink, siteLink }) => {
  return (
    <Wrapper>
      <Image src={imgLink} alt={title} />
      <Desc>
        <Title>{title}</Title>
        <Button kind="outline" category="tertiary" link={siteLink}>
          {buttonText}
        </Button>
      </Desc>
    </Wrapper>
  )
}

export default Banner
