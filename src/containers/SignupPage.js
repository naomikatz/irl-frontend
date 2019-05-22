import React from 'react'
import { Button, Form, Checkbox } from 'semantic-ui-react'
import LocationSearchInput from './LocationSearchInput'


class SignupPage extends React.Component {

  state = {
		name: "",
		email: "",
		password: "",
    passwordConfirmation: "",
		full_address: "",
    city: "",
    avatar_url: ""
	}

	handleChange = (event) => {
    console.log(this.state)
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	createUser = () => {
    console.log(this.state)
		fetch("http://localhost:3000/api/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then((response) => {
      console.log(response)
			if (response.errors){
				alert(response.errors)
			} else {
				this.props.setCurrentUser(response)
			}
		})
	}

	handleSubmit = () => {
		if(this.state.password === this.state.passwordConfirmation){
			this.createUser()
		} else {
			alert("Passwords don't match!")
		}
	}

  render() {
    console.log('we in da signup page')
    console.log(this.props)
    return (
      <div className="hero-image">
      <div id="signup-container">
        <div id="signup-input">
          <Form onSubmit={this.handleSubmit} >
          <Form.Field width={8}>
            <h1 id="sign-up-text">SIGN UP</h1>
          </Form.Field>
            <Form.Field width={8}>
              <input onChange={this.handleChange} name="name" value={this.state.name} placeholder='Name' />
            </Form.Field>
            <Form.Field width={8}>
              <input onChange={this.handleChange} name="email" value={this.state.email} placeholder='Email' />
            </Form.Field>
            <Form.Field width={8}>
              <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
            </Form.Field>
            <Form.Field width={8}>
              <input onChange={this.handleChange} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder='Password Confirmation' />
            </Form.Field>
            <Form.Field width={8}>
            <  LocationSearchInput onChange={this.handleChange} name="full_address" value={this.state.full_address} />
            </Form.Field>
            <Form.Field width={8}>
              <input onChange={this.handleChange} name="city" value={this.state.city} placeholder='City' />
            </Form.Field>
            <Form.Field width={8}>
              <input onChange={this.handleChange} name="avatar_url" value={this.state.avatar_url} placeholder='Avatar URL' />
            </Form.Field>
            <Form.Field width={8}>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Form.Field width={8}>

            <Button type='submit'>Submit</Button>

            </Form.Field>
          </Form>
        </div>
      </div>
      </div>
    )
  }
}

export default SignupPage
