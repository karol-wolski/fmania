import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 3rem;
  margin: 3rem 0;

  @media (min-width: 815px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1048px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
