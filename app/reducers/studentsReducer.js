import { fromJS } from 'immutable';

import {
  UPDATE_STUDENT_FAILURE,
  GET_STUDENT_SUCCESS,
  GET_STUDENT_FAILURE,
} from 'constants/student';

export const initialState = fromJS({
  student: {},
});
const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT_SUCCESS:
      // case UPDATE_STUDENT_SUCCESS:
      return state.merge(fromJS({ student: action.response }));
    case GET_STUDENT_FAILURE:
    case UPDATE_STUDENT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default studentsReducer;
