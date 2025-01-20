import React from 'react';
import './css/Contact.css';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';

function Contact() {
  return (
    <div className="outer">
      <h1 id="contact-header">Get in touch</h1>
      <div id="contact-text-container">
        <p id="contact-text">
          I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
      </div>
      <div className="inner">
        <div className="social-images">
          <a href="https://github.com/seun-beta" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/seun-adekunle" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/seun_adekunle" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
        </div>
        <button>
          <a href="mailto:adekunleseun77@gmail.com">Say Hello</a>
        </button>
      </div>
    </div>
  );
}

export default Contact; 