import _ from 'lodash'
import React, {useState} from 'react'
import {Search} from 'semantic-ui-react'

const SearchInput = ({search}) => {
  // const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleResultSelect(e, { result }) {
    console.log("This is the new selection", result)
  }


  function handleSearchChange(e, { value }) {
    console.log("the search query", value)
    setIsLoading(true)

    // search(value)
  }

  return (<Search
    className='search_box'
    loading={isLoading}
    onResultSelect={handleResultSelect}
    onSearchChange={_.debounce(handleSearchChange, 500, {leading: true})}
    result={[]}
    value={""}
    />)
}

export default SearchInput;