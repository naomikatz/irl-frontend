import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import '../App.css';

class UserItemCard extends React.Component {


  render(){
      console.log(this.props.item.item.image_url)
    return (
      <div className="user-item-card">
        <Card >
          <Card.Content>
            <Image floated='left' size='tiny' src={this.props.item.item.image_url} />
            <Card.Header> {this.props.item.item.item_name} </Card.Header>
            <Card.Meta>Profit: $50</Card.Meta>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default UserItemCard
