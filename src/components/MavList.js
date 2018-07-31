import React from 'react';
import { PropTypes } from 'prop-types';

import Mav from './Mav';

const MavList = props => (
  <div>
    <h1>{props.title}</h1>
    {props.mavs
      .filter(mav => mav.status === props.type)
      .map((mav) => {
        return(
          <Mav 
            key={mav.companyName} 
            emailLink={mav.emailLink} 
            jobUrl={mav.jobPostingLink}
            companyName={mav.companyName}
            type={props.type}
            handleRejection={() => props.putToRejection(mav.companyName)}
          />
        )
      })
    }
  </div>
)

MavList.propTypes = {
  title: PropTypes.string.isRequired,
  mavs: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  putToRejection: PropTypes.func,
}

export default MavList;