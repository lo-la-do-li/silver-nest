export const saveResidentApplied = (store, resident) => {
  const newApplication = store.state.residentsApplied.push(resident);
  store.setState({ newApplication });
  console.log(store.state.residentsApplied);
};

export const handleTabChange = (store, tabValue) => {
  store.setState({ tab: tabValue });
  // console.log(store.state.tab);
};
