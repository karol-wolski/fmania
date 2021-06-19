import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import CartPriceDetail from '../../components/CartPriceDetail/CartPriceDetail'
import CartProductList from '../../components/CartProductList/CartProductList'
import { FormWrapper } from '../../components/Forms/Form.style'
import { EMAIL_REGEX } from '../../constants/constants'
import { isInputFocus } from '../../helpers/isInputFocus'
import { getFromLocalStorage, removeFromLocalStorage } from '../../helpers/localStorage'
import { Button } from '../../shared/Button/Button'
import { Input } from '../../shared/Input/Input'
import { Label } from '../../shared/Label/Label'
import { InputRadio } from '../../shared/InputRadio/InputRadio'
import { Section, PersonalInfoForm, SectionHeader, Wrapper, SectionInputRadio } from './Checkout.style'
import Alert from '../../components/Alert/Alert'
import { updateProductQuantity } from '../../shared/updateProductQuantity'
import { removeProduct } from '../../shared/removeProduct'
import { useLastLocation } from 'react-router-last-location'
import { Redirect } from 'react-router-dom'
import { fetchAsync } from '../../helpers/fetch'

interface Form {
  firstName: string
  lastName: string
  email: string
  telephone: string
  country: string
  city: string
  state: string
  zipCode: string
  address: string
  delivery: string
  payment: string
}

interface ActiveField {
  firstName: boolean
  lastName: boolean
  email: boolean
  telephone: boolean
  country: boolean
  city: boolean
  state: boolean
  zipCode: boolean
  address: boolean
}

type Product = {
  id: number | string
  name: string
  image: string
  color: string
  size: string | number
  price: number
  quantity: number
  code: string
}

const Checkout: React.FC = () => {
  const lastLocation = useLastLocation()
  const lsKeyName = lastLocation?.pathname === '/cart' ? 'cart' : 'buyNow'
  const [products, setProducts] = useState(getFromLocalStorage(lsKeyName))
  const [deliveryPrice, setDeliveryPrice] = useState(0)
  const [orderNumber, setOrderNumber] = useState(null)
  const [isBackendError, setIsBackendError] = useState(false)
  const [isActive, setIsActive] = useState<ActiveField>({
    firstName: false,
    lastName: false,
    email: false,
    telephone: false,
    country: false,
    city: false,
    state: false,
    zipCode: false,
    address: false,
  })
  let totalQuantity
  let totalPrice
  if (lastLocation) {
    totalQuantity =
      products === null ? 0 : products.reduce((total: number, item: any) => parseFloat(item.quantity) + total, 0)
    totalPrice =
      products === null
        ? 0
        : products.reduce((total: number, item: any) => parseFloat(item.quantity) * item.price + total, 0) || 0
  }
  const { register, handleSubmit, errors, control } = useForm<Form>()

  const onSubmit = (data: any) => {
    data.products = products
    fetchAsync('orders', 'POST', data).then(response => {
      if (response.statusCode === 200) {
        setOrderNumber(response.order)
        lsKeyName === 'cart' ? removeFromLocalStorage('cart') : removeFromLocalStorage('buyNow')
      } else {
        setIsBackendError(true)
      }
    })
  }

  return (
    <>
      {orderNumber !== null && (
        <Redirect
          to={{
            pathname: '/orderplaced',
            state: orderNumber,
          }}
        />
      )}
      {lastLocation === null || products === null ? (
        <Redirect to="/" />
      ) : (
        <Wrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Section>
              <SectionHeader>
                <h2>Shipping Address</h2>
              </SectionHeader>
              <PersonalInfoForm>
                <FormWrapper style={{ gridArea: '1/1/1/1' }}>
                  <Input
                    kind="medium"
                    name="firstName"
                    id="first-name"
                    type="text"
                    autoComplete="first-name"
                    onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                    onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                    onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                    refForward={register({ required: true, minLength: 3 })}
                  />
                  <Label kind="medium" isActive={isActive.firstName}>
                    First Name*
                  </Label>
                </FormWrapper>
                <FormWrapper style={{ gridArea: '1/2/1/2' }}>
                  <Input
                    kind="medium"
                    name="lastName"
                    id="last-name"
                    type="text"
                    autoComplete="family-name"
                    onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                    onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                    onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                    refForward={register({ required: true, minLength: 2 })}
                  />
                  <Label kind="medium" isActive={isActive.lastName}>
                    Last Name*
                  </Label>
                </FormWrapper>
                <FormWrapper style={{ gridArea: '2/1/2/1' }}>
                  <Input
                    kind="medium"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                    onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                    onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                    refForward={register({ required: true, pattern: EMAIL_REGEX })}
                  />
                  <Label kind="medium" isActive={isActive.email}>
                    Email*
                  </Label>
                </FormWrapper>
                <FormWrapper style={{ gridArea: '2/2/2/2' }}>
                  <Input
                    kind="medium"
                    name="telephone"
                    type="tel"
                    autoComplete="tel"
                    onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                    onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                    onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                    refForward={register({ required: true })}
                  />
                  <Label kind="medium" isActive={isActive.telephone}>
                    Telephone*
                  </Label>
                </FormWrapper>
                <FormWrapper style={{ gridArea: '3/1/3/3' }}>
                  <Input
                    kind="medium"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                    onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                    onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                    refForward={register({ required: true })}
                  />
                  <Label kind="medium" isActive={isActive.address}>
                    Address*
                  </Label>
                </FormWrapper>
                <FormWrapper style={{ gridArea: '4/1/4/1' }}>
                  <Input
                    kind="medium"
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                    onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                    onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                    refForward={register({ required: true })}
                  />
                  <Label kind="medium" isActive={isActive.country}>
                    Country*
                  </Label>
                </FormWrapper>
                <FormWrapper style={{ gridArea: '4/2/4/2' }}>
                  <Input
                    kind="medium"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                    onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                    onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                    refForward={register({ required: true })}
                  />
                  <Label kind="medium" isActive={isActive.city}>
                    City*
                  </Label>
                </FormWrapper>
                <FormWrapper style={{ gridArea: '5/1/5/1' }}>
                  <Input
                    kind="medium"
                    name="state"
                    type="text"
                    autoComplete="address-level1state"
                    onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                    onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                    onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                  />
                  <Label kind="medium" isActive={isActive.state}>
                    State
                  </Label>
                </FormWrapper>
                <FormWrapper style={{ gridArea: '5/2/5/2' }}>
                  <Input
                    kind="medium"
                    name="zipCode"
                    type="text"
                    autoComplete="postal-code"
                    onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
                    onChange={e => isInputFocus(e, isActive, setIsActive, true)}
                    onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
                    refForward={register({ required: true })}
                  />
                  <Label kind="medium" isActive={isActive.zipCode}>
                    Zip Code*
                  </Label>
                </FormWrapper>
              </PersonalInfoForm>
              {errors.firstName && <Alert type="Error" message="First Name is required" />}
              {errors.lastName && <Alert type="Error" message="Last Name is required" />}
              {errors.email?.type === 'required' && <Alert type="Error" message="Email is required" />}
              {errors.email?.type === 'pattern' && (
                <Alert type="Error" message="Please enter your email address in format: yourname@domena.com" />
              )}
              {errors.telephone && <Alert type="Error" message="Telephone number is required" />}
              {errors.address && <Alert type="Error" message="Address is required" />}
              {errors.city && <Alert type="Error" message="City is required" />}
              {errors.country && <Alert type="Error" message="Country is required" />}
              {errors.zipCode && <Alert type="Error" message="Zip code is required" />}
            </Section>
            <Section>
              <SectionHeader>
                <h2>Delivery methods</h2>
              </SectionHeader>
              <Controller
                as={
                  <SectionInputRadio>
                    <InputRadio name="delivery" value="Dhl" label="Dhl $3.5" callback={() => setDeliveryPrice(3.5)} />
                    <InputRadio
                      name="delivery"
                      value="Fedex"
                      label="Fedex $3.4"
                      callback={() => setDeliveryPrice(3.4)}
                    />
                    <InputRadio
                      name="delivery"
                      value="Pickup in store"
                      label="Pickup in store"
                      callback={() => setDeliveryPrice(0)}
                    />
                  </SectionInputRadio>
                }
                control={control}
                name="delivery"
                id="delivery"
                defaultValue=""
                rules={{ required: true }}
              />
              {errors.delivery && <Alert type="Error" message="Choose delivery method" />}
            </Section>
            <Section>
              <SectionHeader>
                <h2>Payment methods</h2>
              </SectionHeader>
              <Controller
                as={
                  <SectionInputRadio>
                    <InputRadio name="payment" value="Credit Card" label="Credit Card" disabled />
                    <InputRadio name="payment" value="Cash on Delivery" label="Cash on Delivery" />
                    <Alert
                      type="Warn"
                      message="You can only check the 'Cash on delivery' option. Sorry for the inconvenience!"
                    />
                  </SectionInputRadio>
                }
                control={control}
                name="payment"
                id="payment"
                defaultValue=""
                rules={{ required: true }}
              />
              {errors.payment && <Alert type="Error" message="Choose payment method" />}
            </Section>
            <Section>
              <SectionHeader>
                <h2>Products</h2>
              </SectionHeader>
              {products.map(({ id, name, image, color, size, price, quantity, code }: Product, index: number) => (
                <CartProductList
                  key={index}
                  data={{ id, name, image, color, size, price, quantity }}
                  removeHandler={() => removeProduct(lsKeyName, code, setProducts)}
                  updateQuantityHandler={e =>
                    updateProductQuantity(lsKeyName, code, parseInt(e.target.value), setProducts)
                  }
                />
              ))}
            </Section>
            <Button category="primary" kind="contain">
              Buy
            </Button>
            {isBackendError && <Alert type="Error" message="Sorry, something went wrong. Please try again later" />}
          </form>
          <CartPriceDetail
            data={{ totalQuantity: totalQuantity, totalPrice: totalPrice, deliveryPrice: deliveryPrice }}
          />
        </Wrapper>
      )}
    </>
  )
}

export default Checkout
