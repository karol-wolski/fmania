import styled from 'styled-components'
import { Colors } from '../../../shared/Colors'
import getZindex from '../../../helpers/z-index'
const { black400: text, grey400: background, grey700: inputPointer } = Colors

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Fieldset = styled.fieldset`
  width: 100%;
  border: 0;
  padding: 0;
  margin: 0;
`

export const PriceField = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
`

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 0.6rem;
  color: ${text};
`

export const Input = styled.input.attrs({ type: 'range' })`
  position: absolute;
  width: 100%;
  outline: 0;
  pointer-events: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &::-webkit-slider-thumb {
    position: relative;
    -webkit-appearance: none;
    height: 1rem;
    width: 2rem;
    margin-top: -2px;
    border: 1px solid ${background};
    background-color: ${inputPointer};
    cursor: pointer;
    pointer-events: all;
    z-index: ${getZindex('InputPointer')};
  }

  &::-moz-range-thumb,
  &::-ms-thumb {
    position: relative;
    appearance: none;
    height: 1rem;
    width: 2rem;
    margin-top: -3px;
    border: 1px solid ${background};
    background-color: ${inputPointer};
    cursor: pointer;
    pointer-events: all;
    z-index: ${getZindex('InputPointer')};
  }

  &::-webkit-slider-runnable-track {
    height: 0.6rem;
    cursor: pointer;
    background: ${background};
  }

  &::-moz-range-track,
  &::-ms-track {
    height: 0.6rem;
    cursor: pointer;
    background: ${background};
  }
`
