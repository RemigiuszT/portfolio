import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Remigiusz Terek</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/remigiusz.terek"><FaFacebookF/></a>
        <a href="https://www.instagram.com/remczok/"><FiInstagram/></a>
        <a href="https://github.com/RemigiuszT"><FiGithub/></a>
        <a href="https://www.linkedin.com/in/remigiusz-terek-b6266b230/"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Remigiusz Terek. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer