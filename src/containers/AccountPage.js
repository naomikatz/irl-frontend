import React from 'react'
import { Loader } from 'semantic-ui-react'
import ProfilePic from "../components0/ProfilePic"
import MetricsContainer from "./MetricsContainer"
import { Link } from 'react-router-dom'


class AccountPage extends React.Component {


	render(){
		const { currentUser } = this.props
		if(currentUser){
			console.log(currentUser.avatar_url)
			return (
				<div className="profile-page">
				<div> {currentUser.name} </div>
				<div>
					<ProfilePic currentUser = {this.props.currentUser} />
				</div>
				<div>
					Name, Address, Avatar
				</div>
				</div>
			)
		} else {
			return <Loader />
		}
	}
}

export default AccountPage
