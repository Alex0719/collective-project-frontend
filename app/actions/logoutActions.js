import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from 'constants/logout';

export const logoutUser = (postLogout) => ({
  type: LOGOUT_REQUEST,
  postLogout,
});

export const userLoggedOut = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutUserFailed = error => ({
  type: LOGOUT_FAILURE,
  error,
});
