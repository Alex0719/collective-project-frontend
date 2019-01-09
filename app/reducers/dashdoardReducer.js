import { fromJS } from 'immutable';

import {
  GET_DASHBOARD_STATISTICS_SUCCESS,
  GET_DASHBOARD_STATISTICS_FAILURE,
} from 'constants/dashboard';

export const initialState = fromJS({
  statistics: {},
});
const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_STATISTICS_SUCCESS:
      return state.set('statistics', action.response);
    case GET_DASHBOARD_STATISTICS_FAILURE:
      return state;
    default:
      return state;
  }
};

export default dashboardReducer;
