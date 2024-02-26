import React from 'react'
import './testimonials.css'
import AVTR1 from '../assets/image/avatar1.jpg'
import AVTR2 from '../assets/image/avatar2.jpg'
import AVTR3 from '../assets/image/avatar3.jpg'
import AVTR4 from '../assets/image/avatar4.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Alfan',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rerum neque illum consectetur commodi dolor, reprehenderit nostrum optio repudiandae.Sit perferendis voluptatibus sapiente accusamus veniam accusantium soluta saepe aliquid ducimus!'
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Endah',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rerum neque illum consectetur commodi dolor, reprehenderit nostrum optio repudiandae.Sit perferendis voluptatibus sapiente accusamus veniam accusantium soluta saepe aliquid ducimus!'
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Iqbal',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rerum neque illum consectetur commodi dolor, reprehenderit nostrum optio repudiandae.Sit perferendis voluptatibus sapiente accusamus veniam accusantium soluta saepe aliquid ducimus!'
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Vania',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rerum neque illum consectetur commodi dolor, reprehenderit nostrum optio repudiandae.Sit perferendis voluptatibus sapiente accusamus veniam accusantium soluta saepe aliquid ducimus!'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
     
      <Swiper className="container testimonials__container"
      // install swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id, avatar, name, review}) => {
            return(
              <SwiperSlide key={id} className="testimonials">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className="client__name">{name}</h5>
                <small className="client__review">
                {review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials