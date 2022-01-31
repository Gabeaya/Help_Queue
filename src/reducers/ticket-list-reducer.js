import * as c from './../actions/ActionTypes';
export default (state = {}, action) => {//we use default because there will only be one function below
  const { id, formattedWaitTime } = action;
  switch (action.type) {
  case c.DELETE_TICKET:
    let newState = { ...state };//makes a copy of the current state
    delete newState[id];//uses delete function to remove the key value pair
    return newState; //returns our updated state
  case c.UPDATE_TIME:
    const newTicket = Object.assign({}, state[id], {formattedWaitTime});
    const updatedState = Object.assign({}, state, {
      [id]: newTicket
    });
    return updatedState;
  default:
    return state;
  }
};