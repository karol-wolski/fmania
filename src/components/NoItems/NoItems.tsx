import React from 'react'
import IconRounded from '../../shared/IconRounded/IconRounded'
import { Text, Wrapper } from './NoItems.style'

interface Props {
  text: string
  icon?: any
}

const NoItems: React.FC<Props> = ({ text, icon = undefined }) => {
  return (
    <Wrapper>
      {icon !== undefined && <IconRounded>{icon}</IconRounded>}
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default NoItems
