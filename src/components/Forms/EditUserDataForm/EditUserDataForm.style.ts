import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-column-gap: 1.5rem;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, 1fr);
  margin: 1.5rem auto;
  padding: 1.5rem 0;

  button {
    justify-self: start;
  }
`
