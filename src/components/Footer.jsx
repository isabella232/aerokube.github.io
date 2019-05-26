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
  border: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  footer: {
    height: 118,
    color: 'rgba(255, 255, 255, 0.6)'
  },
  footerButton: {
    fontSize: '0.7em'
  }
};

const Footer = ({ classes, children, className, showDivider }) => (
  <div className={[classes.root, className].filter(Boolean).join(' ')}>
    <Container>
      <Grid container spacing={0}>
        {children && <div className={classes.content}>{children}</div>}
        {(children || showDivider) && (
          <Grid item xs={12} className={classes.bottom}>
            <div className={classes.border} />
          </Grid>
        )}
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
            <Grid item>
              <Button link href="/docs/#_cookie_policy" className={classes.footerButton}>
                Cookie Policy
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
  showDivider: PropTypes.bool,
  className: PropTypes.string
};

export default withStyles(styles)(Footer);
