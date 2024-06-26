import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Trias Zaen Mutaqin</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#jobexperience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://linkedin.com"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Trias Zaen Mutaqin. Portfolio.</small>
      </div>
    </footer>
  )
}

export default Footer