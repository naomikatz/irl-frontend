import React from 'react'
import { Table, Image } from 'semantic-ui-react'

const UserItems = ({ userItems }) => {

	function renderUserItems(){
		return userItems.map(userItem => {
			return (
				<Table.Row key={userItem.id}>
					<Table.Cell>
						<Image src={userItem.image_url} avatar />
						{userItem.name}
					</Table.Cell>
				</Table.Row>
			)
		})
	}
	return(
		<Table celled>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Items</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				{renderUserItems()}
			</Table.Body>
		</Table>
	)
}

export default UserItems
