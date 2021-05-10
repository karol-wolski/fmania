import React from 'react'
import Review from './Review/Review'
import { Title } from './Reviews.style'

interface ReviewsProps {
  data: {
    id: number
    title: string
    description: string
    date: string
    author: string
    mark: number
  }[]
}

const Reviews: React.FC<ReviewsProps> = ({ data }) => {
  return (
    <>
      <Title>Customer Review</Title>
      <div>
        {data.map(item => (
          <Review key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default Reviews
