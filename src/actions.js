export const saveResidentApplied = (store, resident) => {
  const newApplication = store.state.residentsApplied.push(resident);
  store.setState({ newApplication });
};

export const handleTabChange = (store, tabValue) => {
  store.setState({ tab: tabValue });
  console.log(store.state.tab);
};
