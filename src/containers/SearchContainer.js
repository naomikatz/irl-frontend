import React, { Component } from 'react'
import SearchForm from '../components0/SearchForm'
import ItemSearchResultContainer from './ItemSearchResultContainer'
import NewItemModal from '../components0/NewItemModal'


export default class SearchContainer extends Component {

  render() {
    console.log('we in da search page')
    return (
      <div >
          <div id="search-container">
            <div id="search-bg"></div>
              <div id="search">
                < SearchForm handleSearchChange={this.props.handleSearchChange} className="search-form"/>
                < NewItemModal handleSubmitNewItem={this.props.handleSubmitNewItem}/>
                < ItemSearchResultContainer itemResults={this.props.itemResults}/>
              </div>
          </div>
      </div>
    )
  }
}
