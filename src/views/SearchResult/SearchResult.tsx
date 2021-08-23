import React, { useEffect, useState } from 'react'
import { BiCloset } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'
import NoItems from '../../components/NoItems/NoItems'
import Product from '../../components/Product/Product'
import { fetchAsync } from '../../helpers/fetch'
import Spinner from '../../shared/Spinner/Spinner'
import { Wrapper } from './SearchResult.style'

const SearchResult: React.FC = () => {
  const { search } = useLocation()
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchAsync(`search${search}`).then(data => {
      setData(data)
      setIsLoading(false)
      setIsLoaded(true)
    })
  }, [search])
  return (
    <>
      <Spinner isLoading={isLoading} />
      <Wrapper>
        {isLoaded && (
          <>
            {data.length > 0 ? (
              <Product title="Results" data={data} />
            ) : (
              <NoItems text="No matching items found!" icon={<BiCloset />} />
            )}
          </>
        )}
      </Wrapper>
    </>
  )
}

export default SearchResult
