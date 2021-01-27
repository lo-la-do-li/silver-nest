import React from "react";
import useGlobal from "../store";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppliedCard from "../AppliedCard/AppliedCard";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    display: "grid",
    padding: "2vw",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "30px",
    placeItems: "center",
    [theme.breakpoints.only("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      placeItems: "stretch",
    },
    [theme.breakpoints.only("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.only("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  box: {
    paddingTop: "8vh",
    paddingBottom: "5vh",
    color: "#7c8181",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const MyApplications = () => {
  const classes = useStyles();
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
        dateApplied={resident.dateApplied}
      />
    );
  });

  return (
    <>
      <Box className={classes.box}>
        <Typography
          variant="button"
          color="textSecondary"
          style={{ fontSize: "24px" }}
          capitalize={true}
        >
          My Applications
        </Typography>
      </Box>
      <Divider />
      <div className={classes.root}>
        <Container className={classes.container}>{applications}</Container>
      </div>
    </>
  );
};
export default MyApplications;
