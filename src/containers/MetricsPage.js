import React from 'react'
import ProfilePic from "../components0/ProfilePic"
import UserItemProfitContainer from "./UserItemProfitContainer"
import StatContainer from "./StatContainer"
import Chart from "../components0/Chart"
import { Loader } from 'semantic-ui-react'



class MetricsPage extends React.Component {

	render(){
		const { currentUser } = this.props
		if(currentUser){
			console.log(currentUser)
		return (
			<div className="metrics-page">
			<div>
				<ProfilePic currentUser = {this.props.currentUser} />
				<StatContainer />
				<Chart />
	      <UserItemProfitContainer currentUser={this.props.currentUser}/>
			</div>
			</div>
		)
	} else {
	return <Loader />
	}
}
}


export default MetricsPage
