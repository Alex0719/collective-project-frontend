import { ROLE_REQUEST, ROLE_SUCCESS, ROLE_FAILURE } from 'constants/role';

export const requestRole = () => ({
  type: ROLE_REQUEST,
});

export const roleSuccess = response => ({
  type: ROLE_SUCCESS,
  response,
});

export const roleFailed = error => ({
  type: ROLE_FAILURE,
  error,
});
