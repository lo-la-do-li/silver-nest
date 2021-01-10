import React, { useState, useEffect } from 'react';
import ControlledOpenSelect from '../Form/Form';
import SingleLineGridList from '../Thumbnails/Thumbnails'

export default function FindARoomate() {
  const [semester, setSemester] = React.useState('');
  
  const selectSemester = (selectedSemester) => {
    setSemester(selectedSemester)
  }
  
  return(
    <div>
      <ControlledOpenSelect selectSemester={selectSemester}/>
      <SingleLineGridList semesterAvailable={semester}/>
    </div>
  )
}