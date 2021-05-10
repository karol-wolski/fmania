import React from 'react'
import { Wrapper, Desc, Title, Author, Date, StarActive, Star } from './Review.style'

interface ReviewProps {
  id: number
  title: string
  description: string
  date: string
  author: string
  mark: number
}

const drawStars = (number: number) => {
  let result = []

  for (let i = 1; i <= 5; i++) {
    if (i <= number) {
      result.push(<StarActive key={i} />)
    } else {
      result.push(<Star key={i} />)
    }
  }
  return result
}

const Review: React.FC<ReviewProps> = ({ title, description, date, author, mark }) => {
  return (
    <Wrapper>
      {drawStars(mark)}
      <Title>{title}</Title>
      <Desc>{description}</Desc>
      <Author>
        by {author}, <Date>{date}</Date>
      </Author>
    </Wrapper>
  )
}

export default Review
