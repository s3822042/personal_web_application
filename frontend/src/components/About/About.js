import React from "react";
import Hero from "../hero/Hero";
import "./About.css";
import Info from "../detail/Info";
import DescribeMe from "../detail/DescribeMe";
import Content from "../detail/Content";

function About() {
  return (
    <div className="">
      <Hero />
      <div className="">
        <div className="py-5">
          <DescribeMe />
          <Content />
        </div>

        <div className="py-5">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default About;
