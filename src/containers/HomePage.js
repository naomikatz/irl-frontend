import React, { Component } from 'react'
import { Button, Container } from 'semantic-ui-react'
import logo from '../logo2.png'
import { Link } from 'react-router-dom'



export default class HomePage extends Component {


  render() {
    console.log('we in da homepage')
    return (
      <div>
        <Container className="Logo-container">
          <img src={logo} alt={"logo"} className="App-logo"/>
        </Container>
        <Container className="Login">
          <Button.Group className="Login-button">
          <Link to='/login'>
            <Button>Login</Button>
            </Link>
            <Button.Or />
            <Link to= '/signup'>
            <Button positive>Signup</Button>
            </Link>
          </Button.Group>
        </Container>
      </div>
    )
  }

}
