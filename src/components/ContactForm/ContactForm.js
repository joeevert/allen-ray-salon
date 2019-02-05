import React, { Component } from 'react';
import SimpleMap from './SimpleMap';
import './ContactForm.css';

// Material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class ContactForm extends Component {

  state = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {/* <Divider className={classes.divider}/> */}
        <Typography className={classes.title} variant="h5">
          CONTACT US
        </Typography>
        <Paper className={classes.paper}>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  required
                  id="name"
                  name="name"
                  label="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  fullWidth
                  variant="outlined"
                  autoComplete="name"
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
                  value={this.state.email}
                  onChange={this.handleChange}
                  fullWidth
                  variant="outlined"
                  autoComplete="email"
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
              <Grid item xs={12}>
                <TextField
                  id="subject"
                  name="subject"
                  label="Subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                  fullWidth
                  variant="outlined"
                  autoComplete="subject"
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
              <Grid item xs={12}>
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  fullWidth
                  multiline
                  rows="4"
                  variant="outlined"
                  autoComplete="message"
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
              {/* {JSON.stringify(this.state)} */}
              <Grid item xs={12}>
                <Button type="submit" fullWidth>SEND</Button>
              </Grid>
            </Grid>
          </form>
          <SimpleMap />
        </Paper>
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
    margin: 'auto',
    padding: 25
  },
  title: {
    color: '#ffffff',
    marginBottom: '10px'
  },
  textField: {
    borderRadius: '4px',
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
    color: '#000'
  },
  notchedOutline: {},
  input: {
    color: '#000',
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactForm);
