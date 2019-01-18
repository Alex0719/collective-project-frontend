import {
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_REQUEST
  } from 'constants/student';

  export const registerRequest = (values) => ({
    type: REGISTER_REQUEST,
    values
  });

  export const registerSuccess = response => ({
    type: REGISTER_SUCCESS,
    response,
  });

  export const registerFailure = message => ({
    type: REGISTER_FAILURE,
    message,
  });