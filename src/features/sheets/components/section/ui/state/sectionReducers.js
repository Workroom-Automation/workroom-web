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
    case sectionActionType.removeField:
      let arr = [];
      state.filter((item, index) => {
        if (item != action.data) {
          arr.push(item);
        }
      });
      return arr;
    case sectionActionType.addFieldInfoToField:
      state[action.data.index] = action.data.fieldInfo;
      return state;
    default:
      return state;
  }
};
