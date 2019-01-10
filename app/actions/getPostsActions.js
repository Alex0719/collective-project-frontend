import {
    GET_POSTS_FOR_INTERNSHIP_REQUEST,
    GET_POSTS_FOR_INTERNSHIP_SUCCESS,
    GET_POSTS_FOR_INTERNSHIP_FAILURE,
  } from 'constants/post';

  export const getPostsForInternship = id => ({
    type: GET_POSTS_FOR_INTERNSHIP_REQUEST,
    id,
  });

  export const getPostsForInternshipSuccess = response => ({
    type: GET_POSTS_FOR_INTERNSHIP_SUCCESS,
    response,
  });

  export const getPostsForInternshipFailure = error => ({
    type: GET_POSTS_FOR_INTERNSHIP_FAILURE,
    error,
  });
