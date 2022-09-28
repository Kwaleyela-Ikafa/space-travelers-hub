import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRockets, ChangeStatus } from '../Redux/Rockets/Rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleChangeBtn = (id) => {
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
            <div>
              {rocket.reserved && (
              <badge className="bg-blue-500 p-1 text-white rounded-sm pr-3 pl-3">Reserved</badge>
              )}
              <p>
                {rocket.description}
              </p>
            </div>

          </div>
          <div>
            {rocket.reserved
              ? (
                <button
                  onClick={() => handleChangeBtn(rocket.id)}
                  type="button"
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  onClick={() => handleChangeBtn(rocket.id)}
                  type="button"
                >
                  Reserve Rocket
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    reserved: PropTypes.bool,
    description: PropTypes.string,
    flickrImages: PropTypes.instanceOf(Array),
  }).isRequired,
};

export default Rocket;
