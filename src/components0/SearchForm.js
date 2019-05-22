import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class SearchForm extends Component {

  render() {
    return (
      <div id="search-bar">
      <Input
        fluid icon='eye'
        iconPosition='left'
        placeholder='Search items...'
        onChange={this.props.handleSearchChange}
      />
      </div>

    )
  }

}
