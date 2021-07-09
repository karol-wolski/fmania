import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Button } from '../../../shared/Button/Button'
import Textarea from '../../../shared/Textarea/Textarea'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { Colors } from '../../../shared/Colors'
import { Title } from './ReviewForm.style'
import { FormWrapper } from '../Form.style'
import { isInputFocus } from '../../../helpers/isInputFocus'
import { Label } from '../../../shared/Label/Label'
import { Input } from '../../../shared/Input/Input'
import { useForm } from 'react-hook-form'
import Alert from '../../Alert/Alert'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { fetchAsync } from '../../../helpers/fetch'
const { grey300: Icon, yellow100: IconActive } = Colors

interface ReviewFormProps {
  productId: number | string
}

interface ActiveField {
  title: boolean
  review: boolean
}

const ReviewForm: React.FC<ReviewFormProps> = ({ productId }) => {
  const [mark, setMark] = useState(0)
  const ReactStarsParams = {
    size: 25,
    count: 5,
    color: Icon,
    activeColor: IconActive,
    value: 0,
    a11y: true,
    emptyIcon: <AiOutlineStar />,
    filledIcon: <AiFillStar />,
    classNames: 'ReactStars',
    onChange: (val: number) => {
      setMark(val)
    },
  }

  const [isActive, setIsActive] = useState<ActiveField>({
    title: false,
    review: false,
  })
  const [backendErrorMessage, setBackendErrorMessage] = useState<string>()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data: any) => {
    data.mark = mark
    data.productId = productId
    console.log(data)
    fetchAsync('comments', 'POST', data).then(response => {
      if (response.statusCode === 200) notify()
      if (response.error) setBackendErrorMessage(response.error)
    })
  }

  const notify = () =>
    toast('The review has been successfully added. Soon your review will appear in the reviews section.', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'Toastify__toast--success',
    })

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Title>Give Your Review</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ReactStars {...ReactStarsParams} name="mark" />
        <FormWrapper>
          <Input
            kind="medium"
            name="title"
            type="text"
            onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
            onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
            onChange={e => isInputFocus(e, isActive, setIsActive, true)}
            refForward={register({ required: true, minLength: 2 })}
          />
          <Label kind="medium" isActive={isActive.title}>
            Title*
          </Label>
        </FormWrapper>
        <FormWrapper>
          <Textarea
            name="review"
            refForward={register({ required: true })}
            onFocus={e => isInputFocus(e, isActive, setIsActive, true)}
            onBlur={e => isInputFocus(e, isActive, setIsActive, false)}
            onChange={e => isInputFocus(e, isActive, setIsActive, true)}
          />
          <Label kind="medium" isActive={isActive.review}>
            Review*
          </Label>
        </FormWrapper>
        {errors.title && <Alert type="Error" message="Title is required" />}
        {errors.review && <Alert type="Error" message="Review is required" />}
        {errors.mark && <Alert type="Error" message="Mark is required" />}
        {backendErrorMessage && <Alert type="Error" message={backendErrorMessage} />}
        <Button kind="contain" category="primary">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ReviewForm
