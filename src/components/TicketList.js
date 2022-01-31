import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'; //allows us to extract data from the redux store
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';//alows for listening of changes to firestore withojut class component

function TicketList(props){

  //specify the collection of tickets we want to listen to in the firestore
  useFirestoreConnect([
    {collection: 'tickets'}
  ]);

  const tickets = useSelector(state => state.firestore.ordered.tickets);

  if (isLoaded(tickets)) {//is loaded allows us to check if a collection has been retrieved
    return (
      <React.Fragment>
        <hr/>
        {tickets.map((ticket) =>
          <Ticket
            whenTicketClicked = { props.onTicketSelection }
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            formattedWaitTime={ticket.formattedWaitTime}
            id={ticket.id}
            key={ticket.id}/>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
  
}

TicketList.propTypes = {
  onTicketSelection: PropTypes.func
};
export default TicketList;