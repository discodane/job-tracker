import React from 'react';
import { PropTypes } from 'prop-types';

const MavList = props => (
  <div>
    <h1>{props.title}</h1>
    {props.mavs
      .filter(mav => mav.status === props.type)
      .map((mav) => {
        return(
          <div key={mav.jobPostingLink}>
            <div>{mav.emailLink}</div>
            <div>{mav.jobPostingLink}</div>
            <div>{mav.status}</div>
          </div>
        )
      })
    }
  </div>
)

MavList.propTypes = {
  title: PropTypes.string.isRequired,
  mavs: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
}

export default MavList;