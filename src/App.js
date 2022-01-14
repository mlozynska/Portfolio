import './App.css'
// import { Segment, Header, Divider } from 'semantic-ui-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
// import Hero from './components/Hero.js'
import Projects from './components/Projects.js'
import Experiences from './components/Experiences.js'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
