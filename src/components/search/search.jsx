import React from 'react'
import './search.css'

const Search = ({ onchange }) => (
  <div className='search'>
    <input
      type='text'
      onChange={onchange}
      placeholder='Anything that you remember about a emoj...'
    />
  </div>
)

export default Search
