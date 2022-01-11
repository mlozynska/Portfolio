import React from 'react'
import { Segment, Menu, MenuItem, Header, Grid } from 'semantic-ui-react'
// import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <>
      <Segment basic style={{ padding: '14px 0 0 0' }} inverted>
        <Menu secondary position="center">
          {/* <MenuItem position="center"> */}
          <Grid columns={4} style={{ justifyContent: 'center' }}>
            <Menu.Item>
              <Header as="h4">ABOUT</Header>
            </Menu.Item>
            {/* <Menu.Item as={Link} to="/About">ABOUT</Menu.Item> */}
            <Menu.Item>PROJECTS</Menu.Item>
            <Menu.Item>TECHNOLOGIES</Menu.Item>
            <Menu.Item>CONTACT</Menu.Item>
            {/* </MenuItem> */}
          </Grid>
        </Menu>
      </Segment>
    </>
  )
}

export default NavBar
