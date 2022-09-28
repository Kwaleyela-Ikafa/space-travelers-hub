import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveDragon, cancelDragon } from '../Redux/dragons/dragons';

const Dragon = ({ dragon }) => {
  const dispatch = useDispatch();
  let reserveWord;

  if (dragon.reserved) reserveWord = 'Cancel';
  else reserveWord = 'Reserve';

  const reserveOrCancel = (e) => {
    e.preventDefault();
    if (dragon.reserved) dispatch(cancelDragon(dragon.id));
    else dispatch(reserveDragon(dragon.id));
  };

  return (
    <div>
      <div>
        <div><img src={dragon.flickrImages} alt="Rocket-Banner" /></div>
        <div>
          <div>
            <h1>{dragon.name}</h1>
            <p>{dragon.type}</p>
          </div>
          <div><button type="submit" onClick={reserveOrCancel}>{reserveWord}</button></div>
        </div>
      </div>
    </div>
  );
};

Dragon.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    flickrImages: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Dragon;
