import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Header />
        <Footer />
      </Router>
    </>
  )
}

export default App
