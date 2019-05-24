import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'



class NewItem extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button compact onClick={this.show('blurring')}>Add an Item</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add a New Item</Modal.Header>
          <Modal.Content >
            <NewItemForm handleSubmitNewItem={this.props.handleSubmitNewItem}/>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Cancel
              </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default NewItem
