import React, { Component } from 'react';
import '../css/Sidebar.css';

import { slide as Menu } from 'react-burger-menu';

// import Link from react-scroll library
import { Link } from "react-scroll";

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
    return (
      <Menu right width={'50%'} style={{ height: '100%' }} isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}>

        <li class="mobile_nav">
          <Link
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => this.closeMenu()}>about</Link>
        </li>
        <li class="mobile_nav">
          <Link
            activeClass="active"
            to="xp-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => this.closeMenu()}>xp</Link></li>
        <li class="mobile_nav">
          <Link
            activeClass="active"
            to="project-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => this.closeMenu()}>projects</Link></li>
        <li class="mobilenav">
          <Link
            activeClass="active"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => this.closeMenu()}>contact</Link></li>
        <li class="mobile_nav" id="action_mobile">
          <a href="https://drive.google.com/file/d/1k2ycekJase8mgPfAJaJkY5yufhzasUCS/view?usp=sharing">
            resume
          </a>
        </li>
      </Menu>

    )
  }
}

export default Sidebar;