import { fromJS } from 'immutable';

import {
  GET_STUDENTS_PER_YEAR_SUCCESS,
  GET_STUDENTS_PER_YEAR_FAILURE,
  GET_INTERNSHIPS_SUCCESS,
  ADD_INTERNSHIP_SUCCESS,
  GET_INTERNSHIPS_FAILURE,
} from 'constants/company';

export const initialState = fromJS({
  studentsPerYear: [],
  internships: [],
});
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS_PER_YEAR_SUCCESS:
      return state.set('studentsPerYear', action.response.results);
    case GET_INTERNSHIPS_SUCCESS:
      return state.set('internships', fromJS(action.response));
    case ADD_INTERNSHIP_SUCCESS:
      return state.set('internships', fromJS(state.toJS().internships.concat(action.response)));
    case GET_STUDENTS_PER_YEAR_FAILURE:
      return state;
    case GET_INTERNSHIPS_FAILURE:
      return state;
    default:
      return state;
  }
};

export default testReducer;
