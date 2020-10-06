import React from 'react';
import './Projects.css';

function Projects(props) {
    // console.log(props.list);
    const listItems = props.list.map((item) =>
        <div id="project-item">
            <img id="background-image" src={item.img_url}></img>
            <h2 id="title">{item.title}</h2>
            <h6 id="description">{item.description}</h6>
        </div>
    );

    return (
        <div>
            <h1 className="header">{props.text}</h1>
            {listItems}
        </div>


    );
}

export default Projects;