import { canvasActionType } from "../../data/models/canvasActionType.js";

export const CanvasReducers = (state, action) => {
  switch (action.type) {
    case canvasActionType.addSection:
      let initialState = {
        name: "",
        description: "",
        fields: [],
      };
      return [...state, initialState];
    case canvasActionType.editSectionName:
      state[action.data.index].name = action.data.name;
      return state;
    case canvasActionType.editSectionDescription:
      state[action.data.index].description = action.data.description;
      return state;
    case canvasActionType.addFieldsToSection:
      let arr = state;
      state[action.data.index].fields = action.data.fields;
      return state;
    default:
      return state;
  }
};
