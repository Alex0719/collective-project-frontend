import {
    ADD_POST_FOR_INTERNSHIP_REQUEST,
    ADD_POST_FOR_INTERNSHIP_SUCCESS,
    ADD_POST_FOR_INTERNSHIP_FAILURE
  } from 'constants/post';

  export const addPostForInternshipRequest = (values,fun,id) => ({
    type: ADD_POST_FOR_INTERNSHIP_REQUEST,
    values,
    fun,
    id,
  });

  export const addPostForInternshipSuccess = response => ({
    type: ADD_POST_FOR_INTERNSHIP_SUCCESS,
    response,
  });

  export const addPostForInternshipFailure = error => ({
    type: ADD_POST_FOR_INTERNSHIP_FAILURE,
    error,
  });
