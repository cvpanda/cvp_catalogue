import { x } from "../actions/index";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case x:
      return {
        ...state,
        something: action.payload,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
