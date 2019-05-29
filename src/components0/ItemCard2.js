import React, { Component } from 'react'
import { Button, Dimmer, Header, Image } from 'semantic-ui-react'
import SelectedItemModal from './SelectedItemModal'

export default class ItemCard2 extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  handleAddtoCollection = (item) => {
    console.log(item)
    this.props.handleAddtoCollection(item)
  }

  handleViewMap = (item) => {
    console.log(item)
    this.props.handleViewMap(item)
  }

  handleViewItem = (item) => {
    console.log(item)
    this.props.handleViewItem(item)
  }

  handleSaveToWantToSee = (item) => {
    console.log(item)
    this.props.handleSaveToWantToSee(item)
  }

  render() {
    console.log(this.props.item.image_url)
    const { active } = this.state
    const content = (
      <div id="item-card">
        <Header as='h2' inverted>
          {this.props.item.item_name}
        </Header>
        <Button mini compact basic color='white' onClick={ () => this.handleViewMap(this.props.item)}>View on Map</Button>
        <Button mini compact basic color='white' onClick={ () => this.handleAddtoCollection(this.props.item)} >Save to My Collection</Button>
        <Button mini compact basic color='white' onClick={ () => this.handleSavetoWantToSee(this.props.item)}>Save to My Want to See</Button>
        <SelectedItemModal item={this.props.item}/>
      </div>
    )

    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        size='medium'
        src={this.props.item.image_url}
        id="item-card"

      />
    )
  }
}
