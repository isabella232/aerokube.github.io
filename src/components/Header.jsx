import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from './Container';
import Button from './Button';

import logo from '../assets/aerokube_logo.svg';

const styles = {
  wrapper: {
    width: '100%'
  },
  root: {
    height: 80
  },
  logoLink: {
    textDecoration: 'none'
  },
  logo: {
    width: 40,
    height: 40,
    verticalAlign: 'middle'
  },
  title: {
    verticalAlign: 'middle',
    color: 'black',
    marginLeft: 18,
    fontWeight: 500
  }
};

const buttons = [
  {
    href: 'https://github.com',
    title: 'Github'
  },
  {
    href: 'https://telegram.org',
    title: 'Telegram'
  },
  {
    href: 'https://twitter.com',
    title: 'Twitter'
  },
  {
    href: 'mailto:support.aerokube.com',
    title: 'Mail us'
  }
];

const Header = ({ classes, className }) => (
  <div className={[classes.wrapper, className].filter(Boolean).join(' ')}>
    <Container className={classes.header}>
      <Grid container justify="space-between" alignItems="center" spacing={0} className={classes.root}>
        <Grid item xs sm={4}>
          <a href="/" className={classes.logoLink}>
            <img className={classes.logo} src={logo} alt="" />
            <span className={classes.title}>Browsers</span>
          </a>
        </Grid>
        <Hidden xsDown>
          <Grid container spacing={24} item sm justify="flex-end" alignItems="center">
            {buttons.map(button => (
              <Grid item key={button.href}>
                <Button href={button.href}>
                  {button.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string
};

export default withStyles(styles)(Header);
