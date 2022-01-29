import * as c from './../actions/ActionTypes';
export default (state = {}, action) => {//we use default because there will only be one function below
  const { names, location, issue, id, formattedWaitTime, timeOpen } = action;
  switch (action.type) {
  case c.ADD_TICKET: //lines 4 through 11 are the switch case if the action is equal to add ticket
    return Object.assign({}, state, {//we need the '{}' in order to creat a copy and not directly affect the state
      //the second argument is the object that will be cloned
      //the third is the change made to the copy
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
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