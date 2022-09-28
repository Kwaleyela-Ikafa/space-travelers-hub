const apiUrl = 'https://api.spacexdata.com/v3/dragons';
const FETCH_DRAGONS = 'dragons/FETCH_DRAGONS';
const RESERVE_DRAGON = 'dragons/RESERVE_DRAGON';
const CANCEL_DRAGON = 'dragons/CANCEL_DRAGON';

const initialState = [];

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRAGONS:
      return action.payload;
    case RESERVE_DRAGON: {
      const newState = state.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: true };
      });
      return newState;
    }
    case CANCEL_DRAGON: {
      const newState = state.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: false };
      });
      return newState;
    }
    default: { return state; }
  }
};

const onSuccess = (dragons) => ({
  type: FETCH_DRAGONS,
  payload: dragons,
});

export const reserveDragon = (dragonId) => ({
  type: RESERVE_DRAGON,
  payload: dragonId,
});

export const cancelDragon = (dragonId) => ({
  type: CANCEL_DRAGON,
  payload: dragonId,
});

export const fetchDragons = async (dispatch) => {
  const response = await fetch(apiUrl).then((response) => response.json())
    .then((data) => data.map((item) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      flickrImages: item.flickr_images[0],
    })));
  dispatch(onSuccess(response));
};

export default dragonReducer;
