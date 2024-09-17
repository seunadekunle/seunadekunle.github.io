import React from "react";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

import "../css/Navbar.css";


function Navbar() {
  const history = useHistory();

  const toResume = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    history.push("/resume");
  };

  return (
    <div className="nav_wrapper">
      <div className="nav">
        <li id="action">
          <a href="/" onClick={toResume}>
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
            duration={500}
          >
            contact
          </Link>
        </li>
        {/* <li>
          <Link
            activeClass="active"
            to="project-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            links
          </Link>
        </li> */}
        <li>
          <Link
            activeClass="active"
            to="project-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="xp-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            xp
          </Link>
        </li>
        <li></li>
        <li>
          <Link
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            about
          </Link>
        </li>
        <li id="home">
          <Link
            activeClass="active"
            to="home-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <strong>seun</strong>
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
