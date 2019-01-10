import { fromJS } from 'immutable';

import {
  GET_INTERNSHIP_DETAILS_SUCCESS,
  GET_INTERNSHIP_DETAILS_FAILURE,
  GET_INTERNSHIP_TESTIMONIALS_SUCCESS,
  GET_INTERNSHIP_TESTIMONIALS_FAILURE,
  PUT_INTERNSHIP_DETAILS_SUCCESS,
  PUT_INTERNSHIP_DETAILS_FAILURE,
} from 'constants/internshipDetails';

import {
  WAS_PARTICIPANT_FAILURE,
  WAS_PARTICIPANT_SUCCESS,
  UPDATE_RATING_SUCCESS,
  UPDATE_RATING_FAILURE,
  ADD_TESTIMONIAL_FAILURE,
  ADD_TESTIMONIAL_SUCCESS,
} from 'constants/internshipStudentDetails';

export const initialState = fromJS({
  internship: {},
  ratingCompany: 0,
  ratingInternship: 0,
  ratingMentors: 0,
  testimonials: [],
  updatedSuccessfully: false,
  wasParticipant: false,
});

const internshipDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INTERNSHIP_DETAILS_SUCCESS:
      return state.merge(fromJS({
        internship: action.response.internship,
        ratingCompany: action.response.ratingCompany,
        ratingInternship: action.response.ratingInternship,
        ratingMentors: action.response.ratingMentors,
      }));
    case GET_INTERNSHIP_TESTIMONIALS_SUCCESS:
      return state.merge(fromJS({
        testimonials: action.response.testimonials,
      }))
    case PUT_INTERNSHIP_DETAILS_SUCCESS:
    return state.merge({
      updatedSuccessfully: true,
    });
    case ADD_TESTIMONIAL_SUCCESS:
      return state.merge({
        testimonials: action.response.testimonials,
      });
    case UPDATE_RATING_SUCCESS:
      return state.merge({
        ratingInternship: action.response.ratingInternship,
        ratingMentors: action.response.ratingMentors,
        ratingCompany: action.response.ratingCompany,
      });
    case WAS_PARTICIPANT_SUCCESS:
      return state.merge({ wasParticipant: action.response.wasParticipant });
    case GET_INTERNSHIP_DETAILS_FAILURE:
    case GET_INTERNSHIP_TESTIMONIALS_FAILURE:
    case PUT_INTERNSHIP_DETAILS_FAILURE:
    case WAS_PARTICIPANT_FAILURE:
    case UPDATE_RATING_FAILURE:
    case ADD_TESTIMONIAL_FAILURE:
      return state;
    default:
      return state;
  }
};

export default internshipDetailsReducer;
