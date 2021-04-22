import styled from 'styled-components'
import { Colors } from '../../../shared/Colors'
import Textarea from '../../../shared/Textarea/Textarea'
const { black400: TitleColor } = Colors

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${TitleColor};
`

export const TextArea = styled(Textarea)`
  margin: 3rem 0 2rem 0;
`
