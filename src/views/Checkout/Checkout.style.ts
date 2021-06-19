import styled from 'styled-components'
import { Colors } from '../../shared/Colors'
const { grey500: accent } = Colors

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
export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h2 {
    display: flex;
    align-items: center;
  }
`

export const Section = styled.section`
  padding: 0 3rem;
  border: 2px solid ${accent};
  margin: 1rem 0;
`

export const SectionInputRadio = styled.div`
  display: flex;
  flex-direction: column;
`

export const PersonalInfoForm = styled.section`
  display: grid;
  grid-column-gap: 1.5rem;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1.5rem;
`
