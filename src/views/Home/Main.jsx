import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '../../components/Container';
import Features from '../../components/Features';

const styles = theme => ({
  root: {
    marginTop: 80,
    [theme.breakpoints.down('sm')]: {
      marginTop: 75
    }
  },
  header: {
    fontWeight: 700,
    marginTop: 0,
    marginBottom: 12,
    textAlign: "center",
    [theme.breakpoints.down('sm')]: {
      fontSize: 34,
      textAlign: 'center'
    }
  },
  subheader: {
    lineHeight: '200%',
    fontWeight: 200,
    textAlign: "center",
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 40,
      marginBottom: 30
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
  },
  image: {
    textAlign: 'center'
  }
});

const Main = ({ classes }) => (
  <Container>
    <Grid container spacing={24} className={classes.root} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h1" className={classes.header}>
          Simple and extremely effective solutions
          <br />
          for your test infrastructure.
        </Typography>
        <Typography variant="h2" className={classes.subheader}>
          We use them in our everyday work and they are awesome!
          <br />
          Short way to efficient Selenium infrastructure
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.image}>
        <Features />
      </Grid>
    </Grid>
  </Container>
);

Main.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Main);
