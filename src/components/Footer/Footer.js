import React, { Component } from 'react';
import './Footer.css';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="footer">
        <Divider className={classes.divider} />
          <Typography className={classes.footerText} variant="h5">
            Monday,Thursday and Friday 9am-6pm<br />
            Tuesday-Wednesday 9am-7pm
          </Typography>
          <br />
          <Typography className={classes.footerText}>
            Find us on the second floor next to Caribou Coffee.
          </Typography>
          <br />
          <Typography className={classes.footerText} variant="h5">
            Campbell Mithum Tower<br />
            222 South 9th St, Suite 200<br />
            Minneapolis, MN 55402
          </Typography>
      </div>
    );
  }
}

const styles = {
  footerText: {
    color: '#fff'
  },
  divider: {
    margin: '10px auto',
    backgroundColor: 'hsla(0, 0%, 30%, 1)',
    width: '67%'
  },
}

export default withStyles(styles)(Footer);
