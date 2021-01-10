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
      <ControlledOpenSelect selectSemester={selectSemester}/>
      <SingleLineGridList availableResidents={residents} semesterAvailable={semester}/>
    </div>
  )
}