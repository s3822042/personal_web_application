import React from "react";

import NavBar from "../components/navbar/NavBar";
import Project from "../components/project/Project";
import Footer from "../components/footer/Footer";
// import ProjectDetails from "../components/detail/ProjectDetails";

const ProjectView = () => (
  <div>
    <NavBar />
    <Project />
    <Footer />
    {/* <ProjectDetails /> */}
  </div>
);

export default ProjectView;
