import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import '../App.css';


class ItemCard extends React.Component {
  //
  // handleClick = (event) => {
  //   this.props.handleItemCardClick(this.props.item.id)
  // }

  handleAddtoCollection = (item) => {
    console.log(item)
    this.props.handleAddtoCollection(item)
  }

  handleViewMap = (item) => {
    console.log(item)
    this.props.handleViewMap()
  }


  render(){
      console.log(this.props.item.image_url)
    return (
      <div className="item-card">
        <Card >
          <Card.Content>
            <Image floated='left' size='tiny' src={this.props.item.image_url} />
            <Card.Header> {this.props.item.item_name} </Card.Header>
            <Card.Meta>Merchants: Ikea, Wayfair.com, Overstock.com, West Elm, Macy's</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className='ui mini three buttons'>
              <Button basic color='yellow'>
                Save
              </Button>
              <Button basic color='yellow' onClick={ () => this.handleViewMap(this.props.item)} >
                View Map
              </Button>
              <Button onClick={ () => this.handleAddtoCollection(this.props.item)} basic color='yellow'>
                Add to My Collection
              </Button>
              <Button onClick={ () => this.handleAddtoCollection(this.props.item)} basic color='yellow'>
                View Item
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default ItemCard
