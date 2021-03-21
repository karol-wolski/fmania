import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import ResetPassword from './views/ResetPassword/ResetPassword'
import Register from './views/Register/Register'
import Breadcrumbs from './shared/Breadcrumbs/Breadcrumbs'
import { SITE_WITHOUT_BREADCRUMBS } from '../src/constants/constants'

const displayBreadcrumbs = () => {
  const windowLocationPathname = window.location.pathname
  const display = !SITE_WITHOUT_BREADCRUMBS.includes(windowLocationPathname)
  return display
}

const App = () => {
  const isBreadcrumbsShow = displayBreadcrumbs()
  return (
    <>
      <Router>
        <Navigation />
        <Header />
        {isBreadcrumbsShow && <Breadcrumbs />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reset" component={ResetPassword} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
