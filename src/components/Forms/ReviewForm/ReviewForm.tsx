import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Button } from '../../../shared/Button/Button'
// import Textarea from '../../../shared/Textarea/Textarea'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { Colors } from '../../../shared/Colors'
import { Title, TextArea } from './ReviewForm.style'
import { removeMultiWhiteSpace } from '../../../helpers/removeMultiWhiteSpace'
const { grey300: Icon, yellow100: IconActive } = Colors

const ReviewForm: React.FC = () => {
  const [mark, setMark] = useState(0)
  const [review, setReview] = useState('')
  const ReactStarsParams = {
    size: 25,
    count: 5,
    color: Icon,
    activeColor: IconActive,
    value: 0,
    a11y: true,
    emptyIcon: <AiOutlineStar />,
    filledIcon: <AiFillStar />,
    onChange: (val: number) => {
      setMark(val)
    },
  }

  const createData = () => {
    const data = {
      mark: mark,
      comment: review,
    }
    console.log(data)
  }

  const textareaOnChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(removeMultiWhiteSpace(event.target.value))
  }

  return (
    <div>
      <Title>Give Your Review</Title>
      <ReactStars {...ReactStarsParams} />
      <TextArea onChange={textareaOnChangeHandler} />
      <Button kind="contain" category="primary" onClick={createData}>
        Submit
      </Button>
    </div>
  )
}

export default ReviewForm
