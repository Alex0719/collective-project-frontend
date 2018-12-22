import {
  GET_STUDENTS_PER_YEAR_REQUEST,
  GET_STUDENTS_PER_YEAR_SUCCESS,
  GET_STUDENTS_PER_YEAR_FAILURE,
  GET_INTERNSHIPS_REQUEST,
  GET_INTERNSHIPS_SUCCESS,
  GET_INTERNSHIPS_FAILURE,
  ADD_INTERNSHIP,
  ADD_INTERNSHIP_SUCCESS,
  ADD_INTERNSHIP_FAILURE,
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

export const getInternships = () => ({
  type: GET_INTERNSHIPS_REQUEST,
});

export const getInternshipsSuccess = response => ({
  type: GET_INTERNSHIPS_SUCCESS,
  response,
});

export const getInternshipsFailure = message => ({
  type: GET_INTERNSHIPS_FAILURE,
  message,
});

export const addInternship = values => ({
  type: ADD_INTERNSHIP,
  values,
});

export const addInternshipSuccess = response => ({
  type: ADD_INTERNSHIP_SUCCESS,
  response,
});

export const addInternshipFailure = message => ({
  type: ADD_INTERNSHIP_FAILURE,
  message,
});
