import {
  GET_STUDENT_COUNT_REQUEST,
  GET_STUDENT_COUNT_SUCCESS,
  GET_STUDENT_COUNT_FAILURE,
  GET_COMPANY_COUNT_REQUEST,
  GET_COMPANY_COUNT_SUCCESS,
  GET_COMPANY_COUNT_FAILURE,
  GET_INTERNSHIP_COUNT_REQUEST,
  GET_INTERNSHIP_COUNT_SUCCESS,
  GET_INTERNSHIP_COUNT_FAILURE,
} from 'constants/dashboard';

export const getStudentCount = () => ({
  type: GET_STUDENT_COUNT_REQUEST,
});

export const getStudentCountSuccess = response => ({
  type: GET_STUDENT_COUNT_SUCCESS,
  response,
});

export const getStudentCountFailure = message => ({
  type: GET_STUDENT_COUNT_FAILURE,
  message,
});

export const getCompanyCount = () => ({
  type: GET_COMPANY_COUNT_REQUEST,
});

export const getCompanyCountSuccess = response => ({
  type: GET_COMPANY_COUNT_SUCCESS,
  response,
});

export const getCompanyCountFailure = message => ({
  type: GET_COMPANY_COUNT_FAILURE,
  message,
});

export const getInternshipCount = () => ({
  type: GET_INTERNSHIP_COUNT_REQUEST,
});

export const getInternshipCountSuccess = response => ({
  type: GET_INTERNSHIP_COUNT_SUCCESS,
  response,
});

export const getInternshipCountFailure = message => ({
  type: GET_INTERNSHIP_COUNT_FAILURE,
  message,
});
