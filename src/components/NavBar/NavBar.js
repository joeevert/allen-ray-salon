import React, { Component } from 'react';
// import logo from './allen_ray_logo.svg';
import './NavBar.css';

// React Strap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class NavBar extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <section>
        <div>
          <a className="banner" href="#book">BOOK AN APPOINTMENT 612.208.0273</a>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src="images/allen_ray_logo.svg" alt="allen ray logo" />
          </div>
        </div>
        <Navbar light expand="md">
          <NavbarToggler style={{backgroundColor: '#fff', margin: 'auto'}} onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto topNav" navbar>
              <NavItem>
                <NavLink className="text-white" href="#home">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="#services">SERVICES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="#stylists">STYLISTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="#about">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="#reviews">REVIEWS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="#careers">CAREERS</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </section>
    );
  }
}

const styles = {
  logoContainer: {
    margin: 'auto',
    padding: '55px 0px',
    maxWidth: '55%',
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

export default withStyles(styles)(NavBar);
