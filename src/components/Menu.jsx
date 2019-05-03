import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    borderTop: '5px solid #6531BC',
    borderBottom: '5px solid #6531BC',
    borderRadius: 4,
    boxShadow: '0 4px 12px rgba(13, 3, 30, 0.25)'
  },
  wrapper: {
    position: 'absolute',
    top: 80,
    left: 0,
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 18px',
    zIndex: 101
  },
  selected: {
    color: '#823BCB'
  },
  invert: {
    backgroundColor: '#6532BB',
    color: 'white'
  },
  clickCatcher: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 100
  }
};

const Menu = ({ classes, className, visible, children, onClose }) => {
  if (!visible) {
    return null;
  }

  const classNames = [classes.root];

  if (className) {
    classNames.push(className);
  }

  const classString = classNames.join(' ');

  return (
    <Fragment>
      <div role="region" onClick={onClose} className={classes.clickCatcher} /* eslint-disable-line */ />
      <div className={classes.wrapper}>
        <div className={classString}>
          {children}
        </div>
      </div>
    </Fragment>
  );
};

Menu.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  visible: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Menu);
