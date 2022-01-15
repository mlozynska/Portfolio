import React from 'react'
import TopHeader from './TopHeader'
import Footer from './Footer'
import { Segment, Header, Icon, Image } from 'semantic-ui-react'

import cake1 from '../assets/cake1.png'
import cake2 from '../assets/cake2.png'
import cake3 from '../assets/cake3.png'
import cake4 from '../assets/cake4.png'
import cake5 from '../assets/cake5.png'
import cake6 from '../assets/cake6.png'
import cake7 from '../assets/cake7.png'
import cake8 from '../assets/cake8.png'
import cake9 from '../assets/cake9.png'
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Interests = () => {
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
      <Header id="headerProjects" as="h1" style={{ color: 'rebeccapurple' }}>
        INTERESTS
      </Header>
      <Segment color="red">
        <Header
          id="headerProjects"
          as="h3"
          style={{ color: 'rgb(0 181 173 / 91%)' }}
        >
          Baking
        </Header>
        <Segment style={{ maxWidth: '500px' }}>
          <p style={{ color: 'black' }}>
            I began backing as a child, carefully following recepies for cookies
            and cakes when my grandma taught me the secrets of Polish and
            Ukrainian traditional causine. When moved to London I decided to
            push this passion to higher level and qualified as a Pastry Chef
            from Le Gordon Blue London school.
          </p>

          <p style={{ color: 'black' }}>
            I love to bake birthday cakes and cupcakes for my friends, kids
            friends and of course my family. It is a delightful feeling to make
            another person happy by presenting them a homemade delicacy.
          </p>
        </Segment>

        <Carousel
          showThumbs={false}
          // infiniteLoop={true}
          autoPlay={true}
          interval={2700}
          transitionTime={1000}
          autoFocus={true}
          swipeable={true}
          showStatus={false}
          style={{ maxHeight: '50px' }}
        >
          {cakeImg.map((image) => (
            <img id="carouselImg" src={image} alt={'My cakes'}></img>
          ))}
        </Carousel>
      </Segment>

      <Header
        id="headerProjects"
        as="h3"
        style={{ color: 'rgb(0 181 173 / 91%)' }}
      >
        Dollmaking
      </Header>
      <Header
        id="headerProjects"
        as="h3"
        style={{ color: 'rgb(0 181 173 / 91%)' }}
      >
        Music
      </Header>
      <Footer />
    </>
  )
}
export default Interests
