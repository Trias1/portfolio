import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import JobExperience from './components/jobexperience/JobExperience'
import Testimonials from './testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <JobExperience/>
    <Experience/>
    <Services/>
    <Portfolio/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App