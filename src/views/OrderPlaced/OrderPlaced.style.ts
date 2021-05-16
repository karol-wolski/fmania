import styled from 'styled-components'
import { Colors } from '../../shared/Colors'
const { black100: primary, grey400: secondary } = Colors

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 117rem;
  padding: 0 1.5rem 3rem;
`

export const Heading = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 3.4rem;
  font-weight: 700;
  text-align: center;
  color: ${primary};
`

export const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  margin: 0.5rem 0;
  color: ${primary};
`

export const ParagraphWithIcon = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  margin: 0.5rem 0;
  color: ${secondary};
`
