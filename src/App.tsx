import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Home from './views/Home/Home'

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
