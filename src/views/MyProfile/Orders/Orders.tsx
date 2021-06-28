import React, { useState, useEffect } from 'react'
import ProfileWithSidebar from '../../../templates/ProlileWithSidebar/ProfileWithSidebar'
import OrdersList from '../../../components/OrdersList/OrdersList'
import { fetchAsync } from '../../../helpers/fetch'
import { Span } from './Orders.style'

const Orders: React.FC = () => {
  const [orders, setOrders] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetchAsync('user/orders', 'GET').then(response => {
      setOrders(response)
      setIsLoaded(true)
    })
  }, [])
  return (
    <>
      {isLoaded && (
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
      )}
    </>
  )
}

export default Orders
