import { sheetListActionType } from "../../data/models/sheetListActionType.js";

export const SheetListReducers = (state, action) => {
  switch (action.type) {
    case sheetListActionType.loadingSheetList:
      let loadingObj = {
        loading: true,
        data: state.data,
        error: null,
      };
      return loadingObj;
    case sheetListActionType.dataSheetList:
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
