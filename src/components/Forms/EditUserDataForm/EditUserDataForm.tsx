import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { EMAIL_REGEX } from '../../../constants/constants'
import { isInputFocus } from '../../../helpers/isInputFocus'
import { Button } from '../../../shared/Button/Button'
import { Input } from '../../../shared/Input/Input'
import { Label } from '../../../shared/Label/Label'
import Alert from '../../Alert/Alert'
import { FormWrapper } from '../Form.style'
import { Form } from './EditUserDataForm.style'
import { fetchAsync } from '../../../helpers/fetch'
import 'react-toastify/dist/ReactToastify.min.css'
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import { Logout } from '../../../helpers/Logout'

interface FormField {
  [firstName: string]: string
  lastName: string
  email: string
  telephone: string
}

interface ActiveField {
  [firstName: string]: boolean
  lastName: boolean
  email: boolean
  telephone: boolean
}

const EditUserDataForm = () => {
  const [isActive, setIsActive] = useState<ActiveField>({
    firstName: true,
    lastName: true,
    email: true,
    telephone: true,
  })

  const [user, setUser] = useState<FormField>({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
  })

  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
  const { register, handleSubmit, errors } = useForm<FormField>()
  const [backendErrorMessage, setBackendErrorMessage] = useState<string>()

  useEffect(() => {
    fetchAsync('user', 'GET').then(data => {
      if (data.statusCode === 401) {
        Logout(setIsLoggedIn)
      } else {
        setUser(data)
      }
    })
  }, [setIsLoggedIn])

  const notify = () =>
    toast('Your account has been successfully updated.', {
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
    fetchAsync('user', 'PUT', data).then(response => {
      if (response.status) notify()
      if (response.error) setBackendErrorMessage(response.error)
    })
  }
  return (
    <>
      {!isLoggedIn ? (
        <Redirect to="/login" />
      ) : (
        <>
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
          {user !== undefined && (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormWrapper style={{ gridArea: '1/1/1/1' }}>
                <Input
                  kind="medium"
                  name="firstName"
                  id="firstName"
                  type="text"
                  autoComplete="first-name"
                  onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                  onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                  onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                  refForward={register({ required: true, minLength: 3 })}
                  defaultValue={user.firstName}
                />
                <Label htmlFor="firstName" kind="medium" isActive={isActive.firstName}>
                  First Name*
                </Label>
                {errors.firstName && <Alert type="Error" message="First Name is required" />}
              </FormWrapper>
              <FormWrapper style={{ gridArea: '1/2/1/2' }}>
                <Input
                  kind="medium"
                  name="lastName"
                  id="lastName"
                  type="text"
                  autoComplete="family-name"
                  onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                  onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                  onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                  refForward={register({ required: true, minLength: 2 })}
                  defaultValue={user.lastName}
                />
                <Label htmlFor="lastName" kind="medium" isActive={isActive.lastName}>
                  Last Name*
                </Label>
                {errors.lastName && <Alert type="Error" message="Last Name is required" />}
              </FormWrapper>
              <FormWrapper style={{ gridArea: '2/1/2/1' }}>
                <Input
                  kind="medium"
                  name="email"
                  id="email"
                  type="email"
                  autoComplete="email"
                  onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                  onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                  onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                  refForward={register({ required: true, pattern: EMAIL_REGEX })}
                  defaultValue={user.email}
                />
                <Label htmlFor="email" kind="medium" isActive={isActive.email}>
                  Email*
                </Label>
                {errors.email?.type === 'required' && <Alert type="Error" message="Email is required" />}
                {errors.email?.type === 'pattern' && (
                  <Alert type="Error" message="Please enter your email address in format: yourname@domena.com" />
                )}
              </FormWrapper>
              <FormWrapper style={{ gridArea: '2/2/2/2' }}>
                <Input
                  kind="medium"
                  name="telephone"
                  id="telephone"
                  type="tel"
                  autoComplete="tel"
                  onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                  onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                  onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                  refForward={register({ required: true })}
                  defaultValue={user.telephone}
                />
                <Label htmlFor="telephone" kind="medium" isActive={isActive.telephone}>
                  Telephone*
                </Label>
                {errors.telephone && <Alert type="Error" message="Telephone number is required" />}
              </FormWrapper>
              <Button kind="contain" category="primary">
                Save
              </Button>
              {backendErrorMessage && <Alert type="Error" message={backendErrorMessage} />}
            </Form>
          )}
        </>
      )}
    </>
  )
}

export default EditUserDataForm
