import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/remigiusz-terek-b6266b230/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/RemigiuszT" target="_blank">
        <GoMarkGithub />
      </a>
      <a href="https://www.instagram.com/remczok/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
