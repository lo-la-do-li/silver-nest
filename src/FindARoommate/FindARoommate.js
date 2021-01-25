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
  text2: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    color: "#5f6868",
    paddingTop: "4vh",
    paddingBottom: "3vh",
    textAlign: "center",
    fontSize: 18,
  },
  textSelect: {
    color: "#c714148c",
    paddingLeft: 6,
    fontWeight: 600,
  },
  box: {
    paddingTop: "5vh",
    paddingBottom: "1vh",
  },
});

function FindARoommate() {
  const classes = useStyles();
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

  const selectResident = (resident) => {
    setProfile(true);
    setSelectedResident(resident);
  };

  const exitProfileView = (noResident) => {
    setProfile(false);
    setSelectedResident(noResident);
  };

  const semesterDisplay = (semester) => {
    return semester.replace(/-/g, " ");
  };

  return (
    <Container className={classes.root}>
      {!profile ? (
        <>
          <Box className={classes.box}>
            <h1 className={classes.text}>I am seeking housing for:</h1>
            <Form className={classes.form} />
            {semester !== "" && (
              <div className={classes.text2}>
                <span>
                  The following participants have available housing for{" "}
                </span>{" "}
                <span className={classes.textSelect}>
                  {semesterDisplay(semester)}:
                </span>
              </div>
            )}
          </Box>

          <Thumbnails
            availableResidents={availableResidents}
            selectResident={selectResident}
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
