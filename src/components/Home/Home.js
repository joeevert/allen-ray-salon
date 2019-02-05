import React, { Component } from 'react';
import './Home.css';

import PhotoGallery from '../PhotoGallery/PhotoGallery';
import YouTubeSection from '../YouTubeSection/YouTubeSection';
import ContactForm from '../ContactForm/ContactForm';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <PhotoGallery />
        <YouTubeSection />
        <ContactForm />
      </div>
    );
  }
}

export default Home;
