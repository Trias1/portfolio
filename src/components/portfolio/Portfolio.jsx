import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/android.jpg";
import IMG2 from "../../assets/website.png";
import IMG3 from "../../assets/wedding.png";

function Gagal() {
  alert("Sorry, the page you are looking for does not exist");
}

function Success(){
  alert("page moved successfully")
}

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt={"_target_blank"} />
          </div>
          <h3>Mobile Programming</h3>
          <div className="portfolio__item-cta">
            <a
              href={"https://github.com/Trias1/android"}
              className="btn"
              target="_blank"
              onClick={event=>Success()}
            >
              Github
            </a>
            <a
              href={"https://drive.google.com/file/d/1vthSYl9_o2WGuyUsyNLs3NtYsqxZd-Ge/view"}
              className="btn btn-primary"
              target="_blank"
              onClick={event=>Success()}
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt={"_target_blank"} />
          </div>
          <h3>POS WebSite FotoCopy</h3>
          <div className="portfolio__item-cta">
            <a
              href={"https://github.com/Trias1/Fotocopy-website"}
              className="btn"
              target="_blank"
              onClick={event=>Success()}
            >
              Github
            </a>
            <a
              className="btn btn-primary"
              target="_blank"
              onClick={event=>Gagal()}
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt={"_target_blank"} />
          </div>
          <h3>Wedding Website</h3>
          <div className="portfolio__item-cta">
            <a
              href={"https://github.com/Trias1/wed-finnaly"}
              className="btn"
              target="_blank"
              onClick={event=>Success()}
            >
              Github
            </a>
            <a
              href={"https://wed-finnaly.vercel.app/"}
              className="btn btn-primary"
              target="_blank"
              onClick={event=>Success()}
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>

      {/* <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />  
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
              </div>
            </article>
            )
          })
        }
    </div> */}
    </section>
  );
};

export default Portfolio;
