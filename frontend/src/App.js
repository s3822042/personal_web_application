import "./tailwind.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Experience from "./components/Experience/Experience";
// import Project from "./components/Project/Project";
// import Qualifications from "./components/Qualifications/Qualifications";
// import Contact from "./components/Contact/Contact";

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />

          {/* <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/project" component={Project} />
          <Route path="/qualifications" component={Qualifications} />
          <Route path="/contact" component={Contact} /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
