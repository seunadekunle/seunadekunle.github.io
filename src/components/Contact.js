import React from 'react';
import './Contact.css';

function Contact(props) {

    return (
        <div className="outer">
            <h1 className="header" id="contact-header">get in touch</h1>
            <div className="text" id="contact-text-container">
                <p id="contact-text">I am currently looking for opportunities to gain experience</p>
                <p id="contact-text"> and collaborate on projects</p>
            </div>

            <div className="inner">
                <a href={props.link_1}>
                    <img src={props.img_1} alt="link to social media" />
                </a>
                <a href={props.link_2}  id="social-images">
                    <img src={props.img_2} href={props.link_2} alt="link to social media" />
                </a>
            </div>

            <div className="inner">
                <button><a href="mailto:seun9008@gmail.com">contact</a></button>
                <div className="footer">
                    <p>built and designed by seun</p>
                </div>
            </div>
        </div>


    );
}

export default Contact;