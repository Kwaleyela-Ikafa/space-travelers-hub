import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDragons } from '../Redux/dragons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);
  useEffect(() => {
    dispatch(fetchDragons);
  }, []);
  return dragons.map((dragon) => (
    <div key={dragon.id}>
      <div>
        <div><img src={dragon.flickrImages[0]} alt="Dragon-Banner" /></div>
        <div>
          <div>
            <h1>{dragon.name}</h1>
            <p>{dragon.type}</p>
          </div>
          <div><button type="submit">Reserve Dragon</button></div>
        </div>
      </div>
    </div>
  ));
};

export default Dragons;
