import React, { useState, useEffect } from 'react';
import {getAllResidents, getResidentsBySemester} from '../apiCalls';
import ControlledOpenSelect from '../Form/Form';
import SingleLineGridList from '../Thumbnails/Thumbnails'
import ResidentCard from '../Profile/Profile';
import turingHeartLogo from '../turingHeartLogo.png';
import mtnViewLogo from '../mtnViewLogo.png';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export default function FindARoomate() {
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
    <div style={{paddingTop: 50}}>
        <img className="Box-logo" src={turingHeartLogo} alt='Mountain View Residences Logo' /> 
      <div style={{paddingTop: 50, paddingBottom: 80}}>
      <h1 style={{color:"#7c8181"}}>Select a semester:</h1>
      <ControlledOpenSelect style={{marginTop:-20}} selectSemester={selectSemester}/>
      </div>
      <SingleLineGridList availableResidents={availableResidents} allResidents={residents} selectResident={selectResident} semesterAvailable={semester}/>
      {selectedResident && <ResidentCard resident={selectedResident} />}
    </div>
  )
}