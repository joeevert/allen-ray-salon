import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './PhotoGallery.css';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const slideImages = [
  {
    image: 'images/gallery01.jpg',
    tag: 'CLEAN',
    testomonial: `"Visiting the Allen Ray Salon has become my favorite end of week tradition. The Allen Ray team is as good as it gets."`,
    name: 'Joe Gabler, SPS Commerce'
  },
  {
    image: 'images/gallery02.jpg',
    tag: 'CUSTOM',
    testomonial: `"Allen Ray Salon, rejuvenating and fresh, appealing to all five senses."`,
    name: 'David Buyse, Corporate Tenant Advisors'
  },
  {
    image: 'images/gallery03.jpg',
    tag: 'CUTS',
    testomonial: `“Talent, artistry, and professionalism drive my entertainment law clients and my stylists at Allen Ray Salon."`,
    name: 'Ken Abdo, Fox Rothchild'
  }
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
            {slideImages.map( (slide, index) => 
            <div key={index} className="slide">
              <img src={slide.image} className="photoStyle" />
              <span className="slide-tag">
                <Typography className={classes.tag} variant="h2">{slide.tag}</Typography>
              </span>
              <div className="slide-testomonial">
                <Typography className={classes.testomonial}>{slide.testomonial}</Typography>
                {/* <Typography className={classes.testomonial}>{slide.name}</Typography> */}
              </div>
            </div>)}
          </Slide>
        </div>
        <Divider className={classes.divider}/>
        <Typography className={classes.tagLine}>
          AWARD-WINNING SALON IN DOWNTOWN MINNEAPOLIS
        </Typography>
        <Divider className={classes.divider}/>
        <Button
          className={classes.button}
        >
          BOOK AN APPOINTMENT
        </Button>
      </section>
    );
  }
}

const styles= {
  tagLine: {
    color: '#ffffff',
  },
  divider: {
    margin: '10px auto',
    backgroundColor: 'hsla(0, 0%, 30%, 1)',
    width: '67%'
  },
  button: {
    margin: '25px'
  },
  tag: {
    color: '#ffffff',
    fontWeight: 450,
  },
  testomonial: {
    color: '#fcf0b6',
    fontSize: '.75em'
  },
}

export default withStyles(styles)(PhotoGallery);
