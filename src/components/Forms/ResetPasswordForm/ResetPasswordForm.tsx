import React, { useState } from 'react'
import { Button } from '../../../shared/Button/Button'
import { Input } from '../../../shared/Input/Input'
import { Label } from '../../../shared/Label/Label'
import { Container, Title, Form, FormWrapper } from '../Form.style'
import { useForm } from 'react-hook-form'
import { isInputFocus } from '../../../helpers/isInputFocus'
import { EMAIL_REGEX } from '../../../constants/constants'
import ErrorMessage from '../../Alert/Alert'

interface LoginData {
  email: string
}

interface ActiveField {
  email: boolean
}

const ResetPasswordForm: React.FC = () => {
  const [isActive, setIsActive] = useState<ActiveField>({
    email: false,
  })

  const { register, handleSubmit, errors } = useForm<LoginData>()

  const onSubmit = (data: any) => console.log(data)

  return (
    <Container>
      <Title>Reset Password</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <Input
            id="email"
            kind="medium"
            name="email"
            type="email"
            onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
            onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
            refForward={register({ required: true, pattern: EMAIL_REGEX })}
          />
          <Label htmlFor="email" kind="medium" isActive={isActive.email}>
            Email*
          </Label>
          {errors.email?.type === 'required' && <ErrorMessage type="Error" message="Email field is required" />}
          {errors.email?.type === 'pattern' && (
            <ErrorMessage type="Error" message="Please enter your email address in format: yourname@domena.com" />
          )}
        </FormWrapper>

        <Button kind="contain" category="secondary" corner>
          Reset
        </Button>
      </Form>
    </Container>
  )
}

export default ResetPasswordForm
