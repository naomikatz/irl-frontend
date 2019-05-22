import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import ItemCard from '../components0/ItemCard'

class ItemSearchResultsContainer extends React.Component {


renderItems= () => {
  console.log(this.props.searchResultItems)
    return this.props.searchResultItems.map(item => {

          console.log(item)
          return < ItemCard
                key={item.id}
                item={item}
                handleItemCardClick={this.props.handleItemCardClick}
                handleAddtoCollection={this.props.handleAddtoCollection}
                handleViewMap={this.props.handleViewMap}
            />

      })
    }


  render(){
    return (
      <div className="item-container">
        <Card.Group>
          <Grid>
            <Grid.Row columns={1}>
                {this.renderItems()}      
            </Grid.Row>
          </Grid>
        </Card.Group>
      </div>
    )
  }
}

export default ItemSearchResultsContainer
