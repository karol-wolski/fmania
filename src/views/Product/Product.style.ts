import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 117rem;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 28.2rem calc(100% - 3rem - 28.2rem);
  grid-gap: 3rem;
  justify-content: space-between;
`

export const Column = styled.div`
  /* max-width: calc(100% - 28.2rem - 3rem); */
`
