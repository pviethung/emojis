import React from 'react'
import './category.css'
import '../category-item/category-item'
import CategoryItem from '../category-item/category-item'
import Search from '../search/search'

class Category extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      emojis: [],
      input: '',
    }

    this.cat1 = []
    this.cat2 = []
  }

  componentDidMount = () => {
    fetch(
      'https://emoji-api.com/emojis?access_key=8c621d1ab91385b6534d555df3e9f39362eb9082'
    )
      .then((response) => response.json())
      .then((data) => {
        data.length = 1000
        this.cat1 = data.filter((emoji) => emoji.group === 'smileys-emotion')
        this.cat2 = data.filter((emoji) => emoji.group === 'people-body')
        this.setState({ emojis: data })
      })
  }

  handleInputChange = (e) => {
    this.setState({ input: e.currentTarget.value })
  }

  getFilteredEmojis = () =>
    this.state.emojis.length > 0
      ? this.state.emojis.filter((emoji) =>
          emoji.unicodeName.includes(this.state.input)
        )
      : []

  render = () => (
    <div className='category'>
      <Search onchange={this.handleInputChange} />
      <div className='items'>
        <div className='left'>
          <CategoryItem title='Emojis' emojis={this.getFilteredEmojis()} />
        </div>
        {/* <div className='right'>
          <CategoryItem title='smileys emotion' emojis={this.cat1} />
          <CategoryItem title='people body' emojis={this.cat2} />
        </div> */}
      </div>
    </div>
  )
}

export default Category
