import React from 'react'
import { Header, Segment, Image, Icon } from 'semantic-ui-react'
import TopHeader from './TopHeader'
import MLcontacts from '../assets/MLcontacts.png'

const Contacts = () => {
  return (
    <>
      <TopHeader />
      <Header as="h3" className="interests" style={{ color: 'rebeccapurple' }}>
        CONTACT
      </Header>
      <Image src={MLcontacts} centered rounded />
      <Segment id="contactInfo" basic style={{ padding: '8px 0 0 0' }}>
        <a href="https://github.com/mlozynska/">
          <Icon name="github" size="big" style={{ color: 'rebeccapurple' }} />
        </a>
        <a href="https://www.linkedin.com/in/mariana-lozynska/">
          <Icon
            name="linkedin square"
            size="big"
            style={{ color: 'rebeccapurple' }}
          />
        </a>
        <a href="mailto:mlozynska79@gmail.com">
          <Icon name="mail" size="big" style={{ color: 'rebeccapurple' }} />
        </a>
      </Segment>
    </>
  )
}
export default Contacts
