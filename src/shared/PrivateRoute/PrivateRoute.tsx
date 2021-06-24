import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isAuthorized from '../../helpers/isAuthorized'

interface Props {
  component: any
  path: string
  exact?: boolean
}

const onRouteChange = (path: string) => {
  sessionStorage.setItem('lastAppLocation', path)
}

const PrivateRoute: React.FC<Props> = ({ component: Component, path, exact }) => {
  onRouteChange(path)

  return (
    <Route
      {...exact}
      {...path}
      render={props =>
        isAuthorized() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
