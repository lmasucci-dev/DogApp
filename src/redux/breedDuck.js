import {getAllBreeds} from '../services/BreedsService';

const initalState = {
  breeds: [],
};

const GET_BREEDS = 'GET_BREEDS';

export default function breedReducer(state = initalState, action) {
  switch (action.type) {
    case GET_BREEDS:
      return {
        ...state,
        breeds: action.payload,
      };
    default:
      return state;
  }
}

export const getBreedsAction = async (dispatch, getState) => {
  try {
    const res = await getAllBreeds();
    console.log(res)
    dispatch({
      type: GET_BREEDS,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
