import { fromJS } from 'immutable';

import {
  GET_INTERNSHIP_DETAILS_SUCCESS,
  GET_INTERNSHIP_DETAILS_FAILURE,
} from 'constants/internshipDetails';

export const initialState = fromJS({
  details: {},
});

const internshipDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INTERNSHIP_DETAILS_SUCCESS:
      console.log(`reducer: ${action.response}`);
      return state.set('internshipDetails', action.response);
    case GET_INTERNSHIP_DETAILS_FAILURE:
      console.log(action.message);
      return state;
    default:
      return state;
  }
};

export default internshipDetailsReducer;
