import { sectionActionType } from "../../data/models/sectionActionType.js";

export const SectionReducers = (state, action) => {
  switch (action.type) {
    case sectionActionType.addField:
      let initialState = {
        properties: {},
      };
      initialState.properties["type"] = action.data.id;
      return [...state, initialState];
    case sectionActionType.addPropertiesToField:
      state[action.data.index]["properties"] = action.data.properties;
      return state;
    default:
      return state;
  }
};
