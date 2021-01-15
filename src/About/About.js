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
    padding: theme.spacing(2),
    // paddingTop: 20,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse'
    },
  
    },
  container: {
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
  },
  box: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  gridList: {
    paddingTop: 20,
    cellHeight: 160,
    cols: 3,
    [theme.breakpoints.down('sm')]: {
      
    },
  },
  h1: {
    textAlign: 'left',
    color: '#7c8181',
    fontSize: '2.2vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    },
    
  },
  button: {
    padding: 18,
    margin: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15
    },
  }
  }));

function About() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      </div>
      <div className={classes.container}>
        <Box className={classes.box}>
          <h1 className={classes.h1}>Turing School of Health Sciences has partnered with Mountain View Residences, a senior independent living resort, to match qualified Health Sciences Students to elderly residents living in the community based on compatibility of living preferences, needs, and schedules.</h1>
        </Box>
        <Button className={classes.button} component={Link} to='/find-a-roommate' variant="outlined" color="secondary">
            Find a Roommate
        </Button> 
      </div>
    </Container>
  );
}

export default About;