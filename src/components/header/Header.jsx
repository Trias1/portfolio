import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import mee from '../../assets/image/Foto.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Trias Zaen Mutaqin</h1>
        <h5 className="text-light">Mobile Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header