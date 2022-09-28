import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRockets, ChangeStatus } from '../Redux/Rockets/Rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const rocketHandleBtn = (id) => {
    dispatch(ChangeStatus(id));
  };
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rockets.length) dispatch(fetchRockets());
  }, []);

  return (
    <div>
      <div>
        <div><img src={rocket.flickrImages[0]} alt="Rocket-Banner" /></div>
        <div>
          <div>
            <h1>{rocket.name}</h1>
            <p>{rocket.description}</p>
          </div>
          <div><button type="submit" onClick={() => rocketHandleBtn(rocket.id)}>Reserve Rocket</button></div>
        </div>
      </div>
    </div>
  );
};
Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    flickrImages: PropTypes.instanceOf(Array),
  }).isRequired,
};

export default Rocket;
