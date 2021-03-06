import React from 'react'
import { useForm } from 'react-hook-form'
import { Input, Form, Label, Button } from './Form.style'
import { IoIosSend } from 'react-icons/io'

interface FormInput {
  Email: string
}

const FormNewsletter: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<FormInput>()
  const onSubmit = (data: FormInput) => console.log(data)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>Enter Your Email</Label>
      <Input
        name="Email"
        ref={register({
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      {errors.Email?.type === 'required' && 'Email is required field'}
      {errors.Email?.type === 'pattern' && 'Please enter your email address in format: yourname@domena.com'}
      <Button type="submit">
        <span className="sr-only">Send</span>
        <IoIosSend />
      </Button>
    </Form>
  )
}

export default FormNewsletter
