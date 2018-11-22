import { fromJS } from 'immutable';

import { LOGIN_SUCCESS, LOGIN_REQUEST } from 'constants/login';
import { ROLE_SUCCESS } from 'constants/role';

export const initialState = fromJS({
  email: '',
  role: '',
});

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.merge(fromJS({ email: action.values.email }));
    case LOGIN_SUCCESS:
    case ROLE_SUCCESS:
      return state.merge(fromJS({ role: action.response.role }));
    default:
      return state;
  }
};

export default loginReducer;
