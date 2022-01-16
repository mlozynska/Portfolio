import React from 'react'
import TopHeader from './TopHeader'
import Footer from './Footer'
import { Segment, Header, Grid, Image } from 'semantic-ui-react'
import cake1 from '../assets/cake1.png'
import cake2 from '../assets/cake2.png'
import cake3 from '../assets/cake3.png'
import cake4 from '../assets/cake4.png'
import cake5 from '../assets/cake5.png'
import cake6 from '../assets/cake6.png'
import cake7 from '../assets/cake7.png'
import cake8 from '../assets/cake8.png'
import cake9 from '../assets/cake9.png'
import doll1 from '../assets/doll1.png'
import doll2 from '../assets/doll2.png'
import doll3 from '../assets/doll3.png'
import doll4 from '../assets/doll4.png'
import doll5 from '../assets/doll5.png'
import doll6 from '../assets/doll6.png'
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const InterestsHome = () => {
  const cakeImg = [
    cake1,
    cake2,
    cake3,
    cake4,
    cake5,
    cake6,
    cake7,
    cake8,
    cake9
  ]
  return (
    <>
      <TopHeader />
      {/* <Header id="interests" as="h2" style={{ color: 'rebeccapurple' }}> */}
      <Header as="h3" style={{ color: 'rebeccapurple' }}>
        INTERESTS
      </Header>
      <Segment style={{ margin: '-20px -20px 0 0' }} basic>
        <Header id="headerInterests" as="h3" style={{ padding: '0 33px 0 0' }}>
          Music
        </Header>

        <Segment id="musicSegment" basic>
          <p style={{ color: 'black' }} id="pMusic">
            <em>
              "Without music, life would be a mistake", Friedrich Nietzsche
            </em>
          </p>
          <p style={{ color: 'black' }}>
            Music has always been part of my life. I believe music has the
            ability to convey all sorts of emotion. Whether the emotion is joy
            and happines or sadness and despair through the rhythms, harmonies
            and the lyrics. The fact that music can tell a story, create images,
            or a personal connection through song is amazing.
          </p>
        </Segment>
        <Segment style={{ margin: '-20px -20px 0 0' }} basic>
          <Header
            id="headerInterests"
            as="h3"
            style={{ padding: '0 50px 0 0 ' }}
          >
            Baking
          </Header>

          <Segment id="bakingSegment" basic>
            <p style={{ color: 'black' }}>
              I start backing as a child, carefully following recepies for
              cookies and cakes when my grandma taught me the secrets of Polish
              and Ukrainian traditional causine. When moved to London I decided
              to push this passion to higher level and qualified as a Pastry
              Chef from Le Gordon Blue London school.
            </p>

            <p style={{ color: 'black' }}>
              I love to bake birthday cakes and cupcakes for my friends, kids
              friends and of course for my family. It is such a delightful
              feeling to make another person happy by presenting them a homemade
              delicacy.
            </p>
          </Segment>

          <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={2550}
            transitionTime={1000}
            autoFocus={true}
            showStatus={false}
            infiniteLoop={true}
            stopOnHover={false}
            style={{ maxHeight: '50px' }}
          >
            {cakeImg.map((image) => (
              <img id="carouselImg" src={image} alt={'My cakes'}></img>
            ))}
          </Carousel>
        </Segment>

        <Segment style={{ margin: '-20px -20px 0 0' }} basic>
          <Header
            id="headerInterests"
            as="h3"
            style={{ padding: '0 43px 0 0 ' }}
          >
            Dollmaking
          </Header>

          <Segment id="bakingSegment" basic>
            <p style={{ color: 'black' }}>
              My creative jorney with dolls was inspired by my little daughter.
              When she saw a beautiful handmade textile doll in one of the
              handycraft art magazines she started to dream about having one. I
              decided not to buy but to make a doll by myself. I was surprised
              how pieces of fabric were gradually turning into a beautiful
              life-like creature.
            </p>
          </Segment>

          <Grid centered style={{ margin: '5px' }}>
            <Image src={doll1} style={{ margin: '5px' }} size="small " />
            <Image src={doll2} style={{ margin: '5px' }} size="small" />
            <Image src={doll3} style={{ margin: '5px' }} size="small" />
            <Image src={doll4} style={{ margin: '5px' }} size="small" />
            <Image src={doll5} style={{ margin: '5px' }} size="small" />
            <Image src={doll6} style={{ margin: '5px' }} size="small" />
          </Grid>
        </Segment>
      </Segment>
      {/* <Footer /> */}
    </>
  )
}
export default InterestsHome
