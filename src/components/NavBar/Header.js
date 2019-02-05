import React, { Component } from 'react';
import './NavBar.css';

// Material UI
import { withStyles } from '@material-ui/core/styles';

class Header extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="appointment" >
          <a href="#book">BOOK AN APPOINTMENT 612.208.0273</a>
        </div>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src="images/allen_ray_logo.svg" alt="allen ray logo" />
        </div>
      </div>
    );
  }
}

const styles = {
  logoContainer: {
    margin: 'auto',
    padding: '55px 0px',
    maxWidth: '75%',
  },
  logo: {
    width: '100%',
    height: 'auto'
  },
  divider: {
    margin: 'auto',
    backgroundColor: 'hsla(0, 0%, 30%, 1)',
    width: '67.5%'
  },
}

export default withStyles(styles)(Header);
