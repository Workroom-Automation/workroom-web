import { sectionActionType } from "../../data/models/sectionActionType.js";

export const SectionReducers = (state, action) => {
  switch (action.type) {
    case sectionActionType.addField:
      let initialState = {
        properties: {},
        triggers: [],
      };
      initialState.properties["type"] = action.data.id;
      return [...state, initialState];
    case sectionActionType.addFieldInfoToField:
      state[action.data.index] = action.data.fieldInfo;
      return state;
    default:
      return state;
  }
};
