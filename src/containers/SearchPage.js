import React, { Component } from 'react'
import Map from '../components0/Map'
import UserSearchResultContainer from './UserSearchResultContainer'
import SearchContainer from './SearchContainer'
import '../App.css';



export default class SearchPage extends Component {

  state = {
    allUsers: [],
    allItems: [],
    selectedItem: [],
    nearbyUsers: [],
    originAddress: [],
    searchResultItems: [],
    itemId: null,
    currentUser: ""
  }

componentDidMount () {
  Promise.all([
    fetch('http://localhost:3000/api/items'),
    fetch('http://localhost:3000/api/users')
  ])
  .then( ( [res1, res2] ) => Promise.all( [res1.json(), res2.json()] ) )
    .then( ( [data1, data2] ) => this.setState({
      allItems: data1,
      allUsers: data2
    }))
}

handleSearchChange = (event) => {
    console.log(event)
    const userInput = event.target.value
    const filteredItems = this.state.allItems.filter(item => item.item_name.includes(userInput))
        console.log(filteredItems)
        this.setState(
          {
            searchResultItems: [...this.state.searchResultItems, filteredItems]
          }
        )
    }






handleSubmitNewItem = item => {
  console.log(item.item.id)
  const id = item.item.id
    this.setState(
      {
        allItems: [...this.state.allItems, item]
      }, () => {
        this.props.history.push(`/items/${id}`)
      })
}



  render() {
    console.log('we in da search page')
    return (
      <div>
        < SearchContainer handleSearchChange={this.handleSearchChange} itemResults={this.state.searchResultItems} handleSubmitNewItem={this.handleSubmitNewItem}/>
          <div id="user-result-container">
            < UserSearchResultContainer />
            </div>
      </div>
    )
  }

}
