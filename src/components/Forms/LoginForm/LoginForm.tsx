import React, { useState, useContext } from 'react'
import { Button } from '../../../shared/Button/Button'
import { Button as LinkButton } from '../../../shared/LinkButton/LinkButton'
import { Input } from '../../../shared/Input/Input'
import { Label } from '../../../shared/Label/Label'
import { Container, Title, SubTitle, Form, LinkBtn, FormWrapper, Span, HorizontalLine } from '../Form.style'
import { useForm } from 'react-hook-form'
import { isInputFocus } from '../../../helpers/isInputFocus'
import { EMAIL_REGEX } from '../../../constants/constants'
import ErrorMessage from '../../Alert/Alert'
import { fetchAsync } from '../../../helpers/fetch'
import { addToLocalStorage } from '../../../helpers/localStorage'
import { Redirect } from 'react-router-dom'
import isAuthorized from '../../../helpers/isAuthorized'
import { UserContext } from '../../../context/UserContext'

interface LoginData {
  email: string
  password: string
}

interface ActiveField {
  email: boolean
  password: boolean
}

const LoginForm: React.FC = () => {
  const [isActive, setIsActive] = useState<ActiveField>({
    email: false,
    password: false,
  })

  const { register, handleSubmit, errors } = useForm<LoginData>()
  const [backendErrorMessage, setBackendErrorMessage] = useState<string>()
  const { setIsLoggedIn } = useContext(UserContext)

  const onSubmit = (data: any) => {
    fetchAsync('login', 'POST', data).then(response => {
      if (response.token) {
        addToLocalStorage('authToken', response.token)
        setIsLoggedIn((state: boolean) => !state)
      } else {
        setBackendErrorMessage(response.error)
      }
    })
  }

  return (
    <>
      {isAuthorized() ? (
        <Redirect to="/" />
      ) : (
        <Container>
          <Title>Customer Login</Title>
          <SubTitle>Registered Users</SubTitle>
          <Span>If you have an account, sign in with your email address.</Span>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormWrapper>
              <Input
                kind="medium"
                name="email"
                type="email"
                onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                refForward={register({ required: true, pattern: EMAIL_REGEX })}
              />
              <Label kind="medium" isActive={isActive.email}>
                Email*
              </Label>
            </FormWrapper>
            <FormWrapper>
              <Input
                kind="medium"
                name="password"
                type="password"
                onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                refForward={register({ required: true })}
              />
              <Label kind="medium" isActive={isActive.password}>
                Password*
              </Label>
              {errors.email?.type === 'required' && <ErrorMessage type="Error" message="Email field is required" />}
              {errors.email?.type === 'pattern' && (
                <ErrorMessage type="Error" message="Please enter your email address in format: yourname@domena.com" />
              )}
              {errors.password && <ErrorMessage type="Error" message="Password field is required" />}
            </FormWrapper>
            <LinkBtn to="/reset">Forgot Password</LinkBtn>
            {backendErrorMessage && <ErrorMessage type="Error" message={backendErrorMessage} />}
            <Button kind="contain" category="secondary" corner>
              Login
            </Button>
          </Form>

          <HorizontalLine />
          <Title>New Customer</Title>
          <Span>
            Creating an account has many benefits: check out faster, keep more than one address, track orders and more.
          </Span>
          <LinkButton kind="contain" category="primary" link="/register" corner>
            Create an Account
          </LinkButton>
        </Container>
      )}
    </>
  )
}

export default LoginForm
