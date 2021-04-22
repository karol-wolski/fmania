import styled from 'styled-components'
import { Colors } from '../Colors'
const { grey400: MainColor } = Colors

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  font-size: 1.3rem;
  border: 1px solid ${MainColor};
  color: ${MainColor};
  padding: 1rem;
`
