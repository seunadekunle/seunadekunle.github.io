import React, { Component } from "react";
import "../css/About.css";

class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <h1 className="header">{this.props.text}</h1>

        <div className="info">
          <div className="text">
            {[this.props.description1, this.props.description2, this.props.description3, this.props.description4]
              .filter(Boolean)
              .map((description, index) => (
                <p key={index}>{description}</p>
              ))}
          </div>

          <img src={this.props.img_url} alt="Seun Adekunle" />
        </div>
      </div>
    );
  }
}

export default About;