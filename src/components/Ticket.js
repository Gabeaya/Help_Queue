import React from "react";
import PropTypes from "prop-types";
function Ticket(props){
  // hard coded code right here baby^^
  return (
    <React.Fragment>
      {/* Below we use arrow notation within the div to return the id of a clicked ticket */}
      <div onClick = {() => props.whenTicketClicked(props.id)}> 
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string
};
export default Ticket;