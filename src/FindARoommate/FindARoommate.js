import React, { useState, useEffect } from "react";
import useGlobal from "../store";
import { getResidentsBySemester } from "../apiCalls";
import Form from "../Form/Form";
import Thumbnails from "../Thumbnails/Thumbnails";
import Profile from "../Profile/Profile";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

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
  },
  box: {
    paddingTop: "5vh",
    paddingBottom: 80,
  },
});

function FindARoommate() {
  const classes = useStyles();

  // const [semester, setSemester] = useState("");
  const [availableResidents, setAvailableResidents] = useState([]);
  const [selectedResident, setSelectedResident] = useState(null);
  const [profile, setProfile] = useState(false);

  const [globalState, globalActions] = useGlobal();
  const [semester, setSemester] = useGlobal((state) => state.semester);
  useEffect(() => {
    if (semester !== "") {
      getAvailableResidents(semester);
    }
  }, [semester]);

  const getAvailableResidents = async (semester) => {
    await getResidentsBySemester(semester)
      .then((data) => setAvailableResidents(data))
      .catch((err) => console.log(err));
  };
  // const selectSemester = (selectedSemester) => {
  //   // setSemester(selectedSemester);
  //   getAvailableResidents(selectedSemester);
  // };

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
      {!profile ? (
        <>
          <Box className={classes.box}>
            <h1 className={classes.text}>Select a semester:</h1>
            {/* <Form className={classes.form} selectSemester={selectSemester} /> */}
            <Form className={classes.form} />
          </Box>

          <Thumbnails
            availableResidents={availableResidents}
            selectResident={selectResident}
            // semesterAvailable={semester}
          />
        </>
      ) : (
        <Profile
          resident={selectedResident}
          exitProfileView={exitProfileView}
          isAvailable={true}
        />
      )}
    </Container>
  );
}

export default FindARoommate;
