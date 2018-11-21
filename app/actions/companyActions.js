import {
  GET_STUDENTS_PER_YEAR_REQUEST,
  GET_STUDENTS_PER_YEAR_SUCCESS,
  GET_STUDENTS_PER_YEAR_FAILURE,
} from 'constants/company';

export const getStudentsPerYear = () => ({
  type: GET_STUDENTS_PER_YEAR_REQUEST,
});

export const getStudentsPerYearSuccess = response => ({
  type: GET_STUDENTS_PER_YEAR_SUCCESS,
  response,
});

export const getStudentsPerYearFailure = message => ({
  type: GET_STUDENTS_PER_YEAR_FAILURE,
  message,
});
