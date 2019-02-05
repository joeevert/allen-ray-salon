import React, { Component } from 'react';
import './Stylists.css';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

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
      // <div>
      //   {stylists.map((stylist, index) => 
      //   <Card key={index} className={classes.card}>
      //     <CardActionArea>
      //       <CardMedia
      //         className={classes.media}
      //         image={`images/stylist_${stylist.name}.png`}
      //         title={stylist.name}
      //       />
      //       <CardContent>
      //         <Typography gutterBottom variant="h5" component="h2">
      //           {stylist.name}
      //         </Typography>
      //         <Typography component="p">
      //           {stylist.bio}
      //         </Typography>
      //       </CardContent>
      //     </CardActionArea>
      //   </Card>
      //   )}
      // </div>
      <div className={classes.root}>
        <GridList cellHeight={300} cols={1} className={classes.gridList}>
          {stylists.map((stylist, index) => (
            <GridListTile key={index}>
              <img src={`images/stylist_${stylist.name}.png`} alt={stylist.name} />
              <GridListTileBar
                title={stylist.name}
                subtitle={<span>{stylist.position}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

// const styles= {
//   card: {
//     maxWidth: 400,
//     margin: 25
//   },
//   media: {
//     height: 140,
//     width: '100%'
//   },
// }

const styles = theme => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

export default withStyles(styles)(Stylists);
