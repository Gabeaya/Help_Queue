import React from "react";
import {v4} from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import Moment from 'moment';

function NewTicketForm(props){
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    //when the user adds a ticket the moment time stamp will be created and the wait time will be set to the elapsed time since the ticket was open
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4(), timeOpen: new Moment(), formattedWaitTime: new Moment().fromNow(true)});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
