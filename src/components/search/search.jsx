import React from 'react'
import './search.css'

const Search = ({ onchange }) => (
  <div className='search'>
    <input type='text' onChange={onchange} placeholder='Search' />
  </div>
)

export default Search
