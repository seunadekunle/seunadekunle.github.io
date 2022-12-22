import React from "react";
import "./Projects.css";

function Projects(props) {
  const listItems = props.list.map((item) => (
    <div className="project-item">
      <a href={item.url}>
        <img id="background-image" src={item.img_url} alt="background"></img>
        <h2 id="title">{item.title}</h2>
        <h6 id="description">{item.description}</h6>
      </a>
    </div>
  ));

  return (
    <div>
      <h1 className="header">{props.text}</h1>
      <div className="scroll_wrap">{listItems}</div>
    </div>
  );
}

export default Projects;
