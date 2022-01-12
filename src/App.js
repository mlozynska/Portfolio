import './App.css'
// import { Segment, Header, Divider } from 'semantic-ui-react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <AboutMe />
    </BrowserRouter>
  )
}

export default App
