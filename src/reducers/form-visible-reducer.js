export default ( state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return !state;//if the toggle action is passed, the boolean toggles state
    default:
      return state;
  }
}