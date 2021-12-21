import React from 'react';
import './Sidebar.css';

import { slide as Menu } from 'react-burger-menu';

// import Link from react-scroll library
import { Link } from "react-scroll";

export default props => {
  return (
    <Menu right width={ '20%' }>
        <li id="action">
          <a href="https://drive.google.com/file/d/1k2ycekJase8mgPfAJaJkY5yufhzasUCS/view?usp=sharing">
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
    </Menu>

  );
};