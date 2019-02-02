import React, { Component } from 'react';
import './ContactForm.css';

// Material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import purple from "@material-ui/core/colors/purple";

import Button from '@material-ui/core/Button';

class ContactForm extends Component {

  state = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  handleChange = () => {

  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {/* <Divider className={classes.divider}/> */}
        <Typography className={classes.title} variant="h5">
          CONTACT US
        </Typography>
        {/* <Paper className={classes.paper}> */}
          <form className={classes.form}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  variant="outlined"
                  autoComplete="fname"
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,

                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  variant="outlined"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="subject"
                  name="subject"
                  label="Subject"
                  fullWidth
                  variant="outlined"
                  autoComplete="subject"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  fullWidth
                  variant="outlined"
                  autoComplete="message"
                />
              </Grid>
            </Grid>
          </form>
        {/* </Paper> */}
        {/* <Divider className={classes.divider}/> */}
      </React.Fragment>
    );
  }
}

const styles = {
  paper: {
    width: '65%',
    margin: 'auto'
  },
  form: {
    width: '65%',
    margin: 'auto',
    // padding: 25
  },
  title: {
    color: '#ffffff',
    marginBottom: '10px'
  },
  textField: {
    borderRadius: '4px',
    backgroundColor: '#ddd'
  },
  divider: {
    margin: '10px auto',
    backgroundColor: 'hsla(0, 0%, 30%, 1)',
    width: '67%'
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#000',
      fontWeight: 10
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#000',
    },
  },
  cssFocused: {
    color: '#fff'
  },
  notchedOutline: {},
  input: {
    color: '#fff',
  }
}


ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactForm);
