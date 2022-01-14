import React from 'react'
import { Segment } from 'semantic-ui-react'
import Skills from './Skills'

import Hero from './Hero'
import About from './About'

const Home = () => {
  return (
    <Segment id="segmentAboutMe" basic>
      <Hero />
      <About />
      <Skills />
    </Segment>
  )
}
export default Home
