import React from 'react';
import { PropTypes } from 'prop-types';

const Mav = props => (
  <div >
    <div>{props.emailLink}</div>
    <div>{props.jobUrl}</div>
  </div>
)

Mav.propTypes = {
  type: PropTypes.string.isRequired,
  emailLink: PropTypes.string.isRequired,
  jobUrl: PropTypes.string.isRequired,
}

export default Mav;