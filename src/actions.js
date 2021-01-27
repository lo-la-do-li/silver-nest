export const saveResidentApplied = (store, resident) => {
  const newApplication = store.state.residentsApplied.push(resident);
  store.setState({ newApplication });
  console.log(store.state.residentsApplied);
};

export const handleTabChange = (store, tabValue) => {
  store.setState({ tab: tabValue });
};

export const selectSemester = (store, selectedSemester) => {
  store.setState({ semester: selectedSemester });
};

export const determineApplyStatus = (store, resident) => {
  const savedResidents = store.state.residentsApplied;
  const savedId = savedResidents.find((res) => res.id === resident.id);
  if (savedId) {
    resident.applied = true;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    resident.dateApplied = today;
    console.log("This resident has been applied for:", resident.applied);
  }
};

export const addMessageToApplied = (store, resident, newMessage) => {
  // event.preventDefault();
  const savedResidents = store.state.residentsApplied;
  const savedResident = savedResidents.find((res) => res.id === resident.id);
  console.log(savedResident);
  if (savedResident) {
    return (resident.message = newMessage);
  }

  console.log(
    "Your message to this resident is:",
    resident.message,
    store.state.residentsApplied
  );
};
