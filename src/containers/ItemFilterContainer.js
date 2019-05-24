import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

export default class ItemFilterContainer extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id="filter-container" >
      <div>
      <Menu inverted text>
      <div>
        <Menu.Item
          header>
            Filter By
        </Menu.Item>
        </div>
        <div>
        <Dropdown
          text='Category'
          pointing='down'
          className='link item'
          name='category'
          active={activeItem === 'category'}
          fluid
        >
          <Dropdown.Menu fluid>
            <Dropdown.Item>
              <Dropdown text='Clothing'>
                <Dropdown.Menu>
                <Dropdown.Header>Mens</Dropdown.Header>
                    <Dropdown.Item>Shirts</Dropdown.Item>
                    <Dropdown.Item>Pants</Dropdown.Item>
                    <Dropdown.Item>Jeans</Dropdown.Item>
                    <Dropdown.Item>Shoes</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Womens</Dropdown.Header>
                    <Dropdown.Item>Dresses</Dropdown.Item>
                    <Dropdown.Item>Shoes</Dropdown.Item>
                    <Dropdown.Item>Bags</Dropdown.Item>
                  </Dropdown.Menu>
          </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>
          <Dropdown text='Furniture' >
            <Dropdown.Menu >
            <Dropdown.Header>Mens</Dropdown.Header>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Pants</Dropdown.Item>
                <Dropdown.Item>Jeans</Dropdown.Item>
                <Dropdown.Item>Shoes</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Womens</Dropdown.Header>
                <Dropdown.Item>Dresses</Dropdown.Item>
                <Dropdown.Item>Shoes</Dropdown.Item>
                <Dropdown.Item>Bags</Dropdown.Item>
              </Dropdown.Menu>
      </Dropdown>
      </Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
 </div>
 <div>
   <Dropdown
     text='Color'
     pointing className='link item'
     name='color'
   >
            <Dropdown.Menu >
             <Dropdown.Item>Red</Dropdown.Item>
             <Dropdown.Item>Orange</Dropdown.Item>
             <Dropdown.Item>Yellow</Dropdown.Item>
             <Dropdown.Item>Green</Dropdown.Item>
           </Dropdown.Menu>
   </Dropdown>
</div>
<div>
  <Dropdown
    text='Merchant'
    pointing className='link item'
    name='merchant'
  >
           <Dropdown.Menu>
            <Dropdown.Item>Wayfair</Dropdown.Item>
            <Dropdown.Item>Overstock</Dropdown.Item>
            <Dropdown.Item>West Elm</Dropdown.Item>
            <Dropdown.Item>Ikea</Dropdown.Item>
          </Dropdown.Menu>
  </Dropdown>
</div>
<div>
  <Dropdown
    text='Manufacturer'
    pointing className='link item'
    name='manufacturer'
  >
           <Dropdown.Menu>
            <Dropdown.Item>Ikea</Dropdown.Item>
            <Dropdown.Item>West Elm</Dropdown.Item>
            <Dropdown.Item>Mercer41</Dropdown.Item>
            <Dropdown.Item>Zuo</Dropdown.Item>
          </Dropdown.Menu>
  </Dropdown>
</div>
      </Menu>
      </div>
      </div>
    )
  }
}
