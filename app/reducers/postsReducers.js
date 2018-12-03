import { fromJS } from 'immutable';

import {
    GET_POSTS_FOR_INTERNSHIP_SUCCESS,
    GET_POSTS_FOR_INTERNSHIP_FAILURE,
  } from 'constants/post';
  
export const initialState = fromJS({
  posts: {}
});
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_FOR_INTERNSHIP_SUCCESS:
      return state.set('posts', action.response.posts);
    case GET_POSTS_FOR_INTERNSHIP_FAILURE:
      console.log(action.message);
      return state;
    default:
      return state;
  }
};

export default postsReducer;
