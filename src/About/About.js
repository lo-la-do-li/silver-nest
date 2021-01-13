import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { tileData } from '../assets/tileData.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 20
    },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  box: {
    paddingTop: 1,
    padding: theme.spacing(7),
    paddingBottom: 25,
  },
  gridList: {
    cellHeight: 160,
    cols: 3,
  },
  h1: {
    textAlign: 'left', 
    color:"#7c8181"
  },
  button: {
    padding: 20,
  }
  }));

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      <div className={classes.container}>
        <Box className={classes.box}>
          <h1 className={classes.h1}>Turing School of Health Sciences has partnered with Mountain View Residences, a senior independent living resort, to match qualified Health Sciences Students to elderly residents living in the community based on compatibility of living preferences, needs, and schedules.</h1>
        </Box>
        <Button className={classes.button} component={Link} to='/find-a-roommate' variant="outlined" color="secondary">
            Find a Roommate
        </Button> 
      </div>
    </Container>
  )
}

export default About;