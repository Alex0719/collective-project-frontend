import {
  GET_STUDENT_REQUEST,
  GET_STUDENT_SUCCESS,
  GET_STUDENT_FAILURE,
} from 'constants/student';

export const getStudentRequest = values => ({
  type: GET_STUDENT_REQUEST,
  values,
});

export const getStudentSuccess = response => ({
  type: GET_STUDENT_SUCCESS,
  response,
});

export const getStudentFailure = error => ({
  type: GET_STUDENT_FAILURE,
  error,
});