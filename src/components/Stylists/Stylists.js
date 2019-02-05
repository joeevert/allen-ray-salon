import React, { Component } from 'react';
import './Stylists.css';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

const stylists = [
  {
    name: 'Amanda',
    position: 'Owner',
    bio: `Amanda has been in the business since 2001. After doing national education for Aveda, Italian Vogue, NY Fashion Week, and Aveda hairshows, she decided to start her own salon to pass on the opportunity to motivated hairstylists. Men's haircutting, precision haircutting, photoshoots, and styling are her true passion.`,
    quote: `"My favorite part of the industry is that I can never get bored. There's always business, creativity, and quality to be learned."`
  },
  {
    name: 'Elle',
    position: 'Stylist',
    bio: `Elle graduated from the Aveda Institute Minneapolis in 2004.  She completed the Cosmetology and Esthiology program and found her love for hair in the process.  Elle enjoys all aspects of hair and specializes in men’s cutting and styling. She is very detail oriented and loves having someone leave with a new and crisp look.`,
    quote:`"I love design in all forms; whether it be a haircut/style or home decor.  I love seeing something come together that I've designed."`
  },
  {
    name: 'Daniel',
    position: 'Stylist',
    bio: `Daniel graduated from the Aveda Institute Minneapolis in early 2014.  He is incredibly detailed and meticulous which allows him to create custom haircuts and color for an individual look.  He loves being someone's hands and creating exactly what they want. He aspires to be an educator to pass on his detailed look at design.`,
    quote:`"I love working with all hair types and lengths. I look at hair as a material to sculpt, and that keeps me passionate about hair every day."`
  },
  {
    name: 'Natalie',
    position: 'Manager',
    bio: `Natalie graduated from the Aveda Institute Minneapolis in 2010.She has a strong passion for the Aveda products and customer service. Her positivity, kindness and attention to the needs of others ensures that you will have nothing short of the best experience here at Allen Ray.`,
    quote:`"To be the first person that a customer sees when they walk in the door is a huge responsibility and I am happy to represent everything that our Salon has to offer."`
  }, 
];

class Stylists extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {stylists.map((stylist, index) => 
        <div className={classes.container} key={index}>
        <Avatar alt={stylist.name} src={`images/stylist_${stylist.name}.png`} className={classes.bigAvatar} />
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="h4">
              {stylist.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              {stylist.position}
            </Typography>
            <Typography className={classes.bio} component="p">
              {stylist.bio}
            </Typography>
          </CardContent>
        </Card>
        </div>
        )}
      </div>
    );
  }
}

const styles= {
  card: {
    display: 'inline-block',
    maxWidth: '500px',
    paddingTop: '100px',
  },
  bigAvatar: {
    margin: 'auto',
    transform: 'translate3d(0, 50%, 0)',
    width: '200px',
    height: '200px',
    border: 'solid #fff 5px',
    boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  container: {
    width: '100%',
    position: 'relative',
    minHeight: '1px',
    flexBasis: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  bio: {
    // textAlign: 'left'
  }
}

export default withStyles(styles)(Stylists);
