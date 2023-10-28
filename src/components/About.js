import React from "react";
import { image } from "../data/data";

function About() {
  return (
      <div id="about">
        <h2>About Me</h2>
        <p>And now for your daily spam. Hi, I'm John. Hi, I'm John...</p>
        <img src={image} alt="I made this" />
      </div>
  );
}

export default About;
