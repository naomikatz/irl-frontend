import React, { Component } from 'react'
import MyMap from '../components0/MyMap'
import UserSearchResultContainer from './UserSearchResultContainer'
import SearchContainer from './SearchContainer'
import '../App.css';
import { Container} from 'semantic-ui-react'
import logo from '../logo2.png'
import UserProfile from './UserProfile'



export default class SearchPage extends Component {

  state = {
    allUsers: [],
    allItems: [],
    selectedItem: [],
    nearbyUsers: [],
    originAddress: [],
    searchResultItems: [],
    itemId: null,
    selectedUser: null
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
      allUsers: data2,
      searchResultItems: data1
    }))
}

handleSearchChange = (event) => {
    console.log(event)
    const userInput = event.target.value
    const filteredItems = this.state.allItems.filter(item => item.item_name.includes(userInput))
        console.log(filteredItems)
        this.setState(
          {
            searchResultItems: filteredItems
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
        this.props.setCreatedItemState(item)
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
  console.log(this.props.currentUser.full_address)
  const correctNearbyUsers = item.users.filter(user => user.city.includes(this.props.currentUser.city)).map(user => user.id)
  const nearbyUsers = this.state.allUsers.filter(user => correctNearbyUsers.includes(user.id))
  // set up a filter on the this.state.users object where it appears in
  console.log(nearbyUsers)
  this.setState({
    nearbyUsers: nearbyUsers
  })
  }


  handleViewItem = item => {
    console.log(item)
    this.setState({
      selectedItem: item.id
    }, () => {
      this.props.setSelectedItemState(item)
    })
    }


    handleProfileClick = user => {
      console.log(user)
      this.setState({
        selectedUser: user
      }, () => {
        this.props.handleProfileClick(user)
      })
      }


  render() {
    // const { currentUser } = this.props
    console.log('we in da search page: this is where were making fetch happen', this.state)
    // console.log(currentUser)
    return (
      <div className="search-page">

      <div>
      <Container className="search-page-logo-container">
        <img src={logo} alt={"logo"} className="search-logo"/>
      </Container>
        < MyMap nearbyUsers={this.state.nearbyUsers} />
          <div id="user-result-container">
            < UserSearchResultContainer handleProfileClick={this.handleProfileClick} nearbyUsers={this.state.nearbyUsers} />
          </div>
          < SearchContainer handleViewItem={this.handleViewItem} handleViewMap={this.handleViewMap} handleAddtoCollection={this.handleAddtoCollection} handleSearchChange={this.handleSearchChange} searchResultItems={this.state.searchResultItems} handleSubmitNewItem={this.handleSubmitNewItem}/>
      </div>
      </div>
    )
  }

}
