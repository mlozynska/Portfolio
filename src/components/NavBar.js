import React from 'react'
import { Segment, Menu, MenuItem, Header, Grid } from 'semantic-ui-react'
// import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <>
      <Segment basic id="navBarSegment">
        <Menu secondary position="center">
          <Grid columns={4} style={{ justifyContent: 'center' }}>
            <Menu.Item >
              <Header as='h4' style={{ color: 'rebeccapurple'}}>ABOUT</Header>
            </Menu.Item>
            {/* <Menu.Item as={Link} to="/About">ABOUT</Menu.Item> */}
            <Menu.Item >
              <Header as='h4' >PROJECTS</Header>
            </Menu.Item>
            <Menu.Item >
              <Header as='h4' >TECHNOLOGIES</Header>
            </Menu.Item>
            <Menu.Item >
              <Header as='h4' >CONTACT</Header>
            </Menu.Item>
          </Grid>
        </Menu>
      </Segment>
    </>
  )
}

export default NavBar
