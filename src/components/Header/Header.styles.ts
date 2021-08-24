import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  max-width: 117rem;
  margin: 3rem auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const Image = styled.img`
  transform: scale(1.25);
  padding-left: 1.2rem;

  @media (max-width: 767px) {
    order: 1;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  button:first-of-type,
  a:first-of-type {
    margin-right: 0.5rem;
  }

  @media (max-width: 767px) {
    order: 2;
  }
`
