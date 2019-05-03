import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Avatar from '@material-ui/core/Avatar/Avatar';
import MaterialMenu from '@material-ui/core/Menu';
import MaterialMenuItem from '@material-ui/core/MenuItem';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Container from './Container';
import Button from './Button';

import logo from '../assets/aerokube_logo.svg';
import nav from '../assets/icons/nav.svg';

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
  },
  loginButton: {
    marginLeft: 32
  },
  navigationIcon: {
    backgroundImage: `url('${nav}')`,
    width: 32,
    height: 32,
    border: 0,
    padding: 0
  },
  navContainer: {
    textAlign: 'right'
  },
  menu: {
    padding: 0,
    border: '5px solid #6532BB',
    borderLeft: 'none',
    borderRight: 'none'
  }
};

const buttons = [
  {
    href: '/pricing',
    title: 'Pricing'
  },
  {
    href: '/platforms',
    title: 'Platforms'
  },
  {
    href: '/support',
    title: 'Support'
  }
];

class Header extends PureComponent {
  state = {
    anchorEl: null,
    menuOpened: false
  };

  handleClick = () => {
    this.setState({ menuOpened: true });
  };

  handleClose = link => () => {
    this.setState({ menuOpened: false });

    if (link) {
      this.props.history.push(link);
    }
  };

  renderMobileMenu = () => {
    const {  classes } = this.props;
    const { menuOpened } = this.state;

    return (
      <Grid item xs className={classes.navContainer}>
        <button onClick={this.handleClick} className={classes.navigationIcon} />
        <Menu visible={menuOpened} onClose={this.handleClose()}>
          {buttons.map((button, index) => (
            <MenuItem key={index} onClick={this.handleClose(button.href)}>
              {button.title}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    );
  };

  renderNavigation = () => {
    const { invert } = this.props;

    return buttons.map(button => (
      <Grid item key={button.href}>
        <Button href={button.href} invert={!invert}>
          {button.title}
        </Button>
      </Grid>
    ));
  };

  renderLogo = () => {
    const { classes } = this.props;

    return (
      <Grid item xs sm={4}>
        <a href="/" className={classes.logoLink}>
          <img className={classes.logo} src={logo} alt="" />
          <span className={classes.title}>Browsers</span>
        </a>
      </Grid>
    );
  };

  render() {
    const { classes, className } = this.props;

    return (
      <div className={[classes.wrapper, className].filter(Boolean).join(' ')}>
        <Container className={classes.header}>
          <Grid container justify="space-between" alignItems="center" spacing={0} className={classes.root}>
            {this.renderLogo()}
            <Hidden smDown>
              <Grid container spacing={24} item sm justify="flex-end" alignItems="center">
                {this.renderNavigation()}
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs className={classes.navContainer}>
                {this.renderMobileMenu()}
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  invert: PropTypes.bool
};

export default withStyles(styles)(Header);
