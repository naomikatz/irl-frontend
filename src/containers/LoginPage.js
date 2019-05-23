import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

  class LoginPage extends React.Component {
  	state = {
  		email: "",
  		password: "",
  	}

  	handleChange = (event) => {
  		this.setState({
  			[event.target.name]: event.target.value
  		})
  	}

  	handleSubmit = () => {
  		fetch("http://localhost:3000/api/login", {
  			method: "POST",
  			headers: {
  				"Content-Type": "application/json",
  				"Accepts": "application/json",
  			},
  			body: JSON.stringify(this.state)
  		})
  		.then(res => res.json())
  		.then(response => {
  			if (response.errors){
  				// if there are erros, crap, the response is an error
  				alert(response.errors)
  			} else {
  				// if there are no errors, great, the response is a user object
  				this.props.setCurrentUser(response)
  			}
  		})
  	}


render(){
  return (
    <div className="hero-image">
  <div id="login-container">
  <Form onSubmit={this.handleSubmit} >
    <Form.Field width={6}>
    <h1 id="login-text">LOGIN</h1>
    </Form.Field>
    <Form.Field width={6}>
      <input onChange={this.handleChange} name="email" value={this.state.email} placeholder='Email' />
    </Form.Field>
    <Form.Field width={6}>
      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
    </Form.Field>
    <Form.Field width={6} >
    <Button type='submit'>Submit</Button>
    </Form.Field>

    <Form.Field width={6}>
    Don’t have an account?
    <Link to='/signup' currentUser={this.props.currentUser}>
    <a>Sign up</a>
    </Link>
    </Form.Field>

  </Form>
  </div>
  </div>
  )
}
}

export default LoginPage
