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
    console.log("This resident has been applied for:", resident.applied);
  }
};
