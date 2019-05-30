import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import AccountPage from '../containers/AccountPage'


class UserIcon extends React.Component {

  state = {
    navSelection: ""
  }

  trigger = (
    <span>
      <Image avatar src={this.props.currentUser.avatar_url} /> {this.props.currentUser.name}

    </span>
  )


  options = [
    { key: 'profile', text: 'Profile', icon: 'user', value: 'profile' },
    { key: 'user', text: 'Account', icon: 'settings', value: 'account' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', value: 'sign out' },
  ]





  handleChange = (e, data) => {
    console.log(data.value)
    this.setState({
      navSelection: data.value
    }, () => {
      {this.switchCase()}
      })
  }

switchCase = () => {
  switch(this.state.navSelection){
    case "profile":
      this.props.history.push(`/profile`);
break;
    case "account":
    this.props.history.push(`/account`);
break;
      case "sign out":
        {this.props.logOut()};
break;
        default:
      return null;
      break;
    }
  }





  render() {
return (
<div id="nav-dropdown">
    <Dropdown
    onChange={this.handleChange}
      trigger={this.trigger}
      options={this.options}
      pointing='top left'
      icon={null} />
      </div>
  )
}
}


export default UserIcon
