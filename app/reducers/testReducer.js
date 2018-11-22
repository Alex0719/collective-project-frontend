import { fromJS } from 'immutable';

import { GET_COUNTRIES_SUCCESS } from 'constants/test';

export const initialState = fromJS({
  countries: [],
});
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS:
      return state.set('countries', action.response.results);
    default:
      return state;
  }
};

export default testReducer;
