import styled from 'styled-components'

export const Div = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  max-width: 53rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
