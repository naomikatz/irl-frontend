import React, { Component } from 'react'
import MyMap from '../components0/MyMap'
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
  }



componentDidMount () {
  console.log(this.props)
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

handleAddtoCollection = item => {
  console.log(this.props.currentUser.id)
  const userItem = {user_id: this.props.currentUser.id, item_id: item.id}
  fetch('http://localhost:3000/api/user_items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(userItem)
  })
    .then(resp => resp.json())
    .then((user_item) => {
      console.log(user_item)
    })
}

handleViewMap = item => {
  console.log(item.users)
  console.log(this.props.currentUser.city)
  const nearbyUsers = item.users.filter(user => user.city.includes(this.props.currentUser.city))
  console.log(nearbyUsers)
  this.setState({
    nearbyUsers: nearbyUsers
  })
  }


  render() {
    const { currentUser } = this.props
    console.log('we in da search page')
    console.log(currentUser)
    return (
      <div className="search-page">

      <div>
        < SearchContainer handleViewMap={this.handleViewMap} handleAddtoCollection={this.handleAddtoCollection} handleSearchChange={this.handleSearchChange} searchResultItems={this.state.searchResultItems} handleSubmitNewItem={this.handleSubmitNewItem}/>
        < MyMap  />
          <div id="user-result-container">
            < UserSearchResultContainer nearbyUsers={this.state.nearbyUsers}/>
          </div>
      </div>
      </div>
    )
  }

}
