import {
  GET_INTERNSHIP_DETAILS_REQUEST,
  GET_INTERNSHIP_DETAILS_SUCCESS,
  GET_INTERNSHIP_DETAILS_FAILURE,

  GET_INTERNSHIP_TESTIMONIALS_REQUEST,
  GET_INTERNSHIP_TESTIMONIALS_SUCCESS,
  GET_INTERNSHIP_TESTIMONIALS_FAILURE,

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

export const getInternshipTestimonials = id => ({
  type: GET_INTERNSHIP_TESTIMONIALS_REQUEST,
  id,
});
export const getInternshipTestimonialsSuccess = response => ({
  type: GET_INTERNSHIP_TESTIMONIALS_SUCCESS,
  response,
});
export const getInternshipTestimonialsFailure = message => ({
  type: GET_INTERNSHIP_TESTIMONIALS_FAILURE,
  message,
});

export const putInternshipDetails = (id,obj) => ({
  type: PUT_INTERNSHIP_DETAILS_REQUEST,
  id,
  obj,
});
export const putInternshipDetailsSuccess = response => ({
  type: PUT_INTERNSHIP_DETAILS_SUCCESS,
  response,
});
export const putInternshipDetailsFailure = message => ({
  type: PUT_INTERNSHIP_DETAILS_FAILURE,
  message,
});
