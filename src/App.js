import React, { Component } from 'react';

// import Link from react-scroll library
import { Link } from "react-scroll";

// import components from seperate file
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

// import assets
import portrait from './assets/img/seun_is_cold.png';
import github_image from './assets/img/github.png';
import linkedin_image from './assets/img/linkedin.png';

import { paragraph1, paragraph2, paragraph3, paragraph4 } from './assets/text/description.js';
import { data } from './assets/text/project_data.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">

          <li id="action"><a href="https://drive.google.com/file/d/1c-GUYz8Z_1-AVkS2deGOxK4_G2vzycIG/view?usp=sharing">resume</a></li>
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

        <div id="home-section">
          <Home id="home-page" />
        </div>
        <div id="about-section">
          <About text="about" description1={paragraph1}
            description2={paragraph2} description3={paragraph3} description4={paragraph4} img_url={portrait} />
        </div>
        <div id="project-section">
          <Projects text="projects" list={data} />
        </div>
        <div id="contact-section">
          <Contact img_1={github_image} link_1="https://github.com/seunadekunle" img_2={linkedin_image} link_2="https://www.linkedin.com/in/seun-adekunle/" />
        </div>


      </div>
    );
  }

}

export default App;
