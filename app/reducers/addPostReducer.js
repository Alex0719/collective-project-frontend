import { fromJS } from 'immutable';

import {
    ADD_POST_FOR_INTERNSHIP_SUCCESS,
    ADD_POST_FOR_INTERNSHIP_FAILURE
} from 'constants/post';

export const initialState = fromJS({
    addedPost:{}
});

const addPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_FOR_INTERNSHIP_SUCCESS:
    return state.set('addedPost', action.response);
    case ADD_POST_FOR_INTERNSHIP_FAILURE:
      console.log(action.message);
      return state;
    default:
      return state;
  }
};

export default addPostReducer;
