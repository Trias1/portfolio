import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Android Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating M-Learning Applications</p>
            </li>
          </ul>
        </article>
        {/* END OF ANDROID */}

        <article className="service">
          <div className="service__head">
            <h3>Website Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating a Website-based FotoCopy POS Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating a Website-based Goods Workshop POS Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating a Website-based Wedding Application</p>
            </li>
            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Website Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating a Backend Website-based Coffe Shop</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating a Website-based Goods Workshop POS Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating a Website-based Wedding Application</p>
            </li> */}
            
          </ul>
        </article>
        {/* END OF Website */}
      </div>
    </section>
  )
} 
export default Services 