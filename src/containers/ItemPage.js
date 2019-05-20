import React from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'


class ItemPage extends React.Component {

	render(){
		const { item } = this.props
			console.log(item.item_name)
			return (
				<Grid columns={2} centered>
					<Grid.Column width={3}>
						<Segment>
							<Image src={item.image_url} fluid />
							<strong>{item.item_name}</strong>
						</Segment>
					</Grid.Column>
				</Grid>
			)
		}
	}


export default ItemPage
