import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div className='project'>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Some of my recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project