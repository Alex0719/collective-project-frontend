import {
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE
} from 'constants/student';

export const updateStudentRequest = values => {console.log("action",values);return ({
  type: UPDATE_STUDENT_REQUEST,
  values,
})};

export const updateStudentSuccess = response => ({
  type: UPDATE_STUDENT_SUCCESS,
  response,
});

export const updateStudentFailure = error => ({
  type: UPDATE_STUDENT_FAILURE,
  error,
});
