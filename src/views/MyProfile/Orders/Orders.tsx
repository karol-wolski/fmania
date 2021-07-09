import React, { useState, useEffect, useContext } from 'react'
import ProfileWithSidebar from '../../../templates/ProlileWithSidebar/ProfileWithSidebar'
import OrdersList from '../../../components/OrdersList/OrdersList'
import { fetchAsync } from '../../../helpers/fetch'
import { Span } from './Orders.style'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import { Logout } from '../../../helpers/Logout'

const Orders: React.FC = () => {
  const [orders, setOrders] = useState([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)

  useEffect(() => {
    fetchAsync('user/orders', 'GET').then(response => {
      if (response.statusCode === 401) {
        Logout(setIsLoggedIn)
      } else {
        setOrders(response)
        setIsLoaded(true)
      }
    })
  }, [setIsLoggedIn])
  return (
    <>
      {!isLoggedIn ? (
        <Redirect to="/login" />
      ) : (
        isLoaded && (
          <ProfileWithSidebar title="Orders">
            {orders.length > 0 ? (
              <OrdersList orders={orders} />
            ) : (
              <>
                <Span>You do not have any orders!</Span>
                <Span> Do your first shopping :)</Span>
              </>
            )}
          </ProfileWithSidebar>
        )
      )}
    </>
  )
}

export default Orders
