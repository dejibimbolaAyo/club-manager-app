import _ from 'lodash'
import React, {useState} from 'react'
import {Search} from 'semantic-ui-react'

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (<Search
    className='search_box'
    loading={false}
    onResultSelect={() => {}}
    onSearchChange={_.debounce((e) => {
      console.log(e.target.value)
    }, 500, {leading: true})}
    value={""}/>)
}

export default SearchInput;