import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Typography>Footer will go here...</Typography>
        <p>Monday,Thursday and Friday 9am-6pm
          Tuesday-Wednesday 9am-7pm
          
          Find us on the second floor next to Caribou Coffee.

          Campbell Mithum Tower
          222 South 9th St, Suite 200
          Minneapolis, MN 55402
        </p>
      </div>
    );
  }
}

export default Footer;
