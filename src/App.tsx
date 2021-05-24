import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import ResetPassword from './views/ResetPassword/ResetPassword'
import Register from './views/Register/Register'
import Breadcrumbs from './shared/Breadcrumbs/Breadcrumbs'
import { SITE_WITHOUT_BREADCRUMBS } from '../src/constants/constants'
import Product from './views/Product/Product'
import ProductDetail from './views/ProductDetail/ProductDetail'
import Cart from './views/Cart/Cart'
import OrderPlaced from './views/OrderPlaced/OrderPlaced'

const displayBreadcrumbs = () => {
  const windowLocationPathname = window.location.pathname
  const display = !SITE_WITHOUT_BREADCRUMBS.includes(windowLocationPathname)
  return display
}

const App = () => {
  const isBreadcrumbsShow = displayBreadcrumbs()
  return (
    <>
      <Router basename={process.env.REACT_APP_BASENAME}>
        <Helmet>
          <title>Fmania</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
        </Helmet>
        <Navigation />
        <Header />
        {isBreadcrumbsShow && <Breadcrumbs />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reset" component={ResetPassword} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/orderplaced" component={OrderPlaced} />
          <Route exact path="/:gender/product-:product" component={ProductDetail} />
          <Route exact path="/:gender" component={Product} />
          <Route exact path="/:gender/:category" component={Product} />
          <Route exact path="/:gender/:category/product-:product" component={ProductDetail} />
          <Route exact path="/:gender/:category/:subcategory" component={Product} />
          <Route exact path="/:gender/:category/:subcategory/product-:product" component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
