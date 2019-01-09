import { fromJS } from 'immutable';

import {
  GET_INTERNSHIPS_FOR_STUDENT_SUCCESS,
  GET_INTERNSHIPS_FOR_STUDENT_FAILURE,
} from 'constants/internshipManagement';

export const initialState = fromJS({
  internships: {},
});

const internshipManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INTERNSHIPS_FOR_STUDENT_SUCCESS:
      return state.merge(fromJS({ internships: action.response.Internships }));
    case GET_INTERNSHIPS_FOR_STUDENT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default internshipManagementReducer;
