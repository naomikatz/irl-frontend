import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import '../App.css';

const AvatarCard = () => (
    <div className="avatar-card">
  <Card >
    <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' wrapped ui={false} />
    <Card.Content >
      <Card.Content>
        <a>Molly</a>
        <Card.Meta>
        <span className='date'>.2 mi away</span>
      </Card.Meta>
        </Card.Content>
    </Card.Content>
  </Card>
  </div>

)

export default AvatarCard
