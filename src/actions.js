export const saveResidentApplied = (store, resident) => {
  const newApplication = store.state.residentsApplied.push(resident);
  store.setState({ newApplication });
  console.log("globalState.residentsApplied:", store.state.residentsApplied);
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
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    resident.dateApplied = today;
  }
};

export const addMessageToApplied = (store, resident, newMessage) => {
  const savedResidents = store.state.residentsApplied;
  const savedResident = savedResidents.find((res) => res.id === resident.id);

  if (savedResident) {
    return (resident.message = newMessage);
  }
};
