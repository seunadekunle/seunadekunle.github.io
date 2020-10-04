import React from 'react';
import './About.css';

function About(props) {
    return (
        <div className="container">
            <h1 className="header">{props.text}</h1>

            <div className="info">
                <div className="text">
                    <p>{props.description1}</p>
                    <p>{props.description2}</p>
                    <p>{props.description3}</p>
                    <p>{props.description4}</p>
                </div>

                <img src={props.img_url} alt="seun adekunle" />
            </div>
        </div>
    );
}

export default About;