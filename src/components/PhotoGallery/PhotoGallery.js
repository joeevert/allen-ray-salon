import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './PhotoGallery.css';

const slideImages = [
  'images/gallery01.jpg',
  'images/gallery02.jpg',
  'images/gallery03.jpg'
];

const properties = {
  duration: 3500,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
}

const Slideshow = () => {
  return (
    <div className="slide-container">
    <Slide {...properties} >
      <div className="each-slide">
        <div className="image" style={{'backgroundImage': `url(${slideImages[0]})`}} />
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[1]})`}} />
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[2]})`}} />
      </div>
    </Slide>
    </div>
  )
}

export default Slideshow;
