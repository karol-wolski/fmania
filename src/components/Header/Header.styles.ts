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
  button:first-of-type {
    margin-right: 0.5rem;
  }

  @media (max-width: 767px) {
    order: 2;
  }
`

export const Form = styled.form`
  position: relative;
  width: calc(100% - 14.5rem - 24.5rem); // !00% - image - buttons
  margin-left: 1.5rem;

  @media (max-width: 767px) {
    width: 100%;
    order: 3;
    margin-left: 0;
    margin-top: 1.5rem;
  }

  @media (min-width: 1140px) {
    width: 69.5rem;
  }
`

export const Input = styled.input`
  height: 3.5rem;
  width: 100%;
  padding: 0 1rem;
  font-size: 1.4rem;
`

export const FormBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 3rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`
