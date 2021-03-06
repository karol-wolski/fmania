import React from 'react'
import InfoBox from './InfoBox/InfoBox'
import Links from './Links/Links'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoReturnUpBack } from 'react-icons/io5'
import { ImCancelCircle } from 'react-icons/im'
import {
  FooterWrapper,
  WrapperInfoBox,
  FooterInfoBox,
  FooterLinks,
  Copyright,
  FooterPaymentAndSocial,
} from './Footer.style'
import Newsletter from './Newsletter/Newsletter'
import SocialMedia from './SocialMedia/SocialMedia'
import Payment from './Payment/Payment'
import { quick_links, help, contact } from '../../shared/ArrayOfLinks'

const Footer: React.FC = () => {
  return (
    <>
      <FooterInfoBox>
        <WrapperInfoBox>
          <InfoBox icon={<HiOutlineLocationMarker />} desc="Track Your Orders" />
          <InfoBox icon={<IoReturnUpBack />} desc="Free & Easy Returns" />
          <InfoBox icon={<ImCancelCircle />} desc="Online Cancellations" />
        </WrapperInfoBox>
      </FooterInfoBox>
      <FooterWrapper>
        <FooterLinks>
          <Links sectionName="Quick Links" linkArray={quick_links} />
          <Links sectionName="Help" linkArray={help} />
          <Links sectionName="Contact us" linkArray={contact} />
          <Newsletter
            sectionName="Newsletter"
            desc="Our email subscribers get the inside scoop on new products, Promotions, Contests and more. Sign up, it's right thing to do."
          />
        </FooterLinks>

        <FooterPaymentAndSocial>
          <Payment />
          <SocialMedia />
        </FooterPaymentAndSocial>

        <Copyright>Copyright © 2018 eCommerce. All Rights Reserved.</Copyright>
      </FooterWrapper>
    </>
  )
}

export default Footer
