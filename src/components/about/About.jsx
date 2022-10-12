import React from 'react'
import './about.css'
import ME from '../../assets/foto-pribadi.jpg'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              {/* <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>1 Years Working</small>
              </article> */}
              
              {/* <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>200+ </small>
              </article> */}

              <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>3+ completed</small>
              </article>
            </div>

            <p>
            Hello introducing myself Trias, from Jakarta, I recently graduated from the National University majoring in Information Systems with an interest in Technology. 
            My expertise includes, but is not limited to Java, Android, and MySQL. 
            I'm currently looking for a job opportunity that can give me the opportunity to grow
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About