import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class TicketControl extends React.Component {

  //Constructor

  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: null, //selected ticket is null because no tickets have been selected yet
      editing: false
    };
  }
//when component is mounted the following will trigger
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() => 
      this.updateTickeElapsedWaitTime(),
    1000
    );
  }

  componentDidUpdate() {
    console.log("component update!");
  }

  componentWillUnmount() {
    console.log("component unmounted! ");
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTickeElapsedWaitTime = () => {
    console.log("tick");
  }

  //Custom methods

  //handles toggling state
  handleClick = () => {
    if(this.state.selectedTicket != null) {
      this.setState({
        selectedTicket: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  //handles adding a new tick to the mainticketlist with new ticket as a parameter
  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props;
    const action = a.addTicket(newTicket);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
    //setState is like dispatch in that it communicates with the state store as dispatch does to our redux store
  }

//handles setting state to a selected ticket using the id as a param
  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.mainTicketList[id];
    this.setState({selectedTicket: selectedTicket});
  }
//handles deleting ticket from mainticketlist
  

  //Method that shows the edit form

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTicket(ticketToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTicket(id);
    dispatch(action);
    this.setState({selectedTicket: null});
  }

  render(){  
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
      buttonText = "Return To Ticket List"
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} onClickingDelete = {this.handleDeletingTicket} onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to ticket list";

    } else if (this.props.formVisibleOnPage){
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>;//onNewTicketCreation will be the propety of NewTicketForm object and it will be equal to the handle we created on line 21
      buttonText = "Return to ticket list";
  
    } else {
      currentlyVisibleState = <TicketList ticketList={this.props.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;//this is how we pass mainTicketList to the ticketlist where ticketList acts as the property to Ticketlist and onticketSelection will be the property representing the changing selected ticket
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

TicketControl.propTypes = {
  mainTicketList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps =  state => {
  return {
    mainTicketList: state.mainTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);//this redfines ticketcontrol as a new tickcontrol component with dispatch() and mapStateToProps()at our disposal
export default TicketControl;