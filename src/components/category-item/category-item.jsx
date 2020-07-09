import React from 'react'
import './category-item.css'
import Emoji from '../emoji/Emoji'

const CategoryItem = ({ emojis, title }) => {
  console.log('render' + title)
  return (
    <div className='category-item'>
      <h1>{title.toUpperCase()}</h1>
      {emojis.length > 0 &&
        emojis.map(({ codePoint, ...rest }) => (
          <Emoji key={codePoint} {...rest} />
        ))}
    </div>
  )
}

export default CategoryItem
