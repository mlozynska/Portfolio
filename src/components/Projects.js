import React from 'react'
import { Header, List, Image, Card, Icon, Divider } from 'semantic-ui-react'
import tetrisColor from '../assets/tetrisColor.png'
import astronomy from '../assets/astronomy.png'
import parks from '../assets/parks.png'
import cars from '../assets/cars.png'
import Footer from './Footer'
import TopHeader from './TopHeader'
import ProjectsHome from './ProjectsHome'

const Projects = () => {
  return (
    <>
      <TopHeader />
      <ProjectsHome />
      <Footer />
    </>
  )
}
export default Projects
