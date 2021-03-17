import { Switch, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const res = await axios.get("/api/users");
    setUsers(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {users.map((u) => (
          <h4 key={u._id}>userName :{u.userName}</h4>
        ))}
      </div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About" component={About} />
        <Route path="/Experience" component={Experience} />
        <Route path="/Project" component={Project} />
        <Route path="/Qualifications" component={Qualifications} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
