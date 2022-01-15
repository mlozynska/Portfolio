import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import TopHeader from './components/TopHeader'

// import Footer from './components/Footer.js'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
