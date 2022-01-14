import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <Segment
      id="footerSegment"
      basic
      style={{ background: 'rgb(240 227 246)' }}
    >
      <Segment basic>Contact Info</Segment>

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
  )
}
export default Footer
