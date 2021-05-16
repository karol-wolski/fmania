import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto 3rem auto;
  max-width: 117rem;
  padding: 0 1.5rem;
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
    grid-gap: 3rem;
  }
`
