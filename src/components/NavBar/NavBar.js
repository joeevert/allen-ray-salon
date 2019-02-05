import React, { Component } from 'react';
import Header from './Header';
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
      <section className="topNav-bg">
        <Navbar light expand="md" style={{padding: 0}}>
          <NavbarToggler style={{backgroundColor: '#fff', margin: '10px auto'}} onClick={this.toggle} />
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
