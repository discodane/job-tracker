import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap'

const Mav = props => (
  <div>
    <div>{props.emailLink}</div>
    <div>{props.jobUrl}</div>
    <div>{props.companyName}</div>
    {props.type === "pending" && 
      <div>
        <Button onClick={props.handleRejection}>Rejected</Button>
        <Button onClick={props.handleFollowUp}>Follow Up</Button>
      </div>
    }
  </div>
)

Mav.propTypes = {
  type: PropTypes.string.isRequired,
  emailLink: PropTypes.string.isRequired,
  jobUrl: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  handleRejection: PropTypes.func.isRequired,
  handleFollowUp: PropTypes.func.isRequired,
}

export default Mav;