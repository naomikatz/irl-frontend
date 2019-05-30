import React from 'react'
import { Grid, Container, Card } from 'semantic-ui-react'
import AvatarCard from '../components0/AvatarCard'


class UserSearchResultContainer extends React.Component {

renderNearbyUsers= () => {
  console.log(this.props.nearbyUsers)
    return this.props.nearbyUsers.map(user => {
          console.log("user in search results container", user)
          return < AvatarCard
                key={user.id}
                user={user}
                handleUserCardClick={this.props.handleUserCardClick}
                handleProfileClick={this.props.handleProfileClick}
            />
        })
      }


render(){
  return (

        <Card.Group id="user-container">
          <Grid>
            <Grid.Row columns={5} >
          {this.renderNearbyUsers()}
        </Grid.Row>
      </Grid>
      </Card.Group>
  )
}

}



export default UserSearchResultContainer
