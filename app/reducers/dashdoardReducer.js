import { fromJS } from 'immutable';

import {
  GET_STUDENT_COUNT_SUCCESS,
  GET_STUDENT_COUNT_FAILURE,
  GET_COMPANY_COUNT_SUCCESS,
  GET_COMPANY_COUNT_FAILURE,
} from 'constants/dashboard';
import {
  GET_INTERNSHIP_COUNT_SUCCESS,
  GET_INTERNSHIP_COUNT_FAILURE,
} from '../constants/dashboard';

export const initialState = fromJS({
  studentCount: null,
});
const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT_COUNT_SUCCESS:
      return state.set('studentCount', action.response);
    case GET_STUDENT_COUNT_FAILURE:
      console.log(action.message);
      return state;
    case GET_COMPANY_COUNT_SUCCESS:
      return state.set('companyCount', action.response);
    case GET_COMPANY_COUNT_FAILURE:
      console.log(action.message);
      return state;
    case GET_INTERNSHIP_COUNT_SUCCESS:
      return state.set('internshipCount', action.response);
    case GET_INTERNSHIP_COUNT_FAILURE:
      console.log(action.message);
      return state;
    default:
      return state;
  }
};

export default dashboardReducer;
