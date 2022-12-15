import { dataFetchActionType } from "./dataFetchActionType.js";

export const DataFetchReducers = (state, action) => {
  switch (action.type) {
    case dataFetchActionType.loading:
      let loadingObj = {
        loading: true,
        data: state.data,
        error: null,
      };
      return loadingObj;
    case dataFetchActionType.data:
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
