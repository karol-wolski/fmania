import React from 'react'
import { BsEnvelope } from 'react-icons/bs'
import { GiCheckMark } from 'react-icons/gi'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { GetUrlParam } from '../../helpers/getUrlParam'
import IconRounded from '../../shared/IconRounded/IconRounded'
import { Wrapper, Heading, Paragraph, ParagraphWithIcon } from './OrderPlaced.style'

const OrderPlaced: React.FC = () => {
  const query = GetUrlParam()
  const orderID = query.get('orderID')
  return (
    <Wrapper>
      <IconRounded>
        <GiCheckMark />
      </IconRounded>
      <Heading>Thank you for your order.</Heading>
      <Paragraph>Your order has been placed successfully.</Paragraph>
      <Paragraph> Order Number is: {orderID}</Paragraph>
      <ParagraphWithIcon>
        <IoDocumentTextOutline /> Invoice has been sent to your registered email id, after order is dispatched.
      </ParagraphWithIcon>
      <ParagraphWithIcon>
        <BsEnvelope /> You will received tracking details on your registered email id, after order is dispatched.
      </ParagraphWithIcon>
    </Wrapper>
  )
}

export default OrderPlaced
