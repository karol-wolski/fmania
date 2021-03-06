import React from 'react'
import Pay from '../../../images/pay.png'
import American from '../../../images/american.png'
import Mastercard from '../../../images/mastercard.png'
import Visa from '../../../images/visa.png'
import Discover from '../../../images/discover.png'
import { List, ListItem, Img } from './Payment.style'

const Payment: React.FC = () => {
  return (
    <List>
      <ListItem>
        <Img src={Pay} alt="Logo Pay" />
      </ListItem>
      <ListItem>
        <Img src={American} alt="Logo American Express" />
      </ListItem>
      <ListItem>
        <Img src={Mastercard} alt="Logo MasterCard" />
      </ListItem>
      <ListItem>
        <Img src={Visa} alt="Logo Visa" />
      </ListItem>
      <ListItem>
        <Img src={Discover} alt="Logo Discover" />
      </ListItem>
    </List>
  )
}

export default Payment
