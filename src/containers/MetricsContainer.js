import React from 'react'
import { Link } from 'react-router-dom'
import StatContainer from "./StatContainer"

class MetricsContainer extends React.Component {

	render(){
		return (
			<div>
				<StatContainer />
				<Link to='/metrics' currentUser={this.props.currentUser}>
				<div> See more metrics </div>
				</Link>
			</div>
		)
	}

}

export default MetricsContainer
