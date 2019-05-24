import React from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'

class ProfilePic extends React.Component {



	render(){
			return (
				<Grid columns={2} centered id="metric-page-profile-pic" >
					<Grid.Column width={3}>
						<Segment>
							<Image src={this.props.currentUser.avatar_url} fluid />
							<strong>{this.props.currentUser.name}</strong>
						</Segment>
					</Grid.Column>
				</Grid>
			)
		}
	}


export default ProfilePic
