export const getResidentsBySemester = (semester) => {
  return (
  fetch(`https://silver-nest-server.herokuapp.com/api/v1/residents/${semester}`)
  .then(response => response.json())
  );
}