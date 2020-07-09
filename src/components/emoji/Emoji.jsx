import React from 'react'
import './emoji.css'

const Emoji = ({ character, unicodeName }) => (
  <div className='emoji'>
    <span role='img'>{character}</span>
    <p>{unicodeName}</p>
  </div>
)

export default Emoji
