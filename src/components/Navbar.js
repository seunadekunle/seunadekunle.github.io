import React from 'react';
import './Navbar.css';

// import Link from react-scroll library
import { Link } from "react-scroll";

function Navbar(param) {

  console.log(param.val);
  return (
    <div className="nav">
      <li id="action">
        <a href="https://drive.google.com/file/d/1c-GUYz8Z_1-AVkS2deGOxK4_G2vzycIG/view?usp=sharing">
          resume
        </a>
      </li>
      <li>
        <Link
          activeClass="active"
          to="contact-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>contact</Link></li>

      <li>
        <Link
          activeClass="active"
          to="project-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>projects</Link></li>
      <li>
        <Link
          activeClass="active"
          to="about-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>about</Link></li>
      <li id="home">
        <Link
          activeClass="active"
          to="home-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}><strong>seun</strong></Link></li>
    </div>
  );
}

export default Navbar;