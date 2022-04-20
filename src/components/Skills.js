import React from 'react'
import { Header, Segment, Card, Image } from 'semantic-ui-react'
import 'animate.css'

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
    },
    {
      name: 'CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Express',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
      name: 'NodeJs',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'Semantic UI',
      logo: 'https://i.imgur.com/GQ22h5d.png'
    },
    {
      name: 'VS Code',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
      name: 'Bulma',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg'
    },
    {
      name: 'Django',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'PostreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'NPM',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
    },
    {
      name: 'Yarn',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg'
    },
    {
      name: 'Heroku',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg'
    },
    {
      name: 'Netlify',
      logo: 'https://i.imgur.com/Y0hKfq3.png'
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'Slack',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg'
    },
    {
      name: 'Figma',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    }
  ]
  return (
    <Segment basic style={{ margin: '25px 0 0 0' }}>
      <Header className="interests" as="h3" style={{ color: 'rebeccapurple' }}>
        <u>SKILLS</u>
      </Header>
      <Segment
        id="skillsAnimation"
        basic
        // style={{ padding: '0 20px' }}
        className="animate__animated animate__backInLeft"
      >
        <Card.Group itemsPerRow={5} style={{ justifyContent: 'center' }}>
          {skills.map((skill) => {
            return (
              <Card raised color="black" style={{ width: '110px' }}>
                <Card.Content
                  id="iconCardContent"
                  style={{ background: '#00b5ad4d' }}
                >
                  <Segment id="iconSegment" basic>
                    <Image src={skill.logo} size="tiny" />
                    <p id="iconId">{skill.name}</p>
                  </Segment>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </Segment>
    </Segment>
  )
}
export default Skills
