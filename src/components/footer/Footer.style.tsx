import styled from 'styled-components'
import { Colors } from '../../shared/Colors'
const { grey600: background, grey800: CopyrightText, grey100: Border } = Colors

export const FooterWrapper = styled.div`
  max-width: 117rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const FooterInfoBox = styled.div`
  padding: 3.2rem 0;
  background-color: ${background};
`

export const WrapperInfoBox = styled(FooterWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const FooterLinks = styled.div`
  margin: 0 auto;
  padding: 6rem 1.5rem;
  max-width: 117rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`

export const Copyright = styled.span`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 5.5rem 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${CopyrightText};
`

export const FooterPaymentAndSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  border-top: 1px solid ${Border};
  border-bottom: 1px solid ${Border};

  @media (max-width: 640px) {
    ul:first-child {
      padding-bottom: 3rem;
    }
  }

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
