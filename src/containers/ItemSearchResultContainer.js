import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import ItemCard from '../components0/ItemCard'

class ItemSearchResultsContainer extends React.Component {

renderItems= () => {
    return this.props.itemResults.map(item => {
      return < ItemCard
            key={item.id}
            item={item}
            handleItemCardClick={this.props.handleItemCardClick}
        />
      })
    }


  render(){
    return (
      <div className="item-container">
        <Card.Group>
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column >
                {this.renderItems()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Group>
      </div>
    )
  }
}

export default ItemSearchResultsContainer
