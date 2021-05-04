import { Switch, Route } from 'react-router-dom'
import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Qualifications from './components/Qualifications/Qualifications'
import Contact from './components/Contact/Contact'

const App = () => {
  const [users, setUsers] = useState([])
  const getData = async () => {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div>
        {users.map((u) => (
          <h4 key={u._id}>
            userName :
            {u.userName}
          </h4>
        ))}
      </div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/project" component={Project} />
        <Route path="/qualifications" component={Qualifications} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
