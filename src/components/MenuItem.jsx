import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    color: 'rgba(26, 15, 45, 0.75)',
    display: 'block',
    padding: '0 28px',
    margin: '28px 0',
    background: 'none',
    border: 0,
    width: '100%',
    fontSize: '1.33em',
    textAlign: 'left'
  },
  selected: {
    color: '#823BCB'
  },
  invert: {
    backgroundColor: '#6531BC',
    color: 'white',
    height: 56,
    marginBottom: -1,
    lineHeight: '60px'
  }
};

const CustomMenuItem = ({ classes, className, selected, invert, onClick, children }) => {
  const classNames = [classes.root];

  if (selected) {
    classNames.push(classes.selected);
  }

  if (invert) {
    classNames.push(classes.invert);
  }

  if (className) {
    classNames.push(className);
  }

  const classString = classNames.join(' ');

  return (
    <button className={classString} onClick={onClick}>
      {children}
    </button>
  );
};

CustomMenuItem.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  invert: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default withStyles(styles)(CustomMenuItem);
