import React, { Component } from 'react';
import './App.css';

import NavBar from '../NavBar/NavBar';
import Slideshow from '../PhotoGallery/PhotoGallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Slideshow />
      </div>
    );
  }
}

export default App;
