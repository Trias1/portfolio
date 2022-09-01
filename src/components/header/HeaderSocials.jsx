import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/trias-zaen-mutaqin-55907b175/" target="https://www.linkedin.com/in/trias-zaen-mutaqin-55907b175/"><BsLinkedin/></a>
        <a href="https://github.com/Trias1" target="https://github.com/Trias1"><BsGithub/></a>
        <a href="https://www.instagram.com/tzm_12/" target="https://www.instagram.com/tzm_12/"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials