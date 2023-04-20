export const SET_USER_NAME = "SET_USER_NAME"; // in here we create a const to display type of actions we want to create

export const setName = (name) => (dispatch) => {
  // dispatch is a function was given by redux - using npm i react-redux
  // send actions to redux by dispatch
  dispatch({
    // receive 2 parameter: type, payload
    // type: name of action
    //payload: value of action we want to dispatch
    type: SET_USER_NAME, // call the action
    payload: name, // trans the name
  });
};
// move to reducer.js
