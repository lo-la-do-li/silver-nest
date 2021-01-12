const updateResidentData = (path, data) => {
  return fetch(path, {
    method: "PATCH",
    headers: {
      "content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      return response;
    } else {
      throw new Error(
        "Sorry we have encountered an error. Please try again, or come back later."
      )
    }
  })
}

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

export const patchResidentAvailability = (id, data) => {
  return updateResidentData(`https://silver-nest.herokuapp.com/api/v1/residents/${id}`, data)
}