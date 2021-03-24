import React from "react";
import globalHook from "use-global-hook";
import * as actions from "./actions";
import residentsData from "./residentsData.js";

const initialState = {
  tab: 0,
  allResidents: residentsData,
  residentsApplied: [],
  semester: "",
};

const useGlobal = globalHook(React, initialState, actions);
export default useGlobal;
