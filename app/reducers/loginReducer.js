import { fromJS } from 'immutable';

import { LOGIN_SUCCESS, GET_LOGGED_USER } from 'constants/login';

export const initialState = fromJS({
  loggedUser: '',
});

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.merge(fromJS({loggedUser: action.response}));
    default:
      return state;
  }
}

export default loginReducer;
