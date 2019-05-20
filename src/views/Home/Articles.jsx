import React from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '../../components/Container';

const styles = {
  container: {
    marginBottom: 100,
  },
  header: {
    fontSize: 44,
    marginTop: 78,
    marginBottom: 8
  },
  article: {
    border: '2px solid rgba(10, 34, 94, 0.19)',
    padding: 24,
    borderRadius: 5
  },
  title: {
    color: '#1754ED',
    fontWeight: 600,
    fontSize: 18
  },
  subtitle: {
    color: '#6D6D7A',
    marginTop: 16,
    fontSize: 18,
    fontWeight: 300
  }
};

const articles = [
  {
    title: 'Selenium: a new hope (part 1)',
    subtitle: 'In this article we provide motivation for creating Moon and demonstrate first features.'
  },
  {
    title: 'Selenium: a new hope (part 1)',
    subtitle: 'In this article we provide motivation for creating Moon and demonstrate first features.'
  },
  {
    title: 'Selenium: a new hope (part 1)',
    subtitle: 'In this article we provide motivation for creating Moon and demonstrate first features.'
  },
  {
    title: 'Selenium: a new hope (part 1)',
    subtitle: 'In this article we provide motivation for creating Moon and demonstrate first features.'
  },
  {
    title: 'Selenium: a new hope (part 1)',
    subtitle: 'In this article we provide motivation for creating Moon and demonstrate first features.'
  },
  {
    title: 'Selenium: a new hope (part 1)',
    subtitle: 'In this article we provide motivation for creating Moon and demonstrate first features.'
  },
  {
    title: 'Selenium: a new hope (part 1)',
    subtitle: 'In this article we provide motivation for creating Moon and demonstrate first features.'
  },
  {
    title: 'Selenium: a new hope (part 1)',
    subtitle: 'In this article we provide motivation for creating Moon and demonstrate first features.'
  },
  {
    title: 'Selenium: a new hope (part 1)',
    subtitle: 'In this article we provide motivation for creating Moon and demonstrate first features.'
  }
];

const Articles = ({classes}) => (
  <Container className={classes.container}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography className={classes.header} variant="h3">Articles</Typography>
      </Grid>
      {articles.map((article, index) => (
        <Grid key={index} item xs={12} sm={4}>
          <div className={classes.article}>
            <Typography variant="body1" className={classes.title}>{article.title}</Typography>
            <Typography variant="body1" className={classes.subtitle}>{article.subtitle}</Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  </Container>
);

Articles.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Articles);
