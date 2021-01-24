import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import silverNestLogo from "../silverNestLogo3.png";
import useGlobal from "../store";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: "1.5vw",
  },
  logo: {
    paddingTop: 10,
    height: 37,
  },
});

const NavBar = () => {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [tab, setTab] = useGlobal((state) => state.tab);

  const handleTab = (event, tab) => {
    globalActions.handleTabChange(tab);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={tab}
        onChange={handleTab}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="About" component={Link} to="/about" value={0} />
        <Tab
          label="Find A Roommate"
          component={Link}
          to="/find-a-roommate"
          value={1}
        />
      </Tabs>
      <Box className={classes.box}>
        <img
          className={classes.logo}
          src={silverNestLogo}
          alt="Turing School of Health Sciences Logo"
        />
      </Box>
    </Paper>
  );
};

export default NavBar;
