import React from 'react'
import { Segment, Header, Image, Grid, GridColumn } from 'semantic-ui-react'
import logo from '../assets/logo.png'
import code from '../assets/code.img'
import background from '../assets/background.png'

const Hero = () => {
  return (
    <Segment basic style={{ margin: '0' }} inverted>
      <div style={{ background: 'src/assets/background.img'}}></div>
      <Grid columns={2}>
        <GridColumn style={{ padding: '0 0' }} id="leftColumn" >
          <Segment id="logoInfo" basic>
            <Image src={logo} id="logo" centered />
            <Header as="h1">Mariana Lozynska </Header>
            <p as="h4">Software Developer</p>
          </Segment>
        </GridColumn>
        <GridColumn style={{ padding: '0 0' }}>
          <Image src={background} id="background" fluid></Image>
        </GridColumn>
      </Grid>
    </Segment>
    // <Segment basic style={{ margin: '0' }}>
    //   <Grid columns={2}>
    //     <GridColumn style={{ padding: '15px 0' }} id="leftColumn" >
    //       <Segment id="logoInfo" basic>
    //         <Image src={logo} id="logo" centered />
    //         <Header as="h1">Mariana Lozynska </Header>
    //         <Header as="h4">Software Developer</Header>
    //       </Segment>
    //     </GridColumn>
    //     <GridColumn style={{ padding: '15px 0' }}>
    //       <Image src={background} fluid></Image>
    //     </GridColumn>
    //   </Grid>
    // </Segment>
  )
}
export default Hero
