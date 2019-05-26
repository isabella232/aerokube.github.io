import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from './Container';
import Button from './Button';

const styles = {
  root: {
    boxSizing: 'border-box',
    textAlign: 'center'
  },
  content: {
    paddingTop: 37,
    width: '100%'
  },
  bottom: {
    marginTop: 55
  },
  footer: {
    color: 'rgba(40, 40, 40, 0.9)',
    marginBottom: 54
  },
  footerTopButton: {
    color: 'rgba(40, 40, 40, 0.9)',
    fontWeight: 600
  },
  footerButton: {
    fontSize: '0.7em',
    color: 'rgba(40, 40, 40, 0.9)'
  },
  spacer: {
    height: 1,
    margin: '25px 0 38px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
};

const leftButtons = [
  {
    href: 'https://aerokube.com',
    title: 'Aerokube'
  },
  {
    href: 'https://aerokube.com',
    title: 'Browsers'
  },
  {
    href: 'https://aerokube.com',
    title: 'Moon'
  },
  {
    href: 'https://aerokube.com',
    title: 'Selenoid'
  }
];
const rightButtons = [
  {
    href: 'https://aerokube.com',
    title: 'Github'
  },
  {
    href: 'https://aerokube.com',
    title: 'Telegram'
  },
  {
    href: 'https://aerokube.com',
    title: 'Twitter'
  },
  {
    href: 'https://aerokube.com',
    title: 'Youtube'
  },
  {
    href: 'https://aerokube.com',
    title: 'Mail us'
  }
];

const Footer = ({ classes, children, className }) => (
  <div className={[classes.root, className].filter(Boolean).join(' ')}>
    <Container>
      <Grid container spacing={0}>
        {children && <div className={classes.content}>{children}</div>}
        <Grid container spacing={24} justify="space-between" alignItems="center">
          <Grid container spacing={24} item sm justify="flex-start" alignItems="center">
            {leftButtons.map(button => (
              <Grid item key={button.href}>
                <Button href={button.href} className={classes.footerTopButton}>
                  {button.title}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={24} item sm justify="flex-end" alignItems="center">
            {rightButtons.map(button => (
              <Grid item key={button.href}>
                <Button href={button.href} className={classes.footerTopButton}>
                  {button.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.spacer} />
        </Grid>
        <Grid item xs={12} container className={classes.footer} justify="space-between" alignItems="center">
          <Grid item>© 2019 Aerokube Software</Grid>
          <Grid item container xs={12} sm={6} spacing={24} justify="flex-end">
            <Grid item>
              <Button link href="/docs/#_terms_of_service" className={classes.footerButton}>
                Terms of Service
              </Button>
            </Grid>
            <Grid item>
              <Button link href="/docs/#_privacy_policy" className={classes.footerButton}>
                Privacy Policy
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string
};

export default withStyles(styles)(Footer);
