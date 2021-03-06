import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_LOGGED_USER,
} from 'constants/login';

export const getLoggedUser = () => ({
  type: GET_LOGGED_USER,
});

export const loginUser = (values,funAlert) => ({
  type: LOGIN_REQUEST,
  values,funAlert
});

export const userLogged = response => ({
  type: LOGIN_SUCCESS,
  response,
});

export const loginUserFailed = error => ({
  type: LOGIN_FAILURE,
  error,
});
