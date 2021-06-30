import React, { useState, useEffect } from 'react'
import ProfileWithSidebar from '../../../templates/ProlileWithSidebar/ProfileWithSidebar'
import OrdersList from '../../../components/OrdersList/OrdersList'
import { fetchAsync } from '../../../helpers/fetch'
import { Span } from './Orders.style'
import { removeFromLocalStorage } from '../../../helpers/localStorage'
import { Redirect } from 'react-router-dom'

const Orders: React.FC = () => {
  const [orders, setOrders] = useState([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [inNotLogged, setIsNotLogged] = useState<boolean>(false)

  useEffect(() => {
    fetchAsync('user/orders', 'GET').then(response => {
      if (response.statusCode === 401) {
        setIsNotLogged(true)
        removeFromLocalStorage('authToken')
      } else {
        setOrders(response)
        setIsLoaded(true)
      }
    })
  }, [])
  return (
    <>
      {inNotLogged ? (
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
