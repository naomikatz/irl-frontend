import React, { Component } from 'react'
import { Menu, Dropdown, Form } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

export default class ItemSortContainer extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {
    const { activeItem } = this.state

    return (
      <div id="sort-container" >
      <Menu inverted text>
      <div>
        <Menu.Item
          header>
            Sort By
        </Menu.Item>
        </div>
        <Menu.Item
         name='most viewed'
         active={activeItem === 'most viewed'}
         onClick={this.handleItemClick}
       />
       <Menu.Item
         name='highest proft'
         active={activeItem === 'highest profit'}
         onClick={this.handleItemClick}
       />
     </Menu>
      </div>
    )
  }
}
