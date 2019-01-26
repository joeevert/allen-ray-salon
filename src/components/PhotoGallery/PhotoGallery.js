import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './PhotoGallery.css';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles= {
  tagLine: {
    color: '#ffffff',
    // margin: '30px'
  },
  divider: {
    margin: '10px auto',
    backgroundColor: '#ffffff',
    width: '67%'
  }
}

const slideImages = [
  'images/gallery01.jpg',
  'images/gallery02.jpg',
  'images/gallery03.jpg'
];

const properties = {
  duration: 3500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false
}

class PhotoGallery extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section>
        <div className="slide-container">
          <Slide {...properties} >
            {slideImages.map( (image, index) => 
            <div key={index} className="each-slide">
              <img className="image" src={image} alt="gallery item"/>
            </div>)}
          </Slide>
        </div>
        <Divider className={classes.divider}/>
        <Typography className={classes.tagLine}>
          AWARD-WINNING SALON IN DOWNTOWN MINNEAPOLIS<br />
          CUT, COLOR, HAIR EXTENSIONS, AND WAXING
        </Typography>
        <Divider className={classes.divider}/>
      </section>
    );
  }
}

export default withStyles(styles)(PhotoGallery);
