import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Main from './Main';
import Videos from './Videos';
import Articles from './Articles';

import Landing from '../../components/Landing';
import Footer from '../../components/Footer';

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
    <Articles />
    <Footer />
  </Landing>
);

Home.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Home);
