import styled from 'styled-components'
import { Colors } from '../../shared/Colors'
const { grey400: base, black200: accent, grey600: accent2 } = Colors

type ButtonProps = {
  active: boolean
}

export const Wrapper = styled.section`
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 2.6rem;
  color: ${base};

  &:first-letter {
    text-transform: uppercase;
  }
`

export const Filter = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const FilterItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.2rem;
  border: 1px solid ${accent2};
  border-radius: 5px;
  padding: 0 1rem;

  @media (min-width: 1024px) {
    margin-right: 1rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

export const Label = styled.label`
  padding-right: 1rem;
  width: max-content;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  color: ${base};
`

export const Span = styled.span`
  padding-right: 1rem;
  width: max-content;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  color: ${base};
`

export const Select = styled.select`
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
`

export const Button = styled.button<ButtonProps>`
  color: ${props => (props.active ? accent : base)};
  border: none;
  font-size: 1.6rem;
  background-color: transparent;
  line-height: 0;

  &:hover {
    color: ${accent};
  }
`
