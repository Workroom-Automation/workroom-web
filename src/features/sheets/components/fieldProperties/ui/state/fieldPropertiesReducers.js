import { fieldPropertiesActionType } from "../../data/models/fieldPropertiesActionType.js";

export const FieldPropertiesReducers = (state, action) => {
  switch (action.type) {
    case fieldPropertiesActionType.addFieldProperties:
      return [...state, ""];
    case fieldPropertiesActionType.removeFieldProperties:
      let arr = [];
      state.filter((item, index) => {
        if (item != action.data) {
          arr.push(item);
        }
      });
      return arr;
    case fieldPropertiesActionType.editFieldProperties:
      state[action.data.index] = action.data.property;
      return state;
    default:
      return state;
  }
};
