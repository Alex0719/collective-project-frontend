import {
    GET_APPLICATIONS_REQUEST,
    GET_APPLICATIONS_SUCCESS,
    GET_APPLICATIONS_FAILURE,
    GET_CV_REQUEST,
    GET_CV_SUCCESS,
    GET_CV_FAILURE,
  } from 'constants/studentManagement';

  export const getApplications = () => ({
    type: GET_APPLICATIONS_REQUEST,
  });
  
  export const getApplicationsSuccess = response => ({
    type: GET_APPLICATIONS_SUCCESS,
    response,
  });
  
  export const getApplicationsFailure = message => ({
    type: GET_APPLICATIONS_FAILURE,
    message,
  });

  export const  getCv = (values, fun) =>  ({
    type: GET_CV_REQUEST,
    values, fun
  });
  
  export const getCvSuccess = response => ({
    type: GET_CV_SUCCESS,
    response,
  });
  
  export const getCvFailure = message => ({
    type: GET_CV_FAILURE,
    message,
  });
  