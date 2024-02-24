import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const service = [
  {
    title: "Android Developer",
    list: [
      "Creating M-Learning Applications",
      "Creating a Data List Mahasiswa",
      "Creating a Backend flutter login keycloak",
    ],
  },
  {
    title: "Website Developer",
    list: [
      "Creating a Website-based FotoCopy POS Application",
      "Creating a Website-based Goods Workshop POS Application",
      "Creating a Website-based Wedding Application",
    ],
  },
  {
    title: "Backend Website Developer",
    list: [
      "Creating a Backend Website-based Coffe Shop",
      "Creating a Backend Website-based Fotocopy",
      "Creating a Backend Website laravel login keycloak",
    ],
  },
  {
    title: "Backend In linux",
    list: [
      "Creating a script alerting check Compute Host",
      "Creating a script alerting check Volume service",
      "Creating a script alerting check Host count",
    ],
  },
  {
    title: "Excel",
    list: [
      "membuat script di vba untuk mengetahui Jika formulir belum diisi sesuai aturan yang berlaku atau sudah habis masa berlakunya, maka akan muncul notifikasi tidak dapat dicetak",
    ],
  },
];

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
      {service.map((service, index) => (
        <article className="service" key={index}>
          <div className="service__head">
            <h3>{service.title}</h3>
          </div>
          <ul className="service__list">
            {service.list.map((item, i) => (
              <li key={i}>
                <BiCheck className='service__list-icon'/>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
    </section>
  )
} 
export default Services 