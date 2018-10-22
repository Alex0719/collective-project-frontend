import { fromJS } from 'immutable';

import { GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FAILURE } from 'constants/test';

export const initialState = fromJS({
  countries: [],
});
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS:
      return state.set('countries', action.response.results);
    case GET_COUNTRIES_FAILURE:
      // console.log(action.message);
      return state;
    default:
      return state;
  }
};

export default testReducer;
