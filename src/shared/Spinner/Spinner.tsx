import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

interface SpinnerProps {
  isLoading: boolean
}

const Spinner: React.FC<SpinnerProps> = ({ isLoading }) => {
  const css = `
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
  `
  const size = 15
  return <BeatLoader loading={isLoading} css={css} size={size} />
}

export default Spinner
