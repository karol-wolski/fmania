import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import ResetPassword from './views/ResetPassword/ResetPassword'
import Register from './views/Register/Register'

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Header />
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
