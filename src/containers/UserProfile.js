import React from 'react'
import { Loader } from 'semantic-ui-react'
import ProfilePic from "../components0/ProfilePic"
import MetricsContainer from "./MetricsContainer"
import SelectedUserCollectionContainer from "./SelectedUserCollectionContainer"
import { Link } from 'react-router-dom'


class UserProfile extends React.Component {


	render(){
		const { selectedUser } = this.props
		console.log("selectedUser", selectedUser)
			return (
				<div className="profile-page">
				<div>
					<ProfilePic currentUser = {this.props.selectedUser} />
					<MetricsContainer selectedUser={this.props.selectedUser}/>
					<SelectedUserCollectionContainer selectedUser={this.props.selectedUser}/>
				</div>
				</div>
			)
		}
	}


export default UserProfile
