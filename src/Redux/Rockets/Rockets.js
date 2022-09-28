import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';

const initialState = [];

const onSuccess = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: rockets,
});

export const fetchRockets = async (dispatch) => {
  const response = await axios.get(apiUrl);
  const fetchedData = response.data.map((item) => ({
    id: item.id,
    name: item.rocket_name,
    description: item.description,
    flickrImages: item.flickr_images,
  }));
  dispatch(onSuccess(fetchedData));
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS: {
      return action.payload;
    }
    default: { return state; }
  }
};

export default rocketReducer;
