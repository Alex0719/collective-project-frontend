import {
  GET_STUDENT_REQUEST,
  GET_STUDENT_SUCCESS,
  GET_STUDENT_FAILURE,
  GET_STUDENT_CV_REQUEST,
  GET_STUDENT_CV_SUCCESS,
  GET_STUDENT_CV_FAILURE,
} from 'constants/student';

export const getStudentRequest = () => ({
  type: GET_STUDENT_REQUEST,
});

export const getStudentSuccess = response => ({
  type: GET_STUDENT_SUCCESS,
  response,
});

export const getStudentFailure = error => ({
  type: GET_STUDENT_FAILURE,
  error,
});

export const getStudentCvRequest = (student) => ({
  type: GET_STUDENT_CV_REQUEST,
  student
});

export const getStudentCvSuccess = response => ({
  type: GET_STUDENT_CV_SUCCESS,
  response,
});

export const getStudentCvFailure = error => ({
  type: GET_STUDENT_CV_FAILURE,
  error,
});
