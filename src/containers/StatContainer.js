import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'

const StatContainer = () => (
  <Statistic.Group inverted id="stat-container">
    <Statistic>
      <Statistic.Value>22</Statistic.Value>
      <Statistic.Label>Items in Collection</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value text>
        Thirty<br />
        Five
      </Statistic.Value>
      <Statistic.Label>Viewers</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name='dollar sign' />
        700
      </Statistic.Value>
      <Statistic.Label>Dollars Earned</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' inline circular />
        42
      </Statistic.Value>
      <Statistic.Label>Followers</Statistic.Label>
    </Statistic>
  </Statistic.Group>
)

export default StatContainer
