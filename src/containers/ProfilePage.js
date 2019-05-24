import React from 'react'
import { Loader } from 'semantic-ui-react'
import ProfilePic from "../components0/ProfilePic"
import MetricsContainer from "./MetricsContainer"
import { Link } from 'react-router-dom'


class ProfilePage extends React.Component {


	render(){
		const { currentUser } = this.props
		if(currentUser){
			console.log(currentUser.avatar_url)
			return (
				<div className="profile-page">
				<div> {currentUser.name} </div>
				<div id="account-info-div">
					<Link to='/account' currentUser={this.props.currentUser}>
			    	<div>Account Info</div>
		    	</Link>
				</div>
				<div>
					<ProfilePic currentUser = {this.props.currentUser} />
					<MetricsContainer currentUser={this.props.currentUser}/>
				</div>
				</div>
			)
		} else {
			return <Loader />
		}
	}
}

export default ProfilePage

// <UserCollectionContainer />
// <WantToSeeItemsContainer />
// <SeenItemsContainer />
