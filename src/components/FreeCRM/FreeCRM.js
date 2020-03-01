import React from 'react'
import '../../components/FreeCRM/FreeCRM.css'
import '../../pages/AccountPage/AccountPage.css'
import NavBar from '../../components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../pages/HomePage/Home'
import About from '../../pages/AboutPage/About'
import Staff from '../../pages/StaffPage/Staff'
import AccountPage from '../../pages/AccountPage/AccountPage'

/** The main app FreeCRM function */
export default function FreeCRM() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/staff'} component={Staff} />
          {/* <Route path={'/account'} component={AccountPage} /> */}
          <Route path='/:handle' component={AccountPage} />
        </Switch>
      </div>
    </Router>
  )
}
