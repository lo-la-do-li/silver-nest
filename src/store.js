import React from "react";
import globalHook from "use-global-hook";
import * as actions from "./actions";

const initialState = {
  tab: 0,
  allResidents: [],
  residentsApplied: [],
};

const useGlobal = globalHook(React, initialState, actions);
export default useGlobal;
