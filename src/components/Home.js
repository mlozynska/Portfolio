import React from 'react'
import { Segment } from 'semantic-ui-react'
import Skills from './Skills'

import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import Projects from './Projects'

const Home = () => {
  return (
    <Segment id="segmentAboutMe" basic>
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Footer />
    </Segment>
  )
}
export default Home
