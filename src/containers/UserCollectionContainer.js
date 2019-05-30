import React from 'react'
import { Grid, Card } from 'semantic-ui-react'
import UserItemCard from "../components0/UserItemCard"
import ItemFilterContainer from './ItemFilterContainer'




class UserCollectionContainer extends React.Component {

  renderItems= () => {
    console.log("in the user collection container", this.props)
      return this.props.currentUser.user_items.map(item => {
            console.log(item)
            return < UserItemCard
                  key={item.id}
                  item={item}

              />
        })
      }




	render(){
		return (
        <div className="user-collection-container">
        <div id="user-collection-title" > {this.props.currentUser.name}'s Items </div>
        < ItemFilterContainer />
          <Card.Group id="profit-item-card-container">
            <Grid>
              <Grid.Row columns={1} >
                  {this.renderItems()}
              </Grid.Row>
            </Grid>
          </Card.Group>
        </div>
		)
	}

}

export default UserCollectionContainer
