import React from 'react'
import { Header, Segment, Grid, GridColumn, Image } from 'semantic-ui-react'
import Skills from './Skills'
import MLcroped from '../assets/MLcroped.png'
import Projects from './Projects'
import Hero from './Hero'
// import Experience from './Experience'

const Home = () => {
  return (
    <Segment id="segmentAboutMe" basic>
      <Hero />
      <Header as="h3" style={{ color: 'rebeccapurple' }}>
        ABOUT
      </Header>
      <p id="shortAbout">
        <em>
          “Motivated entry-level software engineer with MBA degree, hands-on
          managerial experience in marketing and business education, a mother of
          three, in pursuit of most important career and life-style change”
        </em>
      </p>
      <Grid columns={2}>
        <GridColumn style={{ padding: '0 0' }} id="leftColumn">
          <Segment id="logoInfo" basic>
            <Image src={MLcroped} centered />
          </Segment>
        </GridColumn>
        <GridColumn style={{ padding: '0 0' }}>
          <p id="infoAbout">
            Having received good economic and management education as well as
            relevant business experience, I came to realize, through a lucky
            chance, during the COVID lockdown that coding is something that
            makes me really happy. General Assembly Software Engineering
            Immersive course turned out to be the best possible kickstart to my
            coding career. Covering a wide range of advanced techniques, the
            course was an incredibly rewarding experience that provided me with
            fundamental understanding of current programming landscape.
          </p>
          <p id="infoAbout">
            Staff and my fellow students were the best discovery. I learnt not
            only about coding but also about different approaches to problem
            solving and productive teamwork. Most important thing I’m taking
            from this experience is restless curiosity and incessant drive to
            explore this profession further. I am very much looking forward to
            start my new life and career in software engineering.
          </p>
        </GridColumn>
      </Grid>
      <Segment basic style={{ margin: '0' }}></Segment>
      <Skills />
    </Segment>
  )
}
export default Home
