import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class ItemFilterContainer extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id="filter-container" >
      <Menu inverted text>
        <Menu.Item
          header>
            Filter By
        </Menu.Item>
        <Menu.Item
          name='category'
          active={activeItem === 'category'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='color'
          active={activeItem === 'color'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='merchant'
          active={activeItem === 'merchant'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='manufacturer'
          active={activeItem === 'manufacturer'}
          onClick={this.handleItemClick}
        />
      </Menu>
      </div>
    )
  }
}
