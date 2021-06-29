import React from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from '../../components/Forms/LoginForm/LoginForm'
import isAuthorized from '../../helpers/isAuthorized'

const Login: React.FC = () => {
  return isAuthorized() ? <Redirect to="/" /> : <LoginForm />
}

export default Login
