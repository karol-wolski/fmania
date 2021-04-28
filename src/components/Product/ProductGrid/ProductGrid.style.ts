import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 3rem;
  margin: 3rem 0;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
