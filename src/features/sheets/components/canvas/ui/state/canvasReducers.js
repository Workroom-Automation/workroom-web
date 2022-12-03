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
    case canvasActionType.addFieldsToSection:
      let arr = state;
      state[action.data.index].fields = action.data.fields;
      return state;
    default:
      return state;
  }
};
