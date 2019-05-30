import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import '../App.css';
import { Link } from 'react-router-dom'

class AvatarCard extends React.Component {

  //
  // handleProfileClick = (user) => {
  //   console.log(user)
  //   this.props.handleProfileClick(user)
  // }

render(){
  console.log("avatar card props", this.props)
  return (
    <div className="avatar-card">
  <Card >
    <Image src={this.props.user.avatar_url} className="avatar-image" />
    <Card.Content >
      <Card.Content>
      <Button
        onClick={ () => this.props.handleProfileClick(this.props.user)}
        compact
        fluid
        basic color='black'>
        {this.props.user.name}

      </Button>




        <Card.Meta>
        <span className='date'>.2 mi away</span>
      </Card.Meta>
        </Card.Content>
    </Card.Content>
  </Card>
  </div>
)
}
}

export default AvatarCard
