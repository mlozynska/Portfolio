import React from 'react'
import { Segment, Grid, Image } from 'semantic-ui-react'
import MLcircle from '../assets/MLcircle.png'

const About = () => {
  return (
    <>
      <Grid columns={2} style={{ justifyContent: 'center' }}>
        <Grid.Column
          style={{ padding: '10px 0 0 40px' }}
          id="leftColumn"
          width={4}
        >
          <Image src={MLcircle} size="small" />
        </Grid.Column>
        <Grid.Column style={{ margin: '0' }} width={10}>
          <Segment basic id="segmentAbout">
            <p id="infoAbout" style={{ color: 'rebeccapurple' }}>
              <em>
                <strong>
                  “Motivated entry-level software engineer with MBA degree,
                  hands-on managerial experience in marketing and business
                  education, a mother of three, in pursuit of the most important
                  career and life-style change.”
                </strong>
              </em>
            </p>
            <p id="infoAbout">
              Having received good economic and management education as well as
              relevant business experience, I came to realise, through a lucky
              chance, during the COVID lockdown that coding is something that
              makes me really happy. General Assembly Software Engineering
              Immersive course turned out to be the best possible kickstart to
              my coding career. Covering a wide range of advanced techniques,
              the course was an incredibly rewarding experience that provided me
              with a fundamental understanding of the current programming
              landscape.
            </p>
            <p id="infoAbout">
              Staff and my fellow students were the best discovery. I learnt not
              only about coding but also about different approaches to problem
              solving and productive teamwork. Most important thing I’m taking
              from this experience is restless curiosity and an incessant drive
              to explore this profession further. I am very much looking forward
              to start my new life and career in software engineering.
            </p>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )
}
export default About
