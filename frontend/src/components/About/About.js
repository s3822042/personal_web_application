import React from "react";
import Hero from "../hero/Hero";
import "./About.css";
import Info from "../detail/Info";
import Content from "../detail/Content";
import AboutDetails from "../detail/AboutDetailLeft";

function About() {
  return (
    <div className="">
      <Hero />
      <div className="">
        <div className="py-5">
          <Content />
        </div>

        <AboutDetails />
        <div className="py-5">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default About;
