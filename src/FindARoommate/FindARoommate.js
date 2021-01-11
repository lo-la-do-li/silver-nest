import React, { useState, useEffect } from 'react';
import {getAllResidents, getResidentsBySemester} from '../apiCalls';
import Form from '../Form/Form';
import Thumbnails from '../Thumbnails/Thumbnails'
import ResidentCard from '../Profile/Profile';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({

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
  const [residents, setResidents] = useState([]);
  const [availableResidents, setAvailableResidents] = useState([]);
  const [selectedResident, setSelectedResident] = useState('');

  useEffect(() => {
    if (!availableResidents.length) {
      getResidents();
    } else {
      getAvailableResidents(semester);
    }
  }, [])

  const getResidents = async () => {
    await getAllResidents()
    .then(data => setResidents(data))
    .catch(err => console.log(err))
  }

  const selectSemester = (selectedSemester) => {
    setSemester(selectedSemester)
    getAvailableResidents(semester)
  }

  const getAvailableResidents = async (semester) => {
    await getResidentsBySemester(semester)
    .then(data => setAvailableResidents(data))
    .catch(err => console.log(err))
  }
  
  const selectResident = (resident) => {
    setSelectedResident(resident)
    console.log(resident)
  }

  return(
    <div>
      <Box className={classes.box}>
      <h1 className={classes.text}>Select a semester:</h1>
      <Form className={classes.form} selectSemester={selectSemester}/>
      </Box>
      <Thumbnails availableResidents={availableResidents} allResidents={residents} selectResident={selectResident} semesterAvailable={semester}/>
      {selectedResident && <ResidentCard resident={selectedResident} />}
    </div>
  )
}