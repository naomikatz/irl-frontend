import React from 'react'
import { Link } from 'react-router-dom'

class MetricsContainer extends React.Component {

	render(){
		return (
			<div>
				Total profit: $700
				<Link to='/metrics' currentUser={this.props.currentUser}>
				<div> See more metrics </div>
				</Link>
			</div>
		)
	}

}

export default MetricsContainer
