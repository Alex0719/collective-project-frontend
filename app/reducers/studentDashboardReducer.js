import { fromJS } from 'immutable';

import {
  GET_STUDENT_DASHBOARD_COMPANIES_SUCCESS,
  GET_STUDENT_DASHBOARD_COMPANIES_FAILURE,
} from 'constants/dashboard';

export const initialState = fromJS({
  companies: [],
});
const studentDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT_DASHBOARD_COMPANIES_SUCCESS:
      return state.set('companies', action.response);
    case GET_STUDENT_DASHBOARD_COMPANIES_FAILURE:
      return state;
    default:
      return state;
  }
};

export default studentDashboardReducer;
