import React from 'react'
import { Segment } from 'semantic-ui-react'
import Skills from './Skills'

import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import ProjectsHome from './ProjectsHome'

const Home = () => {
  return (
    <Segment id="segmentAboutMe" basic>
      <Hero />
      <About />
      <Skills />
      <ProjectsHome />
      <Footer />
    </Segment>
  )
}
export default Home
