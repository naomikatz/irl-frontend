import React from 'react'
import { Loader, Grid, Segment, Image } from 'semantic-ui-react'
import UserItems from "../components0/UserItems"

class ProfilePage extends React.Component {

	render(){
		const { currentUser } = this.props
		if(currentUser){
			console.log(currentUser.avatar_url)
			return (			
				<Grid columns={2} centered>
					<Grid.Column width={3}>
						<Segment>
							<Image src={currentUser.avatar_url} fluid />
							<strong>{currentUser.name}</strong>
						</Segment>
					</Grid.Column>
				</Grid>
			)
		} else {
			return <Loader />
		}
	}
}

export default ProfilePage
