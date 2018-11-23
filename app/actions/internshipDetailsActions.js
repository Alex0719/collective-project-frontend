import {
  GET_INTERNSHIP_DETAILS_REQUEST,
  GET_INTERNSHIP_DETAILS_SUCCESS,
  GET_INTERNSHIP_DETAILS_FAILURE,
  PUT_INTERNSHIP_DETAILS_REQUEST,
  PUT_INTERNSHIP_DETAILS_SUCCESS,
  PUT_INTERNSHIP_DETAILS_FAILURE,
} from 'constants/internshipDetails';

export const getInternshipDetails = id => ({
  type: GET_INTERNSHIP_DETAILS_REQUEST,
  id,
});
export const getInternshipDetailsSuccess = response => ({
  type: GET_INTERNSHIP_DETAILS_SUCCESS,
  response,
});
export const getInternshipDetailsFailure = message => ({
  type: GET_INTERNSHIP_DETAILS_FAILURE,
  message,
});

export const putInternshipDetails = () => ({
  type: PUT_INTERNSHIP_DETAILS_REQUEST,
});
export const putInternshipDetailsSuccess = response => ({
  type: PUT_INTERNSHIP_DETAILS_SUCCESS,
  response,
});
export const putInternshipDetailsFailure = message => ({
  type: PUT_INTERNSHIP_DETAILS_FAILURE,
  message,
});
