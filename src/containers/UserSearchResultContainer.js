import React from 'react'
import { Grid } from 'semantic-ui-react'
import AvatarCard from '../components0/AvatarCard'


class UserSearchResultContainer extends React.Component {

renderNearbyUsers= () => {
  console.log(this.props.nearbyUsers)
    return this.props.nearbyUsers.map(user => {
          console.log(user)
          return < AvatarCard
                key={user.id}
                user={user}
                handleUserCardClick={this.props.handleUserCardClick}
            />
        })
      }


render(){
  return (
    <div className="user-container">
      <Grid>
        <Grid.Column width={3}>
          {this.renderNearbyUsers()}
        </Grid.Column>
      </Grid>
    </div>
  )
}

}


export default UserSearchResultContainer
