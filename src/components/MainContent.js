import React from 'react';
import { PropTypes } from 'prop-types';

import NewMavForm from './NewMavForm';
import MavList from './MavList';

const MainContent = props => (
  <div className="main-content">
    <NewMavForm 
      addMav={props.addNewMav} 
      emailLink={props.emailLink} 
      companyName={props.companyName}
      jobPostingLink={props.jobPostingLink} 
      companyNameChange={props.handleCompanyNameChange}
      emailChange={props.handleEmailChange}
      jobUrlChange={props.handleJobUrlChange}
    />
    <MavList 
      title="Pending" 
      mavs={props.mavs}
      type="pending" 
      putToRejection={props.putToRejection}
      putToFollowUp={props.putToFollowUp}
    />
    <MavList 
      title="Rejects"
      mavs={props.mavs}
      type="reject"
    />
    <MavList
      title="Following Up"
      mavs={props.mavs}
      type="followUp"
    />
  </div>
);

MainContent.propTypes = {
  addNewMav: PropTypes.func.isRequired,
  companyName: PropTypes.string.isRequired,
  emailLink: PropTypes.string.isRequired,
  jobPostingLink: PropTypes.string.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handleJobUrlChange: PropTypes.func.isRequired,
  handleCompanyNameChange: PropTypes.func.isRequired,
  putToRejection: PropTypes.func.isRequired,
  putToFollowUp: PropTypes.func.isRequired,
  mavs: PropTypes.array.isRequired,
}

export default MainContent;