import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 117rem;
  padding: 0 1.5rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-gap: 3rem;
    grid-template-columns: 26.2rem 1fr;
  }
`

export const SectionTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2.2rem;
  font-weight: 500;
`
