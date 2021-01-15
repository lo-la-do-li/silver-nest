import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import silverNestLogo from '../silverNestLogo3.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  box: {
    display: "flex", 
    flexDirection: 'row', 
    justifyContent: 'center', 
    paddingRight: 30,
  },
  logo: {
    paddingTop: 10,
    height: 38
  }
});

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
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
          <img className={classes.logo} src={silverNestLogo} alt='Turing School of Health Sciences Logo'/>
        </Box>
    </Paper>
  );
}

export default NavBar;