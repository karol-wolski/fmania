import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 117rem;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    grid-gap: 3rem;
    grid-template-columns: 26.2rem 1fr;
  }
`
