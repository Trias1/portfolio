import React from "react";
import "./about.css";
import ME from "../../assets/foto-pribadi.jpg";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
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

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ completed</small>
            </article>
          </div>

          <p>
            saya memiliki keterampilan dalam pemrograman dan mengembangkan
            aplikasi terutama di web dan android untuk mengembangkan backend dan frontend. Baru-baru ini
            saya bergabung dengan sebuah perusahaan teknologi yang membantu saya
            meningkatkan pengetahuan saya tentang teknologi, terutama dengan
            java, javascript menggunakan springboot, react, dan mengembangkan
            API dengan API Management seperti WSO2 dan postman. Saya juga berpengalaman
            menggunakan alat middleware lain seperti Redhat Fuse, dan keycloak.
            Terpisah dari situ saya cukup mahir dalam infrastruktur Cloud
            (RHOSP) dan administrasi Linux menggunakan Red Hat Enterprise Linux
            (RHEL) dan Ubuntu server.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
