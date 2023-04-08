import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Hi! I love design! How's it going?</p>
    <img src= {image} alt="I made this"></img>
  </div>;
}

export default About;
