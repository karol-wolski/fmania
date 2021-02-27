import React from 'react'
import { Wrapper, Desc } from './InfoBox.style'

interface InfoBoxProps {
  icon: any
  desc: string
}

const InfoBox: React.FC<InfoBoxProps> = ({ icon, desc }) => {
  return (
    <Wrapper>
      {icon}
      <Desc>{desc}</Desc>
    </Wrapper>
  )
}

export default InfoBox
