import React, { useState, useEffect } from "react";
// import useGlobal from "../store";
import { fetchAllResidents } from "../apiCalls";
import Thumbnails from "../Thumbnails/Thumbnails";
import Profile from "../Profile/Profile";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import residentsData from "../residentsData";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    marginTop: -20,
  },
  text: {
    color: "#7c8181",
    paddingTop: "5vh",
  },
});

const AllResidents = () => {
  const classes = useStyles();
  const [allResidents, setAllResidents] = useState([]);
  const [profile, setProfile] = useState(false);
  const [selectedResident, setSelectedResident] = useState(null);

  useEffect(() => {
    // getAllResidents();
    backupGetAllResidents();
  }, []);

  const getAllResidents = async () => {
    await fetchAllResidents()
      .then((residents) => setAllResidents(residents))
      .catch((err) => console.log(err));
  };

  const backupGetAllResidents = () => {
    setAllResidents(residentsData);
  };

  const selectResident = (resident) => {
    setProfile(true);
    setSelectedResident(resident);
  };

  const exitProfileView = (noResident) => {
    setProfile(false);
    setSelectedResident(noResident);
  };

  return (
    <Container className={classes.root}>
      <Box className={classes.text}>
        <h2>All of Our Participating Residents</h2>
        <h3>
          To view residents by semester availability and apply, navigate to Find
          A Roommate.
        </h3>
      </Box>
      {!profile ? (
        <>
          <Thumbnails
            availableResidents={allResidents}
            selectResident={selectResident}
          />
        </>
      ) : (
        <Profile
          resident={selectedResident}
          exitProfileView={exitProfileView}
          isAvailable={false}
        />
      )}
    </Container>
  );
};
export default AllResidents;
