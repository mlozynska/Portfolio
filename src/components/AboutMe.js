import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import Skills from './Skills'
import ML from '../assets/ML.png'

const AboutMe = () => {
  return (
    <Segment id="segmentAboutMe" basic>
      <Header as="h1" style={{ color: 'rebeccapurple' }}>
        ABOUT
      </Header>
      <Segment basic style={{ margin: '0' }}>
        <p id="shortAbout">
          <em>
            “Motivated entry-level software engineer with MBA degree, hands-on
            managerial experience in marketing and business education, a mother
            of three, in pursuit of most important career and life-style change”
          </em>
        </p>
        <p id="infoAbout">
          Having received good economic and management education (MBA), with a
          particular emphasis on marketing and product placement in business
          education sector, I came to realize during COVID lockdown, through a
          lucky chance, that coding and software engineering is something that
          makes me really happy. Since school days, math, logic and problem
          solving have always been my favorite subjects. I am very much looking
          forward to start my new life and career in software engineering.
        </p>
      </Segment>
      <Skills />
    </Segment>
  )
}
export default AboutMe
