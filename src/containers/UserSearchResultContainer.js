import React from 'react'
import { Grid } from 'semantic-ui-react'
import AvatarCard from '../components0/AvatarCard'

const UserSearchResultContainer = () => (
  <div className="user-container">
  <Grid>
      <Grid.Column width={3}>
      <AvatarCard />
    </Grid.Column>
    <Grid.Column width={3}>
      <AvatarCard />
    </Grid.Column>
    <Grid.Column width={3}>
      <AvatarCard />
    </Grid.Column>
    <Grid.Column width={3}>
      <AvatarCard />
    </Grid.Column>
    <Grid.Column width={3}>
      <AvatarCard />
    </Grid.Column>
    <Grid.Column width={3}>
      <AvatarCard />
    </Grid.Column>
    <Grid.Column width={3}>
      <AvatarCard />
    </Grid.Column>
  </Grid>
  </div>
)

export default UserSearchResultContainer
