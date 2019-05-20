import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components0/NavBar'
import HomePage from './containers/HomePage'
import LoginPage from './containers/LoginPage'
import SignupPage from './containers/SignupPage'
import SearchPage from './containers/SearchPage'
import ProfilePage from './containers/ProfilePage'



class App extends Component {

  state = {
  		currentUser: null
  	}

    logOut = () => {
		localStorage.removeItem("token")
		this.setState({
			currentUser: null
		}, () => {
			this.props.history.push("/login")
		})
	}




	updateUser = (updatedUser) => {
		this.setState({
			currentUser: updatedUser
		})
	}

	componentDidMount(){
		const token = localStorage.getItem("token")

		if (token){
			// load up their shit
			fetch("http://localhost:3000/api/auto_login", {
				headers: {
					"Authorization": token
				}
			})
			.then(res => res.json())
			.then((response) => {
				if (response.errors) {
					alert(response.errors)
				} else {
					this.setState({
						currentUser: response
					})
				}
			})
		}
	}

	setCurrentUser = (response) => {
		this.setState({
			currentUser: response.user
		}, () => {
			localStorage.setItem("token", response.token)
			this.props.history.push(`/profile`)
		})
	}

render () {
    console.log('we heaaaa')
    return (
      <div className="hero-image">
      <div className="App">
        < NavBar className="navbar" currentUser={this.state.currentUser} logOut={this.logOut} />
        <Switch>
          <Route path='/search' component={ SearchPage } {...this.props} allItems={this.state.allItems} addItem={this.addItem}/>
          <Route path='/login' render={(routeProps) => {
							return <LoginPage{...routeProps} setCurrentUser={this.setCurrentUser}/>
						}} />
          <Route path="/signup" render={(routeProps) => {
  						return <SignupPage {...routeProps} setCurrentUser={this.setCurrentUser}/>
  					}} />
          <Route path='/profile' render={(routeProps) => {
							return <ProfilePage {...routeProps} updateUser={this.updateUser} currentUser={this.state.currentUser}/>
						}} />
          <Route exact path='/' component={ HomePage } />
        </Switch>
        </div>
      </div>
    )
  }

}

export default App;
