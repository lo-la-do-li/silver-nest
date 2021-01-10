import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import turingSHSLogo from '../geometric-heart-logo.png';
import { Link } from 'react-router-dom';
import { tileData } from '../assets/tileData.js';

const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      // flexWrap: 'wrap',
      justifyContent: 'space-around',
      // overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      flexDirection: 'row',
      // height: "100vh"
    },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
   gridList: {
    // width: 500,
    // height: 100%,
  },
//   .MuiButton-outlined {
//     // border: 1px solid rgba(0, 0, 0, 0.23);
//     padding: 10px 15px;
// }
  }));

const About = () => {
  const classes = useStyles();
  return (
     <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}

      </GridList>
       <div>
      <Box padding={7}>
        {/* <div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
        <h1 style={{padding: "10", color:"#7c8181"}}>Silvernest</h1>
        <img className="App-logo" src={turingSHSLogo} alt='Turing School of Health Sciences'/>
        </div> */}
       <h1 style={{textAlign: 'left', color:"#7c8181"}}>Turing School of Health Sciences has partnered with Mountain View Residences, a senior independent living resort, to match qualified Health Sciences Students to elderly residents living in the community based on compatibility of living preferences, needs, and schedules.</h1>
       </Box>
       <Button component={Link} to='/find-a-roommate' style={{padding: 20}} variant="outlined" color="primary">
          Find a Roommate
      </Button> 
       </div>
    </div>
  )
}

export default About;