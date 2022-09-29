import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveDragon, cancelDragon } from '../Redux/dragons/dragons';

const Dragon = ({ dragon }) => {
  const dispatch = useDispatch();
  let reserveWord;

  if (dragon.reserved) reserveWord = 'Cancel Dragon';
  else reserveWord = 'Reserve Dragon';

  const reserveOrCancel = (e) => {
    e.preventDefault();
    if (dragon.reserved) dispatch(cancelDragon(dragon.id));
    else dispatch(reserveDragon(dragon.id));
  };

  return (
    <div className="Container">
      <img src={dragon.flickrImages} alt="Rocket-Banner" />
      <div className="Content">
        <h1 className="type">{dragon.name}</h1>
        <div>{dragon.type}</div>
        <p>
          {dragon.reserved && (<span className="badge">Reserved</span>)}
          {dragon.description}
        </p>
        <div>
          <button type="submit" onClick={reserveOrCancel}>{reserveWord}</button>
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
    description: PropTypes.string,
    flickrImages: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Dragon;
