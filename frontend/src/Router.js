import React from "react";
// -- Routing Handling --
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import * as ROUTES from "./constants/routes";
import {
  AboutPage,
  QualificationPage,
  ExperiencePage,
  ProjectPage,
  ContactPage,
  LicensePage,
  HomePage,
} from "./pages";

function AppRouting() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={ROUTES.__home} component={HomePage} />
        <Route exact path={ROUTES.__about} component={AboutPage} />
        <Route
          exact
          path={ROUTES.__qualification}
          component={QualificationPage}
        />
        <Route exact path={ROUTES.__experience} component={ExperiencePage} />
        <Route exact path={ROUTES.__contact} component={ContactPage} />
        <Route exact path={ROUTES.__license} component={LicensePage} />
        <Route exact path={ROUTES.__project} component={ProjectPage} />
      </Switch>
    </AnimatePresence>
  );
}

export default AppRouting;
