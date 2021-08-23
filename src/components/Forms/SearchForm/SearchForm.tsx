import React from 'react'
import { Form, FormBtn, Input } from './SearchForm.style'
import { IoMdSearch } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

const SearchForm: React.FC = () => {
  const [isRedirect, setIsRedirect] = useState(false)
  const [query, setQuery] = useState(false)
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    if (data.search.length >= 3) {
      setQuery(data.search)
      setIsRedirect(state => !state)
    }
  }

  return (
    <>
      {isRedirect && <Redirect to={`/search?q=${query}`} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="search" className="sr-only">
          What product do you want to find?
        </label>
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="What product do you want to find?"
          ref={register()}
        />
        <FormBtn>
          <span className="sr-only">Search</span>
          <IoMdSearch />
        </FormBtn>
      </Form>
    </>
  )
}

export default SearchForm
