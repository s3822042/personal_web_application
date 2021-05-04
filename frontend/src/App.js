import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ExperienceView from "./views/ExperienceView";
import ProjectView from "./views/ProjectView";
import QualificationView from "./views/QualificationView";
import ContactView from "./views/ContactView";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/about" component={AboutView} />
      <Route path="/experience" component={ExperienceView} />
      <Route path="/project" component={ProjectView} />
      <Route path="/qualifications" component={QualificationView} />
      <Route path="/contact" component={ContactView} />
    </Switch>
  </Router>
);

export default App;
