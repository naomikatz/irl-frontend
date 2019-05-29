import React, { Component } from 'react'
import { Menu, Dropdown, Form } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

export default class ItemFilterContainer extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {
    const { activeItem } = this.state
    const options = [
    { label: 'Thing 1', value: 1},
    { label: 'Thing 2', value: 2},
  ]




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
          <Dropdown text='Furniture'>
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
   </Dropdown.Menu>
 </Dropdown>
 </div>
 <div>
   <Dropdown
     text='Color'
     pointing className='link item'
     name='color'
   >
            <Dropdown.Menu>
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
    simple item
  >
  <Dropdown.Menu >
  <Form id="checkbox-form">
   <Form.Group grouped>
     <Form.Checkbox label='Wayfair' name='merchant' value='wayfair' />
     <Form.Checkbox label='Overstock' name='merchant' value='overstock' />
     <Form.Checkbox label='West Elm' name='merchant' value='west elm' />
     <Form.Checkbox label='Ikea' name='merchant' value='ikea' />
   </Form.Group>
 </Form>
 </Dropdown.Menu>
  </Dropdown>
</div>
<div>
  <Dropdown
    text='Manufacturer'
    pointing className='link item'
    name='manufacturer'
    simple item
   >
   <Dropdown.Menu >
   <Form id="checkbox-form">
    <Form.Group grouped>
      <Form.Checkbox label='Ikea' name='merchant' value='ikea' />
      <Form.Checkbox label='West Elm' name='merchant' value='west elm' />
      <Form.Checkbox label='Mercer41' name='merchant' value='mercer 41' />
      <Form.Checkbox label='Zuo' name='merchant' value='zuo' />
    </Form.Group>
  </Form>
  </Dropdown.Menu>
  </Dropdown>
</div>
      </Menu>
      </div>
      </div>
    )
  }
}
