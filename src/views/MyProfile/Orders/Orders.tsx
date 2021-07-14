import React, { useState, useEffect, useContext } from 'react'
import ProfileWithSidebar from '../../../templates/ProlileWithSidebar/ProfileWithSidebar'
import OrdersList from '../../../components/OrdersList/OrdersList'
import { fetchAsync } from '../../../helpers/fetch'
import { Span } from './Orders.style'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import { Logout } from '../../../helpers/Logout'
import Spinner from '../../../shared/Spinner/Spinner'

const Orders: React.FC = () => {
  const [orders, setOrders] = useState([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)

  useEffect(() => {
    fetchAsync('user/orders', 'GET').then(response => {
      if (response.statusCode === 401) {
        Logout(setIsLoggedIn)
      } else {
        setOrders(response)
        setIsLoaded(state => !state)
        setIsLoading(state => !state)
      }
    })
  }, [setIsLoggedIn])
  return (
    <>
      {!isLoggedIn ? (
        <Redirect to="/login" />
      ) : (
        <ProfileWithSidebar title="Orders">
          <Spinner isLoading={isLoading} />
          {isLoaded &&
            (orders.length > 0 ? (
              <OrdersList orders={orders} />
            ) : (
              <>
                <Span>You do not have any orders!</Span>
                <Span> Do your first shopping :)</Span>
              </>
            ))}
        </ProfileWithSidebar>
      )}
    </>
  )
}

export default Orders
