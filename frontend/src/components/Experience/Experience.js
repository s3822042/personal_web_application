import React from "react";
import "./Experience.css";
import Hero from "../hero/Hero";
import Company  from "./Company";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";

function Experience() {
  return (
    <AnimationRevealPage>
      <Hero/>
      <Company />
    </AnimationRevealPage>
  );
}

export default Experience;
