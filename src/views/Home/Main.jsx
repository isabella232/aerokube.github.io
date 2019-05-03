import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Container from '../../components/Container';

const styles = theme => ({
  root: {
    marginTop: 80
  },
  header: {
    fontSize: 38,
    fontWeight: 700,
    marginTop: 0,
    marginBottom: 12,
    color: '#1A0F2D',
    [theme.breakpoints.down('sm')]: {
      fontSize: 34,
      textAlign: 'center'
    }
  },
  subheader: {
    fontSize: 26,
    lineHeight: '1.4em',
    fontWeight: 200,
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      textAlign: 'center'
    }
  },
  video: {
    width: '100%'
  },
  login: {
    marginTop: 52,
    [theme.breakpoints.down('sm')]: {
      marginTop: 20
    }
  },
  trial: {
    color: '#6D6D7A',
    fontWeight: 200
  },
  buttons: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }
});

const Main = ({ classes }) => (
  <Container>
    <Grid container spacing={24} className={classes.root}>
      <Grid item xs={12} sm={5} className={classes.logo}>
        <Grid container>
          <Grid item xs={12}>
            <h1 className={classes.header}>Painless Selenium Testing</h1>
            <h2 className={classes.subheader}>
              Start testing in 1 minute.
              <br />
              Test times faster.
            </h2>
          </Grid>
          <Grid item xs={12} className={classes.login}>
            <p className={classes.trial}>Start 7 day free trial. No credit card required</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

Main.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Main);
