const apiUrl = 'https://api.spacexdata.com/v3/dragons';
const FETCH_DRAGONS = 'dragons/FETCH_DRAGONS';

const initialState = [];

const dragonReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_DRAGONS: {
      return action.payload;
    }
    default: { return state; }
  }
};

const onSuccess = (dragons) => ({
  type: FETCH_DRAGONS,
  payload: dragons,
});

export const fetchDragons = async (dispatch) => {
  const response = await fetch(apiUrl).then((response) => response.json())
    .then((data) => data.map((item) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      flickrImages: item.flickr_images,
    })));
  dispatch(onSuccess(response));
};

export default dragonReducer;
