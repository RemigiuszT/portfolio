import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/remflix.png";
import IMG2 from "../../assets/hangmi.png";
import IMG3 from "../../assets/fanrec.png";
import IMG4 from "../../assets/shooter.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Remflix",
    github: "https://github.com/RemigiuszT/Remflix_Netflix-Clone",
    demo: "https://remflix2.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Hangman angular project",
    github: "https://github.com/RemigiuszT/Hangmi",
    demo: "https://hangmi.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "FAN-workshops",
    github: "https://github.com/RemigiuszT/FAN-Records",
    demo: "https://fan-records.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Terga (shooter-game)",
    github: "https://github.com/RemigiuszT/Terga",
    demo: "https://terga-production.up.railway.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
