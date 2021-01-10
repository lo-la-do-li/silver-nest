import React, { useState, useEffect } from 'react';
import getAllResidents from '../apiCalls';
import ControlledOpenSelect from '../Form/Form';
import SingleLineGridList from '../Thumbnails/Thumbnails'

export default function FindARoomate() {
  const [semester, setSemester] = useState('');
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    getResidents();
  }, [])

  const getResidents = async () => {
    await getAllResidents()
    .then(data => setResidents(data))
    .catch(err => console.log(err))
    console.log(residents)
  }

  const selectSemester = (selectedSemester) => {
    setSemester(selectedSemester)
  }
  
  return(
    <div>
      <div style={{paddingTop: 90, paddingBottom: 80}}>
      <h1 style={{color:"#7c8181"}}>Select a semester:</h1>
      <ControlledOpenSelect style={{marginTop:-20}} selectSemester={selectSemester}/>
      </div>
      <SingleLineGridList availableResidents={residents} semesterAvailable={semester}/>
    </div>
  )
}