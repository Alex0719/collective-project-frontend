import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
} from 'constants/test';

export const getCountries = () => ({
  type: GET_COUNTRIES_REQUEST,
});

export const getCountriesSuccess = response => ({
  type: GET_COUNTRIES_SUCCESS,
  response,
});

export const getCountriesFailure = message => ({
  type: GET_COUNTRIES_FAILURE,
  message,
});
