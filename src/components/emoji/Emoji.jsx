import React from 'react'
import './emoji.css'

const Emoji = ({ character, unicodeName }) => (
  <div className='emoji'>
    <span role='img'>{character}</span>
  </div>
)

export default Emoji
