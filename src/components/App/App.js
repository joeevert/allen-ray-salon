import React, { Component } from 'react';
import './App.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Material UI
import NavBar from '../NavBar/NavBar';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Footer from  '../Footer/Footer';
library.add(faBars)

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PhotoGallery />
        <Footer />
      </div>
    );
  }
}

export default App;
