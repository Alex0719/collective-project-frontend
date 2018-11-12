import { fromJS } from 'immutable';

import {
  GET_STUDENTS_PER_YEAR_SUCCESS,
  GET_STUDENTS_PER_YEAR_FAILURE
} from 'constants/company';

export const initialState = fromJS({
  studentsPerYear: [],
});
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS_PER_YEAR_SUCCESS:
      return state.set('studentsPerYear', action.response.results);
    case GET_STUDENTS_PER_YEAR_FAILURE:
      console.log(action.message);
      return state;
    default:
      return state;
  }
};

export default testReducer;
