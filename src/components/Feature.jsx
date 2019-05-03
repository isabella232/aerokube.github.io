import React from 'react';
import { string, shape, bool, any } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    textAlign: 'center',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      marginTop: 50
    }
  },
  title: {
    fontSize: 18,
    fontWeight: 400
  },
  subtitle: {
    fontWeight: 200,
    height: 60,
    color: '#6D6D7A',
    [theme.breakpoints.down('sm')]: {
      height: 'auto'
    }
  },
  imageWrapper: {
    height: 66,
    marginBottom: 19,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    fontWeight: 700,
    textDecoration: 'none',
    color: '#6530BD',
    position: 'relative',
    '&:after': {
      content: "''",
      position: 'absolute',
      bottom: -5,
      left: 0,
      width: '100%',
      height: 2,
      backgroundColor: '#6530BD',
      opacity: 0,
      transition: 'opacity 0.2s',
      pointerEvents: 'none'
    },
    '&:hover': {
      '&:after': {
        opacity: 1
      }
    }
  }
});

const Feature = ({ classes, feature }) => (
  <Grid item xs={12} sm={3} className={classes.root}>
    <div className={classes.imageWrapper}>
      <img src={feature.image} alt={feature.title} />
    </div>
    <h3 className={classes.title}>{feature.title}</h3>
    <p
      className={classes.subtitle}
      dangerouslySetInnerHTML={{ /* eslint-disable-line */
        __html: feature.subtitle
      }}
    />
    {feature.link && (
      <a className={classes.button} href={feature.button.url} target="_blank" rel="noreferrer noopener">
        {feature.button.title}
      </a>
    )}
    {feature.button && !feature.link && (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a className={classes.button} href={feature.button.url}>
        {feature.button.title}
      </a> // eslint-disable-line
    )}
  </Grid>
);

Feature.propTypes = {
  feature: shape({
    title: string.isRequired,
    subtitle: string.isRequired,
    image: string.isRequired,
    link: bool,
    button: shape({
      title: string.isRequired,
      url: string.isRequired
    })
  }).isRequired,
  classes: any
};

export default withStyles(styles)(Feature);
