export const getAllResidents = () => {
  return (
  fetch('https://silver-nest.herokuapp.com/api/v1/residents')
  .then(data => data.json())
  )
}

export const getResidentsBySemester = (semester) => {
  // const apiLink = 'https://silver-nest.herokuapp.com/api/v1/residents'
  return (
  fetch(`https://silver-nest.herokuapp.com/api/v1/residents/${semester}`)
  .then(response => response.json())
  )
}