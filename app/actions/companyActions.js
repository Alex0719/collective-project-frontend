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
  GET_OUR_RATINGS_REQUEST,
  GET_OUR_RATINGS_SUCCESS,
  GET_OUR_RATINGS_FAILURE
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

export const getInternships = (redirectFunction) => ({
  type: GET_INTERNSHIPS_REQUEST,
  redirectFunction
});

export const getInternshipsSuccess = response => ({
  type: GET_INTERNSHIPS_SUCCESS,
  response,
});

export const getInternshipsFailure = message => ({
  type: GET_INTERNSHIPS_FAILURE,
  message,
});

export const addInternship = (values, fun) => ({
  type: ADD_INTERNSHIP,
  values, fun
});

export const addInternshipSuccess = response => ({
  type: ADD_INTERNSHIP_SUCCESS,
  response,
});

export const addInternshipFailure = message => ({
  type: ADD_INTERNSHIP_FAILURE,
  message,
});

export const getOurRatings = (redirectFunction) => ({
  type: GET_OUR_RATINGS_REQUEST,
  redirectFunction,
});

export const getOurRatingsSuccess = response => ({
  type: GET_OUR_RATINGS_SUCCESS,
  response,
});

export const getOurRatingsFailure = message => ({
  type: GET_OUR_RATINGS_FAILURE,
  message,
});
