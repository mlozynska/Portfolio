import React from 'react'
import { Header, List, Image, Card, Icon, Divider } from 'semantic-ui-react'
import tetrisColor from '../assets/tetrisColor.png'
import astronomy from '../assets/astronomy.png'
import parks from '../assets/parks.png'
import cars from '../assets/cars.png'

const ProjectsHome = () => {
  const projects = [
    {
      name: 'TETRIS',
      description:
        'Grid-based game, developed with vanilla JavaScript, CSS & HTML. The first project of the software engineering immersive course at GA London.',
      technologies: ['HTML5', 'CSS', 'Vanilla JavaScript'],
      image: tetrisColor,
      link: 'https://github.com/mlozynska/sei-project-1',
      gitLink: 'https://github.com/mlozynska/sei-project-1'
    },
    {
      name: 'Astronomy pictures',
      description:
        'The second project of the software engineering immersive course at GA London. Astronomy Pictures is a platform where users can find astronomy picture of our Universe with a brief explanation written by a professional astronomer.',
      technologies: [
        'React.js',
        'CSS',
        'Third-party API',
        'Bulma',
        'Netlify',
        'Axios',
        'Insomnia',
        'Git'
      ],
      image: astronomy,
      link: 'https://astronomy-pictures-ofaday.netlify.app/',

      gitLink: 'https://github.com/mlozynska/-SEI-Project-Two'
    },
    {
      name: 'Best London Parks',
      description:
        'Third project of the software engineering immersive course at GA - Full-Stack MERN Application with CRUD functionality. As a group, we created an app with the objective to integrate information about the best London parks.',
      technologies: [
        'React.js',
        'CSS',
        'Third-party API',
        'Semantic UI',
        'MongoDB',
        'Mongoose',
        'Axios',
        'JWT',
        'Heroku',
        'Git',
        'Insomnia'
      ],
      image: parks,
      link: 'http://bestlondonparks.herokuapp.com/',
      gitLink: 'https://github.com/mlozynska/SEI-Project-Three'
    },
    {
      name: 'VintCars',
      description:
        'Final solo project for the GA Software Engineering Bootcamp. Full-stack application with React frontend and Django Framework with PostgreSQL and Python on the backend. VintCars is an application where user can find and rent a vintage car.',
      technologies: [
        'React.js',
        'CSS',
        'Django REST Framework',
        'Semantic UI',
        'PostgreSQL',
        'Python',
        'Axios',
        'TablePlus',
        'Heroku',
        'Git',
        'Insomnia',
        'Formspark'
      ],
      image: cars,
      link: 'https://vintcars.herokuapp.com/',
      gitLink: 'https://github.com/mlozynska/Project-4'
    }
  ]

  return (
    <>
      <Header className="interests" as="h3" style={{ color: 'rebeccapurple' }}>
        <u>PROJECTS</u>
      </Header>
      <Card.Group itemsPerRow={4} style={{ justifyContent: 'center' }}>
        {projects.map((project) => {
          return (
            <Card id="projectCard" color="black">
              <Image src={project.image} style={{ minHeight: '220px' }} />
              <Card.Content style={{ background: 'rgba(0, 181, 173, 0.3)' }}>
                <Header
                  id="cardTitle"
                  as="h3"
                  style={{ color: 'rebeccapurple' }}
                >
                  {project.name}
                </Header>

                <Card.Content id="cardContent">
                  {project.description}
                </Card.Content>
                <Card.Meta id="unLi">
                  <Divider />
                  <p id="cardP">Technologies used:</p>
                  <Header id="list">
                    <List horizontal bulleted>
                      {project.technologies.map((technologie) => {
                        return <List.Item id="list">{technologie}</List.Item>
                      })}
                    </List>
                  </Header>
                </Card.Meta>
              </Card.Content>
              <Card.Content id="cardFooter" extra>
                <a href={project.gitLink}>
                  <Icon name="github" size="large" color="black" />
                </a>
                <a href={project.link}>
                  <Icon name="linkify" size="large" color="black" />
                </a>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    </>
  )
}
export default ProjectsHome
