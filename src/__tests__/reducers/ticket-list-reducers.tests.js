import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {
  let action;
  const ticketData = {
    names:'Ryan & Aimen',
    location: '4B',
    issue: 'Redux action is not working',
    id: 2
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('Should succesfully addd new ticket data to theMainTickeList ',() => {
    const {names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
      names = names,
      location: location,
      issue: issue,
      id: id
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names:names,
        location:location,
        issue: issue,
        id: id 
      }
    });
  });
});