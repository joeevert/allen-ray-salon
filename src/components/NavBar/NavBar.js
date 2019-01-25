import React, { Component } from 'react';
import './NavBar.css';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  appBar: {
    backgroundColor: 'hsla(0, 0%, 25%, 1)',
  },
  logo: {
    width: '60%',
    padding: '60px',
  },
  banner: {
    color: '#fcf0b6',
    padding: '15px',
    letterSpacing: '3px',
  }
}

class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section>
        <div className={classes.appBar}>
          <span>
            <Typography className={classes.banner}>
              <a href="#book">BOOK AN APPOINTMENT 612.208.0273</a>
            </Typography>
          </span>
          <img className={classes.logo} src="/images/allen_ray_logo.jpg" alt="allen ray logo" />
        </div>
        <div className="topNav">
          <a href="#home" className="active">HOME</a>
          <a href="#services">SERVICES</a>
          <a href="#stylists">STYLISTS</a>
          <a href="#about">ABOUT</a>
          <a href="#reviews">REVIEWS</a>
          <a href="#careers">CAREERS</a>
        </div>
      </section>
    );
  }
}

// ARTIST  SHOPHAUS  SERVICES  ABOUT  REVIEWS  CONTACT  BOOK NOW

export default withStyles(styles)(NavBar);
