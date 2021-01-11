import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
// import turingSHSLogo from '../geometric-heart-logo.png';
import Box from '@material-ui/core/Box';
import silverNestLogo from '../silverNestLogo3.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  tabText: {
    backgroundColor: "black"
  },
  box: {
    display: "flex", 
    flexDirection: 'row', 
    justifyContent: 'center', 
    paddingRight: 40
  }
});

export default function CenteredTabs({theme}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        // className={classes.tabText}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="About" component={Link} to="/about"/>
        <Tab label="Find A Roommate" component={Link} to="/find-a-roommate"/>
      </Tabs>
        <Box className={classes.box}>
        {/* <h3 style={{padding: "10", color:"#7c8181"}}>Silvernest</h3> */}
        <img className="App-logo" src={silverNestLogo} alt='Turing School of Health Sciences Logo'/>
        </Box>
    </Paper>
  );
}