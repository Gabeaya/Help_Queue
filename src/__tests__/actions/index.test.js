import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';
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
  it('updateTime should create UPDATE_TIME action', () =>
  {
    expect(actions.updateTime(1, "A few secs")).toEqual
    ({
      type: c.UPDATE_TIME,
      id: 1,
      formattedWaitTime: "A few secs"
    });
  });
});