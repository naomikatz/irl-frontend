import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import '../App.css';

class AvatarCard extends React.Component {

render(){
  console.log(this.props.user.avatar_url)
  return (
    <div className="avatar-card">
  <Card >
    <Image src={this.props.user.avatar_url} wrapped ui={false} />
    <Card.Content >
      <Card.Content>
        <a>{this.props.user.name}</a>
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
