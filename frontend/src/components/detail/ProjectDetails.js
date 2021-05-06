import React from "react";
import "./ProjectDetails.css";
import NavBar from "../navbar/NavBar";
import Hero from "../hero/Hero";
import ProjectContent from "./DetailsPage/ProjectContent";

function ProjectDetail() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div>
        <ProjectContent />
      </div>
    </div>
  );
}

export default ProjectDetail;
