import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import '../App.css';


class ItemCard extends React.Component {

  handleClick = (event) => {
    this.props.handleItemCardClick(this.props.item.id)
  }

  render(){
      console.log(this.props.item[0].image_url)
    return (

      <div className="item-card">
        <Card >
          <Card.Content>

            <Image floated='left' size='tiny' src={this.props.item[0].image_url} />
            <Card.Header> {this.props.item[0].item_name} </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className='ui mini three buttons'>
              <Button basic color='yellow'>
                Save
              </Button>
              <Button basic color='yellow'>
                View Map
              </Button>
              <Button basic color='yellow'>
                Add to My Collection
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default ItemCard
