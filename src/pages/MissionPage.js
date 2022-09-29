/* eslint-disable jsx-a11y/control-has-associated-label */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../Redux/Missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, []);
  const buttonHandler = (id) => {
    dispatch({
      type: 'change',
      id,
    });
  };
  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Statue</th>
        <th />

      </tr>
      {missions.map((mission) => (
        <tr key={mission.mission_id}>
          <th>{mission.mission_name}</th>
          <td>{mission.description}</td>
          <td>
            {' '}
            {mission.active ? 'Active Member' : 'NOT A MEMBER'}
          </td>
          <td>
            {mission.active
              ? (
                <button
                  onClick={() => buttonHandler(mission.mission_id)}
                  type="button"
                >
                  Leave Mission
                </button>
              ) : (
                <button
                  onClick={() => buttonHandler(mission.mission_id)}
                  type="button"
                >
                  Join Mission
                </button>
              )}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Missions;
