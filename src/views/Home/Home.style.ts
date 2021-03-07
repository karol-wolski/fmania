import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 117rem;
  padding: 0 1.5rem;
`

export const BannerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  margin: 2rem 0;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
