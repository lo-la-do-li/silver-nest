import React, { useState, useEffect } from 'react';
import {getAllResidents, getResidentsBySemester} from '../apiCalls';
import Form from '../Form/Form';
import Thumbnails from '../Thumbnails/Thumbnails'
import ResidentCard from '../Profile/Profile';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { HelpOutline } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop:-20
  },
  text: {
    color: "#7c8181"
  },
  box: {
    paddingTop: 50, 
    paddingBottom: 80
  }
});

export default function FindARoomate() {
  const classes = useStyles();

  const [semester, setSemester] = useState('');
  const [allResidents, setAllResidents] = useState([]);
  const [availableResidents, setAvailableResidents] = useState([]);
  const [selectedResident, setSelectedResident] = useState('');
  const [profile, setProfile] = useState(false);

  useEffect(() => {
  
  }, [semester, availableResidents])

  // const getResidents = async () => {
  //   await getAllResidents()
  //   .then(data => setAllResidents(data))
  //   .catch(err => console.log(err))
  // }

  const selectSemester = (selectedSemester) => {
    setSemester(selectedSemester)
    getAvailableResidents(selectedSemester)
  }

  const getAvailableResidents = async (semester) => {
    await getResidentsBySemester(semester)
    .then(data => setAvailableResidents(data))
    .catch(err => console.log(err))
  }
  
  const selectResident = (resident) => {
    setProfile(true)
    setSelectedResident(resident)
  }

  const exitProfileView = (noResident) => {
    setProfile(false)
    setSelectedResident(noResident)

  }

  return (
    <Container className={classes.root}>
      {!profile?
      <>
      <Box className={classes.box}>
        <h1 className={classes.text}>Select a semester:</h1>
        <Form className={classes.form} selectSemester={selectSemester} />
      </Box>
      
        <Thumbnails
          availableResidents={availableResidents}
          // allResidents={allResidents}
          selectResident={selectResident}
          semesterAvailable={semester}
        />
        </>
      :
        <ResidentCard 
          resident={selectedResident} 
          exitProfileView={exitProfileView} />
      }
    </Container>
  );
}