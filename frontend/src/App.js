import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ExperienceView from "./views/ExperienceView";
import ProjectView from "./views/ProjectView";
import QualificationView from "./views/QualificationView";
import ContactView from "./views/ContactView";
import LicenseView from "./views/LicenseView";


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/about" component={AboutView} />
      <Route path="/experience" component={ExperienceView} />
      <Route path="/project" component={ProjectView} />
      <Route path="/qualifications" component={QualificationView} />
      <Route path="/contact" component={ContactView} />
      <Route path="/license" component={LicenseView} />
    </Switch>
  </Router>
);

export default App;
