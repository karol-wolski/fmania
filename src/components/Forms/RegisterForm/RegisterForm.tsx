import React, { useState, useRef } from 'react'
import { Button } from '../../../shared/Button/Button'
import { Input } from '../../../shared/Input/Input'
import { Label } from '../../../shared/Label/Label'
import { Container, Title, SubTitle, Form, FormWrapper, FormWrapperCheckbox } from '../Form.style'
import { useForm } from 'react-hook-form'
import { isInputFocus } from '../../../helpers/isInputFocus'
import { EMAIL_REGEX } from '../../../constants/constants'
import Alert from '../../Alert/Alert'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { fetchAsync } from '../../../helpers/fetch'

interface LoginData {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
}

interface ActiveField {
  firstName: boolean
  lastName: boolean
  email: boolean
  password: boolean
  passwordConfirm: boolean
}

const LoginForm: React.FC = () => {
  const [isActive, setIsActive] = useState<ActiveField>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    passwordConfirm: false,
  })
  const [backendErrorMessage, setBackendErrorMessage] = useState<string>()

  const { register, handleSubmit, errors, watch } = useForm<LoginData>()
  const password = useRef({})
  password.current = watch('password', '')

  const notify = () =>
    toast('Your account has been successfully created. You can log in now.', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'Toastify__toast--success',
    })

  const onSubmit = (data: any) => {
    fetchAsync('register', 'POST', data).then(response => {
      if (response.status) notify()
      if (response.error) setBackendErrorMessage(response.error)
    })
  }

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Title>Create New Customer Account</Title>
      <SubTitle>Personal Information</SubTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <Input
            kind="medium"
            name="firstName"
            type="text"
            onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
            onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
            refForward={register({ required: true, minLength: 3 })}
          />
          <Label kind="medium" isActive={isActive.firstName}>
            First Name*
          </Label>
        </FormWrapper>
        <FormWrapper>
          <Input
            kind="medium"
            name="lastName"
            type="text"
            onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
            onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
            onChange={e => isInputFocus(e, isActive, setIsActive, true)}
            refForward={register({ required: true, minLength: 2 })}
          />
          <Label kind="medium" isActive={isActive.lastName}>
            Last Name*
          </Label>
        </FormWrapper>
        <FormWrapper>
          <Input
            kind="medium"
            name="email"
            type="email"
            onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
            onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
            refForward={register({ required: true, pattern: EMAIL_REGEX })}
          />
          <Label kind="medium" isActive={isActive.email}>
            Email*
          </Label>
        </FormWrapper>
        <FormWrapperCheckbox>
          <Label kind="small" htmlFor="newsletter">
            <Input kind="small" type="checkbox" id="newsletter" name="newsletter" refForward={register()} />
            Sign up for Newsletter
          </Label>
        </FormWrapperCheckbox>
        <SubTitle>Sign in Information</SubTitle>
        <FormWrapper>
          <Input
            kind="medium"
            name="password"
            type="password"
            onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
            onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
            refForward={register({ required: true, minLength: 8 })}
          />
          <Label kind="medium" isActive={isActive.password}>
            Password*
          </Label>
        </FormWrapper>
        <FormWrapper>
          <Input
            kind="medium"
            name="passwordConfirm"
            type="password"
            onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
            onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
            refForward={register({
              required: true,
              minLength: 8,
              validate: value => value === password.current || 'The passwords do not match',
            })}
          />
          <Label kind="medium" isActive={isActive.passwordConfirm}>
            Confirm Password*
          </Label>
        </FormWrapper>
        {errors.firstName && <Alert type="Error" message="First Name is required" />}
        {errors.lastName && <Alert type="Error" message="Last Name is required" />}
        {errors.email?.type === 'required' && <Alert type="Error" message="Email is required" />}
        {errors.email?.type === 'pattern' && (
          <Alert type="Error" message="Please enter your email address in format: yourname@domena.com" />
        )}
        {errors.password?.type === 'required' && <Alert type="Error" message="Password is required" />}
        {errors.password?.type === 'minLength' && (
          <Alert type="Error" message="Password should have at least 8 characters" />
        )}
        {errors.passwordConfirm?.type === 'required' && <Alert type="Error" message="Confirm Password is required" />}
        {errors.passwordConfirm?.type === 'minLength' && (
          <Alert type="Error" message="Confirm Password should hae at least 8 characters" />
        )}
        {errors.passwordConfirm?.type === 'validate' && <Alert type="Error" message="Password do not match" />}
        {backendErrorMessage && <Alert type="Error" message={backendErrorMessage} />}
        <Button kind="contain" category="secondary" corner>
          Create an Account
        </Button>
      </Form>
    </Container>
  )
}

export default LoginForm
