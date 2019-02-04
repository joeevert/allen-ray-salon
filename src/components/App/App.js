import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.css';

// FontAwesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import Footer from  '../Footer/Footer';

// library.add(faBars)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/services"
              // component={}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
