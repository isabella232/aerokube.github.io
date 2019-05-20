import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Main from './Main';
import Videos from './Videos';
import Features from './Features';

import Landing from '../../components/Landing';
import Footer from '../../components/Footer';

import Button from '../../components/Button';

const styles = theme => ({
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '2228px 659px',
    backgroundPosition: 'top center',
    [theme.breakpoints.down('xs')]: {
      backgroundImage: 'none'
    }
  },
  heading: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 4,
    textAlign: 'center'
  },
  login: {
    padding: theme.spacing.unit * 2,
    width: 1140
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 45
  },
  footerButton: {
    color: 'white',
    borderColor: 'white',
    borderWidth: 2
  }
});

const Home = ({ classes }) => (
  <Landing className={classes.root} invert>
    <Main />
    <Videos />
    <Features />
    <Footer>
      <Grid item xs={12}>
        <p className={classes.headerTitle}>Still having questions?</p>
        <Grid container justify="center" spacing={24}>
          <Grid item>
            <Button link href="mailto:support@aerokube.com" borders className={classes.footerButton}>
              Help me by Email
            </Button>
          </Grid>
          <Grid item>
            <Button link href="https://t.me/aerokube_browsers" borders className={classes.footerButton}>
              Open support chat
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Footer>
  </Landing>
);

Home.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Home);
