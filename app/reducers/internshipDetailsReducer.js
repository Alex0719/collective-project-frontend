import { fromJS } from 'immutable';

import {
  GET_INTERNSHIP_DETAILS_SUCCESS,
  GET_INTERNSHIP_DETAILS_FAILURE,
} from 'constants/internshipDetails';

import {
  GET_INTERNSHIP_TESTIMONIALS_SUCCESS,
  GET_INTERNSHIP_TESTIMONIALS_FAILURE,
} from 'constants/internshipDetails';

import {
  PUT_INTERNSHIP_DETAILS_SUCCESS,
  PUT_INTERNSHIP_DETAILS_FAILURE,
} from 'constants/internshipDetails';

export const initialState = fromJS({
  internship: {},
  ratingCompany: 0,
  ratingInternship: 0,
  ratingMentors: 0,
  testimonials: [],
  updatedSuccessfully: false,
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
    })
    case GET_INTERNSHIP_DETAILS_FAILURE:
    case GET_INTERNSHIP_TESTIMONIALS_FAILURE:
    case PUT_INTERNSHIP_DETAILS_FAILURE:
      return state;
    default:
      return state;
  }
};

export default internshipDetailsReducer;
