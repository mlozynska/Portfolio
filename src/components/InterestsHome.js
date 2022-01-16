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
      {/* <TopHeader /> */}
      {/* <Header id="interests" as="h2" style={{ color: 'rebeccapurple' }}> */}
      <Header as="h3" id="interests" style={{ color: 'rebeccapurple' }}>
        INTERESTS
      </Header>
      <Segment style={{ margin: '-20px -20px 0 0' }} basic>
        <Header id="headerInterests" as="h3" style={{ padding: '0 20px 0 0' }}>
          Music
        </Header>

        <Segment id="musicSegment" basic>
          <p style={{ color: 'black' }} id="pMusic">
            <em>
              "Without music, life would be a mistake", Friedrich Nietzsche
            </em>
          </p>
          <p style={{ color: 'black' }}>
            Music has always been a part of my life. I believe music has unique
            ability, through sounds, harmonies, tembres and rythms, to convey
            all sorts of thoughts and emotions. Those of joy or sadness,
            happiness or dispare, deep concentration or relaxation. Music can
            tell any story, create any image, call for any action, trigger any
            imagination. Music is much more than a universal language. It still
            remains an unresolved enigma. I am a proud mom of three young
            musicians with whom I study music as well. I adore classical music
            but also enjoy good old pop and rock.
          </p>
        </Segment>
        <Segment style={{ margin: '-20px -20px 0 0' }} basic>
          <Header
            id="headerInterests"
            as="h3"
            style={{ padding: '0 45px 0 0 ' }}
          >
            Baking
          </Header>
          <p style={{ color: 'black' }} id="pBaking">
            <em>
              "The softest pain on Earth must be the pain au chocolat", Alain
              Bremond-Torrent
            </em>
          </p>

          <Segment id="bakingSegment" basic>
            <p style={{ color: 'black' }}>
              I started baking as a child when meticulously followed recepies
              for cookies and cakes when my grandma taught me the secrets of
              Polish and Ukrainian traditional causine. When I moved to London,
              I decided to push this family passion and tradition even further
              and received a Pastry Chef diploma from Le Gordon Blue London
              culinary school.
            </p>

            <p style={{ color: 'black' }}>
              I love to bake birthday cakes and cupcakes for my friends, friends
              of my children and, of course, for my belowed larger family. It is
              such a delightful and rewarding feeling of self-fulfilment to make
              people happy by presenting them a homemade delicacy.
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
          <p style={{ color: 'black' }} id="pBaking">
            <em>
              "A dolls ability to uplift the human spirit can be immeasurable",
              Gayle Wray
            </em>
          </p>
          <Segment id="bakingSegment" basic>
            <p style={{ color: 'black' }}>
              My creative jorney with dolls was inspired by my little daughter.
              When she saw a beautiful handmade textile doll in one of the
              handycraft art magazines she started to dream about having one. I
              decided not to buy but to make a doll by myself. I was, and still
              am, fascinated to watch how pieces of fabric and other bits are
              gradually transformed into beautiful life-like creatures that
              start to live a life of their own.
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
