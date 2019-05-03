import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    maxWidth: 1220,
    width: '100%',
    padding: '0 20px',
    margin: '0 auto',
    boxSizing: 'border-box'
  }
};

const Container = ({ className, classes, children }) => {
  const finalClassName = ['container', classes.root, className].filter(Boolean).join(' ');

  return <div className={finalClassName}>{children}</div>;
};

Container.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(styles)(Container);
