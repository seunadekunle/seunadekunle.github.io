import React from "react";
import "./xp.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ImFacebook, ImAmazon } from "react-icons/im";
import { SiSalesforce, SiAsana } from "react-icons/si";

function xp(props) {
  const timeline = props.list.map((item) => (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(1, 31, 75)", color: "#bdd8ec" }}
      contentArrowStyle={{ borderRight: "10px solid rgb(1, 31, 75)" }}
      date={item.date}
      iconStyle={{ background: "rgba(0, 0, 0, 0)", color: "rgb(1, 31, 75)", border: "10px solid rgb(1, 31, 75)" }}
      icon={<ImAmazon />}
    >
      <h3
        className="vertical-timeline-element-title"
        style={{ background: "rgb(1, 31, 75)", color: "#bdd8ec" }}
      >
        {item.title}
      </h3>
      <h4
        className="vertical-timeline-element-subtitle"
        style={{ background: "rgb(1, 31, 75)", color: "#bdd8ec" }}
      >
        {item.subtitle}
      </h4>
      <p style={{ background: "rgb(1, 31, 75)", color: "#bdd8ec" }}>
        {item.content}
      </p>
    </VerticalTimelineElement>
  ));

  return (
    <div>
      <h1 className="header">{props.text}</h1>
      <VerticalTimeline lineColor="rgb(1, 31, 75)">{timeline}</VerticalTimeline>
    </div>
  );
}

export default xp;
