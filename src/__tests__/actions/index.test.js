import * as actions from './../../actions';

describe('help queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', ()=> {
    expect(actions.deleteTicket(1)).toEqual({
      type: 'DELETE_TICKET',
      id:1
    });
  });

  it('toggleaform should create TOGGLE+FORM ACTION', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addTicket should create ADD_TICKET action', () => {
    expect(actions.addTicket({names: 'Jo and Jasmin',location:'3E', issue:'redux not working', id:1})).toEqual({
      type:'ADD_TICKET',
      names: 'Jo and Jasmin',
      location: '3E',
      issue:'redux not working',
      id:1
    });
  });
});