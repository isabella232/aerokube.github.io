import React, {Fragment} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '../../components/Container';

import video1 from '../../assets/videos/video1.png';
import video2 from '../../assets/videos/video2.png';
import video3 from '../../assets/videos/video3.png';

const styles = ({
  container: {
    marginTop: 130,
    paddingTop: 68,
    paddingBottom: 46,
    backgroundColor: '#F5F5F5'
  },
  halfContainer: {
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100px',
      left: 0,
      top: 0,
      backgroundColor: '#F5F5F5',
      zIndex: 1
    }
  },
  videoWrapper: {
    position: 'relative',
    zIndex: 2
  },
  video: {

  },
  heading: {
    color: '#282828',
  },
  paragraph: {
    margin: 0,
    fontSize: 18,
    fontWeight: 300
  },
  image: {
    width: '100%'
  }
});

const videos = [
  {
    url: video1,
    title: 'Seienoid & Ggr'
  },
  {
    url: video2,
    title: 'Conference talks'
  },
  {
    url: video3,
    title: 'Moon'
  }
];

const Videos = ({classes}) => (
  <Fragment>
    <div className={classes.container}>
      <Container>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.heading}>
              Aerokube is a small team of software developers.
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={24}>
            <Grid item xs={12} sm={5}>
              <Typography variant="body1" className={classes.paragraph}>
                Aerokube is a small team of software developers. We are creating large scale software testing infrastructure for more than 6 years.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className={classes.paragraph}>
                Our experience in building large Selenium clusters allows to create scalable Selenium installation meeting your needs. We also contribute
                to open-source Selenium tools development.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
    <div className={classes.halfContainer}>
      <Container className={classes.videoWrapper}>
        <Grid container spacing={24}>
          {videos.map((video, index) => (
            <Grid key={index} item xs={12} sm={4}>
              <img className={classes.image} src={video.url} alt={video.title}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  </Fragment>
);

Videos.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Videos);
