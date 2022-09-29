import { React } from 'react';
import { useSelector } from 'react-redux';

const MyDragons = () => {
  const dragons = useSelector((state) => state.dragons).filter(
    (dragon) => dragon.reserved === true,
  );

  if (dragons.length === 0) {
    return (
      <>
        <div>
          <h1>My Dragons:</h1>
          <p>You have no dragons reserved</p>
        </div>
      </>
    );
  }
  return (
    <div>
      <h1>My Dragons:</h1>
      {dragons.map((dragon) => (
        <p key={dragon.id}>
          {dragon.name}
        </p>
      ))}
    </div>
  );
};

export default MyDragons;
