export const getResidentsBySemester = (semester) => {
  return fetch(
    `http://localhost:3001/api/v1/residents/${semester}`
    // `https://silver-nest-server.herokuapp.com/api/v1/residents/${semester}`
  ).then((response) => response.json());
};

export const fetchAllResidents = () => {
  return fetch(
    `http://localhost:3001/api/v1/residents/`
    // `https://silver-nest-server.herokuapp.com/api/v1/residents/`
  ).then((response) => response.json());
};
