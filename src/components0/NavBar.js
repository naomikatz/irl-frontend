import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import UserIcon from './UserIcon.js'


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
          name='About'
          active={activeItem === 'New'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
        

        {this.props.currentUser ? <UserIcon {...this.props} currentUser={this.props.currentUser}  logOut={this.props.logOut} /> : 'login' }

          <Menu.Item
            name={this.props.currentUser ? null : 'login'}
            active={this.props.currentUser ? activeItem === null : 'Login'}
            onClick={this.props.currentUser ? null : this.props.logIn}

          />
        </Menu.Menu>
      </Menu>
      </div>
    )
  }

}
