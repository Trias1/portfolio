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

const portfolioData = [
  {
    title: "Mobile Programming",
    imageSrc: IMG2,
    githubLink: "https://github.com/Trias1/android",
  },
  {
    title: "POS WebSite FotoCopy",
    imageSrc: IMG1,
    githubLink: "https://github.com/Trias1/Fotocopy-website",
  },
  {
    title: "Wedding Website",
    imageSrc: IMG3,
    githubLink: "https://github.com/Trias1/wed-finnaly",
    liveDemoLink: "https://wed-finnaly.vercel.app/",
  },
  {
    title: "Backend Coffe shop ",
    imageSrc: IMG2,
    githubLink: "https://github.com/Trias1/cofps",
  },
  {
    title: "Data list kampus ",
    imageSrc: IMG2,
    githubLink: "https://github.com/Trias1/Kampus",
  },
  {
    title: "Project Keycloak",
    imageSrc: IMG2,
    githubLink: "https://github.com/Trias1/keycloaks",
  }, 
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {portfolioData.map((item, index) => (
        <article className="portfolio__item" key={index}>
          <div className="portfolio__item-image">
            <img src={item.imageSrc} alt={"_target_blank"} />
          </div>
          <h3>{item.title}</h3>
          <div className="portfolio__item-cta">
            <a
              href={item.githubLink}
              className="btn"
              target="_blank"
              onClick={(event) => Success()}
            >
              Github
            </a>
            {item.liveDemoLink && (
              <a
                href={item.liveDemoLink}
                className="btn btn-primary"
                target="_blank"
                onClick={(event) => Success()}
              >
                Live Demo
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
    </section>
  );
};

export default Portfolio;
