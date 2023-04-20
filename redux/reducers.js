// in here we need to import the action that we declared in actions.js
import { SET_USER_NAME } from "./actions";

// then we create a initial state
const initialState = {
  // this is an object
  name: "",
};
// then we create a function according to the actions called
function useReducer(state = initialState, action) {
  // receive 2 parameters: the initial State and action
  // we will use switch to catch the action
  switch (action) {
    case SET_USER_NAME:
      return { ...state, name: action.payload }; // action.payload is a value that you setup in actions.js according to the action name
    // we use ...state to create a clone of state

    default:
      return state;
  }
}
export default useReducer;
