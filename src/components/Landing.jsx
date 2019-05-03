import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from './Header';

const styles = {
  root: {
    backgroundColor: 'white',
    fontFamily: "'Ubuntu', sans-serif !important",
    minHeight: '100vh',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
};

const Landing = ({ children, classes, invert, className, hideHeader, headerClass }) => {
  const classNames = [classes.root];

  if (className) {
    classNames.push(className);
  }

  return (
    <div className={classNames.join(' ')}>
      {!hideHeader && <Header invert={invert} className={headerClass} />}
      {children}
    </div>
  );
};

Landing.propTypes = {
  classes: PropTypes.object,
  invert: PropTypes.bool,
  hideHeader: PropTypes.bool,
  className: PropTypes.string,
  headerClass: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(styles)(Landing);
