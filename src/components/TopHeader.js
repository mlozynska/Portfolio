import React from 'react'
import { Segment, Header, GridColumn, Image } from 'semantic-ui-react'

import logo from '../assets/logo.png'

const TopHeader = () => {
  return (
    <Segment id="topHederSegment" basic inverted>
      <GridColumn style={{ padding: '0 0' }} id="leftColumn">
        <Segment id="logoInfo" basic>
          <Image src={logo} id="logoSmall" centered />
          <Header id="h1TopHeader" as="h2">
            Mariana Lozynska{' '}
          </Header>
          <p>Software Developer | Pastry Chef | Dollmaker</p>
        </Segment>
      </GridColumn>
    </Segment>
  )
}
export default TopHeader
