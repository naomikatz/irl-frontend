import React from 'react'
import { Link } from 'react-router-dom'
import StatContainer from "./StatContainer"

class MetricsContainer extends React.Component {

	render(){
		return (
			<div id="metrics-container">
				<StatContainer />
				{this.props.currentUser ?
					<Link to='/metrics' currentUser={this.props.currentUser}>
						<div>See more metrics</div>
					</Link>
				: null}
			</div>
		)
	}

}

export default MetricsContainer
