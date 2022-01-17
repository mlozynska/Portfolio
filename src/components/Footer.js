import React from 'react'
import { Segment, Icon, Grid } from 'semantic-ui-react'

const Footer = () => {
  return (
    <Segment id="footerSegment" basic>
      <Grid columns={2}></Grid>
      <Segment
        id="footerContacts"
        basic
        as="h4"
        style={{ color: 'rgb(0 181 173 / 91%)' }}
      >
        Contact Info:
      </Segment>

      <Segment basic style={{ padding: '8px 0 0 0' }}>
        <a href="https://github.com/mlozynska/">
          <Icon
            name="github"
            size="large"
            style={{ color: 'rgba(0, 181, 173, 0.3)' }}
          />
        </a>
        <a href="https://www.linkedin.com/in/mariana-lozynska/">
          <Icon
            name="linkedin square"
            size="large"
            style={{ color: 'rgba(0, 181, 173, 0.3)' }}
          />
        </a>
        <a href="mailto:mlozynska79@gmail.com">
          <Icon
            name="mail"
            size="large"
            style={{ color: 'rgba(0, 181, 173, 0.3)' }}
          />
        </a>
      </Segment>
    </Segment>
  )
}
export default Footer
