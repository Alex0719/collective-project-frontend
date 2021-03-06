import { fromJS } from 'immutable';

import {
  GET_APPLICATIONS_SUCCESS,
  GET_APPLICATIONS_FAILURE,
  GET_CV_FAILURE,
  GET_CV_SUCCESS,
  SELECT_STUDENT_SUCCESS,
  SELECT_STUDENT_FAILURE,
  GET_AVAILABILITY_SUCCESS,
} from 'constants/studentManagement';

export const initialState = fromJS({
  applications: {},
  cv: {},
  availability: {},
});
const studentManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APPLICATIONS_SUCCESS:
      return state.merge(
        fromJS({ applications: action.response.Applications }),
      );
    case GET_CV_SUCCESS:
      return state.merge(fromJS({ cv: action.response }));
    case GET_AVAILABILITY_SUCCESS:
      return state.merge(fromJS({ availability: action.response }));
    case GET_APPLICATIONS_FAILURE:
      return state;
    case GET_CV_FAILURE:
      return state;
    default:
      return state;
  }
};

export default studentManagementReducer;
