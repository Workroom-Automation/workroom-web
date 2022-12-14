import { processListActionType } from "../../data/models/processListActionType.js";

export const ProcessListReducers = (state, action) => {
  switch (action.type) {
    case processListActionType.loadingProcessList:
      let loadingObj = {
        loading: true,
        data: state.data,
        error: null,
      };
      return loadingObj;
    case processListActionType.dataProcessList:
      let dataObj = {
        loading: false,
        data: action.data,
        error: null,
      };
      return dataObj;
    default:
      return state;
  }
};
