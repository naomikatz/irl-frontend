import React from 'react'
import { Grid, Card } from 'semantic-ui-react'
import UserItemCardwProfit from "../components0/UserItemCardwProfit"
import ItemFilterContainer from './ItemFilterContainer'
import ItemSortContainer from './ItemSortContainer'




class UserItemProfitContainer extends React.Component {

  renderItems= () => {
    console.log(this.props)
      return this.props.currentUser.user_items.map(item => {
            console.log(item)
            return < UserItemCardwProfit
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
        < ItemSortContainer id="useritemprofitfilter" />

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
