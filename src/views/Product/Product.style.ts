import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 117rem;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  justify-content: space-between;

  @media (min-width: 568px) {
    grid-template-columns: 28.2rem calc(100% - 3rem - 28.2rem);
  }
`
