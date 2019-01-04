import {
    GET_APPLICATIONS_REQUEST,
    GET_APPLICATIONS_SUCCESS,
    GET_APPLICATIONS_FAILURE,
    GET_CV_REQUEST,
    GET_CV_SUCCESS,
    GET_CV_FAILURE,
    SELECT_STUDENT_REQUEST,
    SELECT_STUDENT_SUCCESS,
    SELECT_STUDENT_FAILURE,
    APPROVE_STUDENT_REQUEST,
    APPROVE_STUDENT_SUCCESS,
    APPROVE_STUDENT_FAILURE,
    REJECT_STUDENT_FAILURE,
    REJECT_STUDENT_SUCCESS,
    REJECT_STUDENT_REQUEST,
    GET_AVAILABILITY_FAILURE,
    GET_AVAILABILITY_SUCCESS,
    GET_AVAILABILITY_REQUEST
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
  
  export const selectStudent = (values,fun) =>  ({
    type: SELECT_STUDENT_REQUEST,
    values, fun
  });
  
  export const selectStudentSuccess = response => ({
    type: SELECT_STUDENT_SUCCESS,
    response
  });
  
  export const selectStudentFailure = message => ({
    type: SELECT_STUDENT_FAILURE,
    message,
  });
  
  export const approveStudent = (values, fun) =>  ({
    type:APPROVE_STUDENT_REQUEST,
    values, fun
  });
  
  export const approveStudentSuccess = response => ({
    type:APPROVE_STUDENT_SUCCESS,
    response
  });
  
  export const approveStudentFailure = message => ({
    type: APPROVE_STUDENT_FAILURE,
    message,
  });
   
  export const rejectStudent = (values, fun) =>  ({
    type:REJECT_STUDENT_REQUEST,
    values, fun
  });
  
  export const rejectStudentSuccess = response => ({
    type:REJECT_STUDENT_SUCCESS,
    response,
  });
  
  export const rejectStudentFailure = message => ({
    type: REJECT_STUDENT_FAILURE,
    message,
  });
  export const  getAvailability = (values) =>  ({
    type: GET_AVAILABILITY_REQUEST,
    values
  });
  
  export const getAvailabilitySuccess = response => ({
    type: GET_AVAILABILITY_SUCCESS,
    response,
  });
  
  export const getAvailabilityFailure = message => ({
    type:GET_AVAILABILITY_FAILURE,
    message,
  });