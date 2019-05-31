import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import pipes from '../assets/pipes.svg';

const styles = ({
  feature: {
    boxSizing: 'border-box',
    height: 190,
    padding: '42px 30px',
    '&:hover title': {
      color: 'white !important'
    }
  },
  title: {
    margin: 0,
    fontSize: '26px'
  },
  description: {
    margin: 0,
    lineHeight: '137%',
    color: '#282828'
  },
  pipes: {
    height: 173,
    backgroundImage: `url(${pipes})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: -24
  },
  divider: {
    height: 2,
    margin: '12px 20px',
    borderRadius: 2,
    backgroundColor: 'rgba(40, 40, 40, 0.15)'
  }
});

const features = [
  {
    title: 'Selenoid',
    description: 'Your company is using virtual machines',
    color: '#338B93',
    shadow: 'rgba(51, 139, 47, 0.35)'
  },
  {
    title: 'Moon',
    description: 'Your company is Kubernetes or Openshift',
    color: '#264694',
    shadow: 'rgba(38, 70, 148, 0.35)'
  },
  {
    title: 'Browsers',
    description: 'You need ready-to-use online solution',
    color: '#6739B4',
    shadow: 'rgba(137, 57, 180, 0.35)'
  }
];

const Features = ({ classes }) => (
  <Grid container spacing={24} justify="space-evenly">
    <Hidden smDown>
      <Grid item xs={12}>
        <div className={classes.pipes} />
      </Grid>
    </Hidden>
    {features.map((feature, index) => (
      <Grid key={index} item sm={12} md={3}>
        <div className={classes.feature} style={{boxShadow: `0 0 12px ${feature.shadow}`}}>
          <p className={classes.title} style={{color: feature.color}}>{feature.title}</p>
          <div className={classes.divider} />
          <p className={classes.description}>{feature.description}</p>
        </div>
      </Grid>
    ))}
  </Grid>
);

export default withStyles(styles)(Features);
