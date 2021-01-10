const getAllResidents = () => {
  return (
  fetch('https://silver-nest.herokuapp.com/api/v1/residents')
  .then(data => data.json())
  )
}

export default getAllResidents;