import React from 'react';
import { PropTypes } from 'prop-types';
import { 
  Button,
  ControlLabel, 
  FormControl,
  FormGroup,
} from 'react-bootstrap';

import './NewMavForm.css';

const NewMavForm = props => {
  return (
    <form onSubmit={props.addMav}>
      <FormGroup>
        <ControlLabel>Working example with validation</ControlLabel>
        <FormControl
          className="new-mav-input"
          type="text"
          placeholder="Enter email confirmation"
          value={props.emailLink}
          onChange={props.emailChange}
        />
        <FormControl
          className="new-mav-input"
          type="text"
          placeholder="Enter job posting url"
          value={props.jobPostingLink}
          onChange={props.jobUrlChange}
        />
        <Button className="add-new-mav" type='submit'>Default</Button>
      </FormGroup>
    </form>
  )
}

NewMavForm.propTypes = {
  addMav: PropTypes.func.isRequired,
  emailLink: PropTypes.string.isRequired,
  jobPostingLink: PropTypes.string.isRequired,
  emailChange: PropTypes.func.isRequired,
  jobUrlChange: PropTypes.func.isRequired,
}

export default NewMavForm;