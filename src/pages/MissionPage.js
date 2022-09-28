/* eslint-disable jsx-a11y/control-has-associated-label */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../Redux/Missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, []);

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
          <td> not a member</td>
          <td> join</td>
        </tr>
      ))}
    </table>
  );
};

export default Missions;
