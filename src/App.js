import './App.css'
import { Segment, Header } from 'semantic-ui-react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Hero />
      </BrowserRouter>
      <Segment>
        <Header>My Portfolio</Header>
      </Segment>
    </>
  )
}

export default App
