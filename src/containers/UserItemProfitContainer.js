import React from 'react'
import { Grid, Card } from 'semantic-ui-react'
import UserItemCard from "../components0/UserItemCard"
import ItemFilterContainer from './ItemFilterContainer'




class UserItemProfitContainer extends React.Component {

  renderItems= () => {
    console.log(this.props)
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
        <div className="user-item-profit-container">
        <div id="useritemprofittitle" > My Items </div>
        < ItemFilterContainer />
        <div id="useritemprofitfilter"> SORT BY: most seen items || highest profit items </div>
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

export default UserItemProfitContainer
