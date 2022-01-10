import React from 'react'
import { Segment, Menu, Grid, Image } from 'semantic-ui-react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Segment>
      <Menu>
        <Grid>
          <Menu.Item>{/* <Image src={logo} id="logo "></Image> */}</Menu.Item>
        </Grid>
      </Menu>
    </Segment>
  )
}

export default NavBar
