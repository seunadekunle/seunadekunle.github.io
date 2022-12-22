import React, { Component } from "react";

// import components from seperate file
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import Xp from "./components/xp.js";

// import assets
import portrait from "./assets/img/download.png";

import {
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
} from "./assets/text/description.js";
import { data } from "./assets/text/project_data.js";
import { xp_data } from "./assets/text/xp_data.js";

import "./App.css";

class App extends Component {
  render() {
    console.log("height");
    return (
      <div className="App" style={{ height: "100%" }}>
        <Navbar />

        <div id="sidebar-section" style={{ height: "100%" }}>
          <Sidebar />
        </div>

        <div id="home-section">
          <Home id="home-page" />
        </div>
        <div id="about-section">
          <About
            text="about"
            description1={paragraph1}
            description2={paragraph2}
            description3={paragraph3}
            description4={paragraph4}
            img_url={portrait}
          />
        </div>
        <div id="xp-section">
          <Xp text="xp" list={xp_data} />
        </div>
        <div id="project-section">
          <Projects text="projects" list={data} />
        </div>
        <div id="contact-section" list={xp_data}>
          <Contact
            link_1="https://github.com/seunadekunle"
            link_2="https://www.linkedin.com/in/seun-adekunle/"
          />
        </div>
      </div>
    );
  }
}

export default App;
