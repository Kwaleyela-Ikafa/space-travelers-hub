import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <div>
    <div>
      <div><img src={rocket.flickrImages[0]} alt="Rocket-Banner" /></div>
      <div>
        <div>
          <h1>{rocket.name}</h1>
          <div>{rocket.description}</div>
        </div>
        <div><button type="submit">Reserve Rocket</button></div>
      </div>
    </div>
  </div>
);
Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    flickrImages: PropTypes.string,
  }).isRequired,
};

export default Rocket;
