import React, { Component } from 'react'
import { Button, Modal, Grid, Segment, Image } from 'semantic-ui-react'


class SelectedItemModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button mini compact basic color='white' onClick={this.show('blurring')}>View Item</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
                <Segment>
                <strong>{this.props.item.item_name}</strong>
                  <Image src={this.props.item.image_url} fluid />

                </Segment>

          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Close
              </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default SelectedItemModal
