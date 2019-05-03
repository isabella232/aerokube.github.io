import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    textDecoration: 'none',
    fontFamily: 'inherit',
    color: 'rgba(255, 255, 255, 0.75)',
    transition: 'color 0.2s, border-color 0.2s, background-color 0.2s',
    borderRadius: 4,
    borderColor: 'rgba(255, 255, 255, 0.75)',
    '&:hover': {
      color: 'white',
      borderColor: 'white'
    }
  },
  disabled: {
    opacity: 0.5,
    cursor: 'initial',
    '&:hover': {
      boxShadow: 'none'
    }
  },
  borders: {
    borderWidth: 2,
    borderStyle: 'solid',
    padding: '8px 24px',
    '&:hover': {
      color: '#6532BB',
      borderColor: 'white',
      backgroundColor: 'white'
    }
  },
  invert: {
    color: 'rgba(26, 15, 45, 0.75)',
    '&:hover': {
      color: 'rgba(26, 15, 45, 1)'
    }
  },
  bordersInvert: {
    borderWidth: 2,
    borderStyle: 'solid',
    padding: '8px 24px',
    color: 'black',
    borderColor: '#6532BB',
    '&:hover': {
      color: 'white',
      borderColor: '#6532BB',
      backgroundColor: '#6532BB'
    }
  },
  active: {
    color: '#823BCB'
  }
};

const Button = ({ borders, invert, active, disabled, classes, link, href, className, children }) => {
  const classNames = [classes.root];

  if (invert && borders) {
    classNames.push(classes.bordersInvert);
  } else if (invert) {
    classNames.push(classes.invert);
  } else if (borders) {
    classNames.push(classes.borders);
  }

  if (active) {
    classNames.push(classes.active);
  }

  if (disabled) {
    classNames.push(classes.disabled);
  }

  if (className) {
    classNames.push(className);
  }

  return (
      <a href={href} className={classNames.join(' ')}>
        {children}
      </a>
  ); // eslint-disable-line
};

Button.propTypes = {
  borders: PropTypes.bool,
  invert: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  classes: PropTypes.object,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(styles)(Button);
