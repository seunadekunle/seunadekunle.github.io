import React from "react";
import "../css/About.css";

function About(props) {
  return (
    <div className="aboutContainer">
      <h1 className="header">{props.text}</h1>

      <div className="info">
        <div className="text">
          {[props.description1, props.description2, props.description3, props.description4]
            .filter(Boolean)
            .map((description, index) => (
              <p key={index}>{description}</p>
            ))}
        </div>

        <img src={props.img_url} alt="Seun Adekunle" />
      </div>
    </div>
  );
}

export default About;