/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import loginReducer from 'reducers/loginReducer';
import companyReducer from 'reducers/companyReducer';
import dashboardReducer from './reducers/dashdoardReducer';
import studentManagementReducer from './reducers/studentManagementReducer';
import postsReducer from './reducers/postsReducers';
import studentDashboardReducer from './reducers/studentDashboardReducer';
import internshipManagementReducer from './reducers/internshipManagementReducer';
import studentsReducer from './reducers/studentsReducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    // test: testReducer,
    loggedUser: loginReducer,
    company: companyReducer,
    dashboard: dashboardReducer,
    studentDashboard: studentDashboardReducer,
    studentManagement: studentManagementReducer,
    internshipManagement: internshipManagementReducer,
    postsReducer: postsReducer,
    studentsReducer: studentsReducer,
    ...injectedReducers,
  });
}
