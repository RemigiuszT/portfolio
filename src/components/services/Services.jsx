import React from "react"
import "./services.css"
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return(
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Teaching programming and Business</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Teaching programming in python</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Teaching programming in scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Teaching programming with lua</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating events for students from around the Poland</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building realtions with clients</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating websites from scratch with html and css</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating websites with React , javascript from scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Styling websites with advanced css</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Styling websites with bootstrap</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cooperate with other developers on projects</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating websites with api and database</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building Own Portfolio</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Creating Apps</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating simple apps like todo</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating arrays apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating food app</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building Netflix-clone</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building Collaborating Project</p>
            </li>
          </ul>
        </article>
        {/* END OF Creating apps */}
      </div>
    </section>
  )
};

export default Services;
