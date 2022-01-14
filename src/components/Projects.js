import React from 'react'
import { Segment, Header, List, Image, Card, Icon } from 'semantic-ui-react'
import tetris from '../assets/tetris.png'
import astronomy from '../assets/astronomy.png'
import parks from '../assets/parks.png'
import cars from '../assets/cars.png'

const Projects = () => {
  return (
    <Segment id="segmentProjects" basic>
      <Header id="headerProjects" as="h2" style={{ color: 'rebeccapurple' }}>
        PROJECTS
      </Header>
      <Card.Group itemsPerRow={4} style={{ justifyContent: 'center' }}>
        <Card id="projectCard" color="black">
          <Image src={tetris} style={{ maxHeight: '220px' }} />
          <Card.Content style={{ background: 'rgba(0, 181, 173, 0.3)' }}>
            <Header id="cardTitle" as="h3" style={{ color: 'rebeccapurple' }}>
              TETRIS
            </Header>
            <Card.Meta id="unLi">
              <Header id="list">
                <List horizontal bulleted>
                  <List.Item id="list">HTML5</List.Item>
                  <List.Item id="list">CSS</List.Item>
                  <List.Item id="list">Vanilla JavaScript</List.Item>
                </List>
              </Header>
            </Card.Meta>
            <Card.Meta>
              <p id="cardP" style={{ marginBottom: '10px' }}>
                Solo project
              </p>
            </Card.Meta>
            <Card.Content id="cardContent">
              The first project of the software engineering immersive course at
              GA London was to build a game, only using vanilla JavaScript, CSS
              & HTML. I had a choice to pick from 10 different games. My
              shortlist was – Tetris, Snake and Battleships. Finally, I decided
              to choose Tetris, because it is my favourite game from my
              childhood. I expected to face a lot of challenges with this game.
            </Card.Content>
          </Card.Content>
          <Card.Content extra style={{ background: 'rgb(240 227 246)' }}>
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
            <Card.Meta id="unLi">
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
            <Card.Meta>
              <p id="cardP" style={{ marginBottom: '10px' }}>
                Team project
              </p>
            </Card.Meta>
            <Card.Content id="cardContent">
              The second project of the software engineering immersive course at
              GA London was a small Reactathon. The assignment was to build a
              React app that uses an external API, the project was completed in
              a partner within 48 hours. Astronomy Pictures is a platform where
              users can find for each day a different image or photograph of our
              Universe with a brief explanation written by a professional
              astronomer.
            </Card.Content>
          </Card.Content>
          <Card.Content extra style={{ background: 'rgb(240 227 246)' }}>
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
            <Card.Meta>
              <p id="cardP" style={{ marginBottom: '10px' }}>
                Team project
              </p>
            </Card.Meta>
            <Card.Content id="cardContent">
              Third project for GA bootcamp as part of a team, Full-Stack MERN
              Application with CRUD functionality. As a group, we created an app
              with the objective to integrate information about the best London
              parks. We all worked full-stack whereas my responsibilities were:
              to build and fill in the database, to create comments
              functionality, build the weather forecast component using public
              API, as well as create and style the park page.
            </Card.Content>
          </Card.Content>
          <Card.Content extra style={{ background: 'rgb(240 227 246)' }}>
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
            <Card.Meta>
              <p id="cardP" style={{ marginBottom: '10px' }}>
                Solo project
              </p>
            </Card.Meta>
            <Card.Content id="cardContent">
              This was the final solo project for the General Assembly Software
              Engineering Bootcamp, applying the knowledge from the last module
              - use of Django Framework with PostgreSQL and Python programming
              language on the backend and continuing to practice with React node
              for the front-end. I decided to do this project solo, because I
              wanted to go through the whole process of building an application.
              My application allows me to find and rent a vintage car.
            </Card.Content>
          </Card.Content>
          <Card.Content extra style={{ background: 'rgb(240 227 246)' }}>
            <a href="https://github.com/mlozynska/Project-4">
              <Icon name="github" size="large" color="black" />
            </a>
            <a href="https://vintcars.herokuapp.com/">
              <Icon name="linkify" size="large" color="black" />
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
    </Segment>
  )
}
export default Projects
