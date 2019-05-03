import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Container from '../../components/Container';
import Feature from '../../components/Feature';

const styles = theme => ({
  root: {
    marginTop: 123,
    marginBottom: 75,
    [theme.breakpoints.down('sm')]: {
      marginTop: 80
    }
  },
  features: {
    marginTop: 46,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0
    }
  },
  border: {
    height: 2,
    opacity: '0.4',
    backgroundColor: '#B230BD'
  }
});

const features = [
  {
    title: 'Selenoid',
    subtitle: 'Your company is using cloud virtual machines'
  },
  {
    title: 'Unlimited Billing Plans',
    subtitle: 'Your company is using Kubernetes or Openshift'
  },
  {
    title: 'Fault tolerant',
    subtitle: 'You need ready-to-use online solution'
  }
];

const Features = ({ classes }) => (
  <Container className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <div className={classes.border} />
      </Grid>
    </Grid>
    <Grid container spacing={24} className={classes.features}>
      {features.map((feature, index) => (
        <Feature link={feature.link} key={index} feature={feature}>
          {feature.subtitle}
        </Feature>
      ))}
    </Grid>
  </Container>
);

Features.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Features);
