import React, { Component } from 'react';
import './Sidebar.css';

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

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
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