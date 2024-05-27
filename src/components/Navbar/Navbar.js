import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./navbar.css";
import logoImg from "../../images/logo.png";
const Navbar = () => {
  return (
    <div className="nav-main" id="intro-page">
      <div className="logo">
        <img src={logoImg} alt="Loading..." />
      </div>
      <div className="nav-item">
        <ScrollLink to="intro-page" smooth={true} duration={500}>
          Home
        </ScrollLink>
      </div>
      <div className="nav-item">
        <ScrollLink to="about" smooth={true} duration={500}>
          About
        </ScrollLink>
      </div>
      <div className="nav-item">
        <ScrollLink to="project-page" smooth={true} duration={500}>
          Projects
        </ScrollLink>
      </div>
      <div className="nav-item">
        <ScrollLink to="contact-page" smooth={true} duration={500}>
          Contact Me
        </ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;
