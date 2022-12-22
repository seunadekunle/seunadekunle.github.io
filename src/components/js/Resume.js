import React, { Component } from "react";
import "../css/Resume.css";

import resume from "../../assets/pdf/resume.pdf";

class Resume extends Component {
  render() {
    return (
      <div className="resume-frame">
        <iframe className="resume" src={resume} title="Resume"></iframe>
      </div>
    );
  }
}

export default Resume;
