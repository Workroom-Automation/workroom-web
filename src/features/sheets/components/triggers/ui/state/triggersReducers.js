import { triggersActionType } from "../../data/models/triggersActionType.js";

export const TriggersReducers = (state, action) => {
  switch (action.type) {
    case triggersActionType.addTriggers:
      let initialState = {
        name: "",
        condition_type: "",
        condition: {},
        action_type: "",
        action: {
          body: "",
          subject: "Subject",
          to: [],
        },
      };
      return [...state, initialState];
    case triggersActionType.removeTriggers:
      let arr = [];
      state.filter((item, index) => {
        if (item != action.data) {
          arr.push(item);
        }
      });
      return arr;
    case triggersActionType.editTriggers:
      state[action.data.index] = action.data.trigger;
      return [...state];
    default:
      return state;
  }
};
