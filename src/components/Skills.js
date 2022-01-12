import React from 'react'
import { Header, Segment, Card, Image } from 'semantic-ui-react'

const Skills = () => {
  return (
    <Segment basic>
      <Header as="h3" style={{ color: 'rebeccapurple' }}>
        SKILLS
      </Header>
      <Segment basic style={{ padding: '0 50px' }}>
        <Card.Group itemsPerRow={7} style={{ justifyContent: 'center' }}>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
                  }
                  size="mini"
                />
                <p id="iconId">HTML5</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">CSS</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">JavaScript</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">React</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">Express</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">NodeJs</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">MongoDB</p>
              </Segment>
            </Card.Content>
          </Card>
        </Card.Group>

        <Card.Group itemsPerRow={7} style={{ justifyContent: 'center' }}>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image src={'https://i.imgur.com/GQ22h5d.png'} size="mini" />
                <p id="iconId">Semantic UI</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">VS Code</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg'
                  }
                  size="mini"
                />
                <p id="iconId">Bulma</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-line.svg'
                  }
                  size="mini"
                />
                <p id="iconId">Django</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">Python</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">PostgreSQL</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
                  }
                  size="mini"
                />
                <p id="iconId">NPM</p>
              </Segment>
            </Card.Content>
          </Card>
        </Card.Group>
        <Card.Group itemsPerRow={7} style={{ justifyContent: 'center' }}>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">Yarn</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">Heroku</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image src={'https://i.imgur.com/Y0hKfq3.png'} size="mini" />
                <p id="iconId">Netlify</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">Git</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">GitHub</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">Slack</p>
              </Segment>
            </Card.Content>
          </Card>
          <Card id="iconCard" raised color="black">
            <Card.Content
              id="iconCardContent"
              style={{ background: '#00b5ad4d' }}
            >
              <Segment id="iconSegment" basic>
                <Image
                  src={
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
                  }
                  size="mini"
                />
                <p id="iconId">Figma</p>
              </Segment>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    </Segment>
  )
}
export default Skills
