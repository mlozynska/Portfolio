import React from 'react'
import { Segment, Menu, Header, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Segment basic id="navBarSegment">
        <Menu secondary position="center">
          <Grid columns={4} style={{ justifyContent: 'center' }}>
            <Menu.Item as={Link} to="/">
              <Header as="h4" style={{ color: 'rebeccapurple' }}>
                HOME
              </Header>
            </Menu.Item>

            <Menu.Item as={Link} to="/projects">
              <Header as="h4" style={{ color: 'rebeccapurple' }}>
                PROJECTS
              </Header>
            </Menu.Item>

            <Menu.Item as={Link} to="/experiences">
              <Header as="h4" style={{ color: 'rebeccapurple' }}>
                EXPERIENCE
              </Header>
            </Menu.Item>
            <Menu.Item>
              <Header as="h4" style={{ color: 'rebeccapurple' }}>
                INTERESTS
              </Header>
            </Menu.Item>
            <Menu.Item>
              <Header as="h4" style={{ color: 'rebeccapurple' }}>
                CONTACT
              </Header>
            </Menu.Item>
          </Grid>
        </Menu>
      </Segment>
    </>
  )
}

export default NavBar
