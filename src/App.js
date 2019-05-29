import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components0/NavBar'
import HomePage from './containers/HomePage'
import LoginPage from './containers/LoginPage'
import SignupPage from './containers/SignupPage'
import SearchPage from './containers/SearchPage'
import ProfilePage from './containers/ProfilePage'
import MetricsPage from './containers/MetricsPage'
import AccountPage from './containers/AccountPage'
import ItemPage from './containers/ItemPage'



class App extends Component {

  state = {
  		currentUser: null,
      selectedItem: null,
      selectedItemId: null
  	}

    logOut = () => {
		localStorage.removeItem("token")
		this.setState({
			currentUser: null
		}, () => {
			this.props.history.push("/login")
		})
	}

  logIn = () => {
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

  setCreatedItemState = item => {
    this.setState({
      selectedItem: item.item,
      selectedItemId: item.item.id
    }, () => {
      this.props.history.push(`/items/${item.item.id}`)
    })
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

      <div className="App">
        < NavBar className="navbar" currentUser={this.state.currentUser} logOut={this.logOut} logIn={this.logIn} />
        <Switch>
          <Route path='/search' render={(routeProps) => {
            return <SearchPage {...routeProps} allItems={this.state.allItems} addItem={this.addItem} currentUser={this.state.currentUser} setCreatedItemState={this.setCreatedItemState}/>
            }} />
          <Route path='/login' render={(routeProps) => {
							return <LoginPage{...routeProps} setCurrentUser={this.setCurrentUser}/>
						}} />
          <Route path="/signup" render={(routeProps) => {
  						return <SignupPage {...routeProps} setCurrentUser={this.setCurrentUser}/>
  					}} />
          <Route path='/profile' render={(routeProps) => {
							return <ProfilePage {...routeProps} updateUser={this.updateUser} currentUser={this.state.currentUser}/>
						}} />
            <Route path='/metrics' render={(routeProps) => {
  							return <MetricsPage {...routeProps} currentUser={this.state.currentUser}/>
  						}} />
            }} />
            <Route path='/account' render={(routeProps) => {
                return <AccountPage {...routeProps} currentUser={this.state.currentUser}/>
              }} />
              <Route path='/items/:id' render={(routeProps) => {
                  return <ItemPage {...routeProps} currentUser={this.state.currentUser} item={this.state.selectedItem}/>
                }} />
          <Route exact path='/' component={ HomePage } />
        </Switch>
        </div>

    )
  }

}


export default App;
