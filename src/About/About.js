import React from "react";
import useGlobal from "../store";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { tileData } from "../assets/tileData.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: "95%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      padding: 0,
    },

    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  box: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: "1vw",
    },
  },
  gridList: {
    paddingTop: "2vh",
    cellHeight: 160,
    cols: 3,
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap-reverse",
    },
  },
  h1: {
    textAlign: "left",
    color: "#7c8181",
    fontSize: "2vw",
    paddingLeft: "1vw",
    paddingTop: "5vh",
    [theme.breakpoints.only("xs")]: {
      fontSize: "3vw",
      paddingTop: "2vh",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.4vw",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "2.4vw",
      paddingRight: 0,
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "2.2vw",
      paddingRight: 0,
    },
  },
  button: {
    padding: "1.2vh",
    margin: "10vh",
    fontSize: "1.2vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2vw",
      margin: "3vh",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.2vw",
    },
  },
}));

function About() {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  // const [tab, setTab] = useGlobal((state) => state.tab);

  const handleTab = (tab) => {
    globalActions.handleTabChange(tab);
  };

  return (
    <Container className={classes.root}>
      <div className={classes.box}>
        <GridList className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div className={classes.box}>
        {/* <Box className={classes.box}> */}
        <h1 className={classes.h1}>
          Turing School of Health Sciences has partnered with Mountain View
          Residences, a senior independent living resort, to match qualified
          Health Sciences Students to elderly residents living in the community
          based on compatibility of living preferences, needs, and schedules.
        </h1>
        {/* </Box> */}
        <Button
          className={classes.button}
          component={Link}
          to="/find-a-roommate"
          onClick={() => handleTab(1)}
          variant="outlined"
          color="secondary"
        >
          Find a Roommate
        </Button>
      </div>
    </Container>
  );
}

export default About;
