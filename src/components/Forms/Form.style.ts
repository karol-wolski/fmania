import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../shared/Colors'
const {
  grey600: bgColor,
  grey500: Border,
  grey300: Desc,
  black400: TitleColor,
  blue200: LinkColor,
  grey700: Horizontal,
} = Colors

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 75.2rem;
  background-color: ${bgColor};
  margin: 10rem auto;
  padding: 4rem 0;
  border: 1px solid ${Border};
`

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;
  color: ${TitleColor};
`

export const SubTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${TitleColor};
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  padding: 0 1.5rem;

  @media (min-width: 640px) {
    width: 34rem;
  }
`

export const LinkBtn = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${LinkColor};
  display: block;
  margin-bottom: 3rem;
`

export const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${Desc};
  width: 100%;
  padding: 0 1.5rem 2rem;
  text-align: center;
  line-height: 1.6;
  @media (min-width: 640px) {
    width: 42.6rem;
  }
`

export const FormWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
`

export const FormWrapperCheckbox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  label {
    position: static;
    display: flex;
    align-items: center;
  }
`

export const HorizontalLine = styled.span`
  border-top: 1px solid ${Horizontal};
  width: 100%;
  padding: 0 1.5rem;
  margin: 5rem 0 3rem;
  @media (min-width: 640px) {
    width: 42.6rem;
  }
`
