export const saveResidentApplied = (store, resident) => {
  const newApplication = store.state.residentsApplied.push(resident);
  store.setState({ newApplication });
  console.log(store.state.residentsApplied);
};

export const handleTabChange = (store, tabValue) => {
  store.setState({ tab: tabValue });
  // console.log(store.state.tab);
};

export const selectSemester = (store, selectedSemester) => {
  store.setState({ semester: selectedSemester });
  // getAvailableResidents(selectedSemester);
};

export const disableApply = (store, resident) => {
  const savedResidents = store.state.residentsApplied;
  const savedId = savedResidents.find((res) => res.id === resident.id);
  if (savedId) {
    console.log("This resident has been applied for:", resident.name);
  }
};
