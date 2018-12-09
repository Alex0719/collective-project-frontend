import { fromJS } from 'immutable';

import {
    GET_POSTS_FOR_INTERNSHIP_SUCCESS,
    GET_POSTS_FOR_INTERNSHIP_FAILURE,
    ADD_POST_FOR_INTERNSHIP_SUCCESS,
    ADD_POST_FOR_INTERNSHIP_FAILURE,
  } from 'constants/post';
  
export const initialState = fromJS({
  posts: []
});
const postsReducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case GET_POSTS_FOR_INTERNSHIP_SUCCESS:
      return state.set('posts', fromJS(action.response.posts));
    case GET_POSTS_FOR_INTERNSHIP_FAILURE:
      console.log(action.message);
      return state;
    case ADD_POST_FOR_INTERNSHIP_SUCCESS:
      return state.set('posts', fromJS(state.toJS().posts.concat(action.response)));
    case ADD_POST_FOR_INTERNSHIP_FAILURE:
      console.log(action.message);
      return state;
    default:
      return state;
  }
};

export default postsReducer;
