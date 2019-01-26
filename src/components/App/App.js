import React, { Component } from 'react';
import './App.css';

import NavBar from '../NavBar/NavBar';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Footer from  '../Footer/Footer';

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
