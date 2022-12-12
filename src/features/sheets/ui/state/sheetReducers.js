import { sheetActionType } from "../../data/models/sheetActionType.js";

export const SheetReducers = (state, action) => {
  switch (action.type) {
    case sheetActionType.addSheetDetails:
      let obj = action.data;
      obj["sections"] = state.sections ? state.sections : [];
      state = obj;
      return state;
    case sheetActionType.addSectionsToSheet:
      state.sections = action.data;
      return state;
    default:
      return state;
  }
};
