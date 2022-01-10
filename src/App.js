import './App.css'
import { Segment, Header } from 'semantic-ui-react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
      </BrowserRouter>
      <Segment>
        <Header>My Portfolio</Header>
      </Segment>
    </>
  )
}

export default App
