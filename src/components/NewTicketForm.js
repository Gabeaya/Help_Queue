import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewTicketForm(props){
  const firestore = useFirestore();

  function addTicketToFireStore(event) {
    event.preventDefault();
    //when the user adds a ticket the moment time stamp will be created and the wait time will be set to the elapsed time since the ticket was open
    props.onNewTicketCreation();
    return firestore.collection('tickets').add(
      {
        names: event.target.names.value,
        location: event.target.location.value, 
        issue: event.target.issue.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addTicketToFireStore}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
