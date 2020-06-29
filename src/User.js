import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
  return (
  <li>{props.user.userName} 
    <p>Number of games played : {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
   </li>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User