import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME2 from "../../assets/ME2.png";
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Remigiusz Terek</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img id="ME" src={ME2} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
