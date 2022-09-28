import axios from 'axios';

const missinsAPI = 'https://api.spacexdata.com/v3/missions';
const FETCH_MISSIONS = 'FETCH_MISSIONS';
const initialState = [];

export const fetchMissions = () => async (dispatch) => {
  const response = await axios.get(missinsAPI);
  return dispatch({
    type: FETCH_MISSIONS,
    payload: response.data,
  });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload.map((mission) => (
        {
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          active: false,
        }));

    default:
      return state;
  }
};
export default missionsReducer;
