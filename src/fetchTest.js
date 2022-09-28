

const apiUrl = 'https://api.spacexdata.com/v3/dragons';
// const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';

// const initialState = [];

// const onSuccess = (rockets) => ({
//   type: FETCH_ROCKETS,
//   payload: rockets,
// });

export const fetchRockets = async () => {
 const response = await fetch(apiUrl).then((response) => response.json()).then((data) => data.map((item) => ({
   id: item.id,
   name: item.name,
   type: item.type,
   flickrImages: item.flickr_images[0],
})));
console.log(response);
};

// const rocketReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_ROCKETS: {
//       return action.payload;
//     }
//     default: { return state; }
//   }
// };

fetchRockets();

