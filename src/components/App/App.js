import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.css';
import Sticky from 'react-sticky-el';

// FontAwesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import Home from '../Home/Home';
import Services from '../Services/Services';
import Header from '../NavBar/Header';
import NavBar from '../NavBar/NavBar';
import Footer from  '../Footer/Footer';
import Stylists from '../Stylists/Stylists';

// library.add(faBars)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Sticky style={{zIndex: 100}}>
            <NavBar />
          </Sticky>
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
              component={Services}
            />
            <Route
              exact
              path="/stylists"
              component={Stylists}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
