import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Professional Services</h2>

      <div className="container services__container">
        {/* Dynamic Front-End Development */}
        <article className="service">
          <div className="service__head">
            <h3>Dynamic Front-End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Expertise in React, Redux, and Angular for responsive UIs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Advanced styling with CSS3, SCSS, Tailwind, and Bootstrap</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building scalable and SEO-friendly web applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating RESTful APIs and managing state with Redux</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing ecommerce platforms and custom solutions</p>
            </li>
          </ul>
        </article>

        {/* Collaborative Software Development */}
        <article className="service">
          <div className="service__head">
            <h3>Collaborative Software Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building modern full-stack applications with NodeJS and
                ExpressJS
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Utilizing MongoDB and SQL for robust data management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementing microservices and containerization with Docker</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Effective team collaboration using Git, JIRA, and Agile
                methodologies
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing and optimizing performance for large-scale projects
              </p>
            </li>
          </ul>
        </article>

        {/* Education and Mentoring */}
        <article className="service">
          <div className="service__head">
            <h3>Education and Mentoring</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Leading Python, Lua, and Scratch programming courses</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducting workshops and events for IT enthusiasts across Poland
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mentoring individuals and groups in front-end technologies</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Sharing insights on UI/UX design principles and best practices
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building strong client relationships and communication skills
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
