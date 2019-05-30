import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import ItemCard from '../components0/ItemCard'
import ItemCard2 from '../components0/ItemCard2'
import StackGrid from "react-stack-grid";

class ItemSearchResultsContainer extends React.Component {


renderItems= () => {
  console.log(this.props.searchResultItems)
    return this.props.searchResultItems.map(item => {

          return < ItemCard2
                key={item.id}
                item={item}
                handleItemCardClick={this.props.handleItemCardClick}
                handleAddtoCollection={this.props.handleAddtoCollection}
                handleViewMap={this.props.handleViewMap}
                handleViewItem={this.props.handleViewItem}
            />

      })
    }


  render(){
    return (
      <div id="item-gallery">
      <StackGrid
        columnWidth={250}
        id="stack-grid"
      >
        {this.renderItems()}

      </StackGrid>
      </div>

    )
  }
}



export default ItemSearchResultsContainer
