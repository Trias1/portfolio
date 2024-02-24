import React from "react";
import "./about.css";
import ME from "../../assets/foto-pribadi.jpg";
import { VscFolderLibrary } from "react-icons/vsc";
import CTA from "../header/CTA";
import { useState } from "react";
const About = () => {
  const [activeNav, setActiveNav] = useState("#");
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
          <a
            href="#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio" ? "active" : ""}
          >
            <div className="about__cards">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>6+ completed</small>
              </article>
            </div>
          </a>
          <p>
            saya memiliki keterampilan dalam pemrograman dan mengembangkan
            aplikasi terutama di web dan android untuk mengembangkan backend dan
            frontend. Baru-baru ini saya bergabung dengan sebuah perusahaan
            teknologi yang membantu saya meningkatkan pengetahuan saya tentang
            teknologi, terutama dengan java, javascript menggunakan springboot,
            react, dan mengembangkan API dengan API Management seperti WSO2 dan
            postman. Saya juga berpengalaman menggunakan alat middleware lain
            seperti Redhat Fuse, dan keycloak. Terpisah dari situ saya cukup
            mahir dalam infrastruktur Cloud (RHOSP) dan administrasi Linux
            menggunakan Red Hat Enterprise Linux (RHEL) dan Ubuntu server.
          </p>
          {/* <CTA /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
