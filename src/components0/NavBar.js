import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


render() {
  const { activeItem } = this.state

    return (
      <div id="navbar">
      <Menu inverted secondary id="Navbar">
      <Link to='/search'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          className="home"
        />
        </Link>
        <Menu.Item
          name='Discover'
          active={activeItem === 'Discover'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='New'
          active={activeItem === 'New'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
        <Menu.Item
          name={this.props.currentUser ? this.props.currentUser.name : null}
          active={this.props.currentUser ? activeItem === 'Current User' : null}
          onClick={this.handleItemClick}
        />

          <Menu.Item
            name={this.props.currentUser ? 'logout' : null}
            active={this.props.currentUser ? activeItem === 'Logout' : null}
            onClick={this.props.currentUser ? this.props.logOut : null}
          />
        </Menu.Menu>
      </Menu>
      </div>
    )
  }

}
