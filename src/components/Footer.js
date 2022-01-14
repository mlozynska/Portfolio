import React from 'react'
import { Segment, Header, Icon, Grid } from 'semantic-ui-react'

const Footer = () => {
  return (
    <Segment
      id="footerSegment"
      basic
      // style={{ background: 'rgb(240 227 246)' }}
    >
      <Grid columns={2}></Grid>
      <Segment basic as="h5">
        Contact Info:
      </Segment>
      <Segment basic style={{ padding: '8px 0 0 0' }}>
        <a href="https://github.com/mlozynska/">
          <Icon name="github" size="large" color="black" />
        </a>
        <a href="https://www.linkedin.com/in/mariana-lozynska/">
          <Icon name="linkedin square" size="large" color="black" />
        </a>
        <a href="mailto:mlozynska79@gmail.com">
          <Icon name="mail" size="large" color="black" />
        </a>
      </Segment>
    </Segment>
  )
}
export default Footer
