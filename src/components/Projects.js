import React from 'react'
import { Header, List, Image, Card, Icon, Divider } from 'semantic-ui-react'
import tetrisColor from '../assets/tetrisColor.png'
import astronomy from '../assets/astronomy.png'
import parks from '../assets/parks.png'
import cars from '../assets/cars.png'
import Footer from './Footer'
import TopHeader from './TopHeader'

const Projects = () => {
  return (
    <>
      <TopHeader />
      <Header id="headerProjects" as="h1" style={{ color: 'rebeccapurple' }}>
        PROJECTS
      </Header>

      <Card.Group itemsPerRow={4} style={{ justifyContent: 'center' }}>
        <Card id="projectCard" color="black">
          <Image src={tetrisColor} style={{ minHeight: '220px' }} />
          <Card.Content style={{ background: 'rgba(0, 181, 173, 0.3)' }}>
            <Header id="cardTitle" as="h3" style={{ color: 'rebeccapurple' }}>
              TETRIS
            </Header>

            <Card.Content id="cardContent">
              Grid-based game, developed with vanilla JavaScript, CSS & HTML.
              The first project of the software engineering immersive course at
              GA London.
            </Card.Content>
            <Card.Meta id="unLi">
              <Divider />
              <p id="cardP">Technologies used:</p>
              <Header id="list">
                <List horizontal bulleted>
                  <List.Item id="list">HTML5</List.Item>
                  <List.Item id="list">CSS</List.Item>
                  <List.Item id="list">Vanilla JavaScript</List.Item>
                </List>
              </Header>
            </Card.Meta>
          </Card.Content>
          <Card.Content id="cardFooter" extra>
            <a href="https://github.com/mlozynska/sei-project-1">
              <Icon name="github" size="large" color="black" />
            </a>
            <a href="https://mlozynska.github.io/sei-project-1/">
              <Icon name="linkify" size="large" color="black" />
            </a>
          </Card.Content>
        </Card>
        <Card id="projectCard" color="black">
          <Image src={astronomy} style={{ minHeight: '220px' }} />
          <Card.Content style={{ background: 'rgba(0, 181, 173, 0.3)' }}>
            <Header id="cardTitle" as="h3" style={{ color: 'rebeccapurple' }}>
              Astronomy Pictures
            </Header>

            <Card.Content id="cardContent">
              The second project of the software engineering immersive course at
              GA London. Astronomy Pictures is a platform where users can find
              astronomy picture of our Universe with a brief explanation written
              by a professional astronomer.
            </Card.Content>
            <Card.Meta id="unLi">
              <Divider />
              <p id="cardP">Technologies used:</p>
              <Header id="list">
                <List horizontal bulleted>
                  <List.Item id="list">React.js</List.Item>
                  <List.Item id="list">CSS</List.Item>
                  <List.Item id="list">Third-party API</List.Item>
                  <List.Item id="list">Bulma</List.Item>
                  <List.Item id="list">Netlify</List.Item>
                  <List.Item id="list">Axios</List.Item>
                  <List.Item id="list">Insomnia</List.Item>
                  <List.Item id="list">Git</List.Item>
                </List>
              </Header>
            </Card.Meta>
          </Card.Content>

          <Card.Content extra id="cardFooter">
            <a href="https://github.com/mlozynska/-SEI-Project-Two">
              <Icon name="github" size="large" color="black" />
            </a>
            <a href="https://astronomy-pictures-ofaday.netlify.app/">
              <Icon name="linkify" size="large" color="black" />
            </a>
          </Card.Content>
        </Card>
        <Card id="projectCard" color="black">
          <Image src={parks} style={{ minHeight: '220px' }} />
          <Card.Content style={{ background: 'rgba(0, 181, 173, 0.3)' }}>
            <Header id="cardTitle" as="h3" style={{ color: 'rebeccapurple' }}>
              Best London Parks
            </Header>
            {/* <p id="cardP" style={{ marginBottom: '10px' }}>
              Team project
            </p> */}
            <Card.Content id="cardContent">
              Third project of the software engineering immersive course at GA -
              Full-Stack MERN Application with CRUD functionality. As a group,
              we created an app with the objective to integrate information
              about the best London parks.
            </Card.Content>
            <Divider />
            <p id="cardP">Tehnologies used:</p>
            <Card.Meta id="unLi">
              <Header id="list">
                <List horizontal bulleted>
                  <List.Item id="list">React.js</List.Item>
                  <List.Item id="list">CSS</List.Item>
                  <List.Item id="list">Third-party API</List.Item>
                  <List.Item id="list">Semantic UI</List.Item>
                  <List.Item id="list">MongoDB</List.Item>
                  <List.Item id="list">Mongoose</List.Item>
                  <List.Item id="list">Axios</List.Item>
                  <List.Item id="list">JWT</List.Item>
                  <List.Item id="list">Heroku</List.Item>
                  <List.Item id="list">Git</List.Item>
                  <List.Item id="list">Insomnia</List.Item>
                  {/* <List.Item id="list"></List.Item> */}
                </List>
              </Header>
            </Card.Meta>
            {/* <Card.Meta></Card.Meta> */}
          </Card.Content>
          <Card.Content extra id="cardFooter">
            <a href="https://github.com/mlozynska/SEI-Project-Three">
              <Icon name="github" size="large" color="black" />
            </a>
            <a href="http://bestlondonparks.herokuapp.com/">
              <Icon name="linkify" size="large" color="black" />
            </a>
          </Card.Content>
        </Card>

        <Card id="projectCard" color="black">
          <Image src={cars} style={{ minHeight: '220px' }} />
          <Card.Content style={{ background: 'rgba(0, 181, 173, 0.3)' }}>
            <Header id="cardTitle" as="h3" style={{ color: 'rebeccapurple' }}>
              VintCars
            </Header>
            <Card.Content id="cardContent">
              Final solo project for the GA Software Engineering Bootcamp.
              Full-stack application with React frontend and Django Framework
              with PostgreSQL and Python on the backend. VintCars is an
              application where user can find and rent a vintage car.
            </Card.Content>
            <Divider />
            <p id="cardP">Tehnologies used:</p>
            <Card.Meta id="unLi">
              <Header id="list">
                <List horizontal bulleted>
                  <List.Item id="list">React.js</List.Item>
                  <List.Item id="list">CSS</List.Item>
                  <List.Item id="list">Django REST Framework</List.Item>
                  <List.Item id="list">Semantic UI</List.Item>
                  <List.Item id="list">PostgreSQL</List.Item>
                  <List.Item id="list">Python</List.Item>
                  <List.Item id="list">Axios</List.Item>
                  <List.Item id="list">TablePlus</List.Item>
                  <List.Item id="list">Heroku</List.Item>
                  <List.Item id="list">Git</List.Item>
                  <List.Item id="list">Insomnia</List.Item>
                  <List.Item id="list">Formspark</List.Item>
                </List>
              </Header>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra id="cardFooter">
            <a href="https://github.com/mlozynska/Project-4">
              <Icon name="github" size="large" color="black" />
            </a>
            <a href="https://vintcars.herokuapp.com/">
              <Icon name="linkify" size="large" color="black" />
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
      {/* <Footer /> */}
    </>
  )
}
export default Projects
