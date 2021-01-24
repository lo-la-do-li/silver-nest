import React, { useState, useEffect } from "react";
import useGlobal from "../store";
import { fetchAllResidents } from "../apiCalls";
// import Thumbnails from "../Thumbnails/Thumbnails";
// import Profile from "../Profile/Profile";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppliedCard from "../AppliedCard/AppliedCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    display: "grid",
    padding: "2vw",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "50px",
    [theme.breakpoints.only("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    [theme.breakpoints.only("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  text: {
    color: "#7c8181",
    paddingTop: "5vh",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const MyApplications = () => {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [residentsApplied, setResidentsApplied] = useGlobal(
    (state) => state.residentsApplied
  );

  const applications = residentsApplied.map((resident) => {
    return (
      <AppliedCard
        resident={resident}
        id={resident.id}
        key={resident.id}
        name={resident.name}
        image={resident.photo}
        age={resident.age}
        semester={resident.semester}
        dateApplied={Date.now()}
      />
    );
  });
  return (
    <>
      <Box className={classes.text}>
        <h2>Applications Pending</h2>
      </Box>
      <div className={classes.root}>
        <Container className={classes.container}>{applications}</Container>
      </div>
    </>
  );
};
export default MyApplications;
