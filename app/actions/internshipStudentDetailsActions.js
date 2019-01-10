import {
  WAS_PARTICIPANT_REQUEST,
  WAS_PARTICIPANT_FAILURE,
  WAS_PARTICIPANT_SUCCESS,
  UPDATE_RATING_REQUEST,
  UPDATE_RATING_SUCCESS,
  UPDATE_RATING_FAILURE,
  ADD_TESTIMONIAL_REQUEST,
  ADD_TESTIMONIAL_FAILURE,
  ADD_TESTIMONIAL_SUCCESS,
} from 'constants/internshipStudentDetails';

export const wasParticipant = id => ({
  type: WAS_PARTICIPANT_REQUEST,
  id
});

export const wasParticipantSuccess = response => ({
  type: WAS_PARTICIPANT_SUCCESS,
  response,
});

export const wasParticipantFailure = message => ({
  type: WAS_PARTICIPANT_FAILURE,
  message,
});

export const updateRating = (ratings, id) => ({
  type: UPDATE_RATING_REQUEST,
  ratings,
  id,
});

export const updateRatingSuccess = response => ({
  type: UPDATE_RATING_SUCCESS,
  response,
});

export const updateRatingFailure = message => ({
  type: UPDATE_RATING_FAILURE,
  message,
});

export const addTestimonial = (testimonial, id) => ({
  type: ADD_TESTIMONIAL_REQUEST,
  testimonial,
  id,
});

export const addTestimonialSuccess = response => ({
  type: ADD_TESTIMONIAL_SUCCESS,
  response,
});

export const addTestimonialFailure = message => ({
  type: ADD_TESTIMONIAL_FAILURE,
  message,
});
