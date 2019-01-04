import {
  GET_DASHBOARD_STATISTICS_REQUEST,
  GET_DASHBOARD_STATISTICS_SUCCESS,
  GET_DASHBOARD_STATISTICS_FAILURE,
  GET_STUDENT_DASHBOARD_COMPANIES_REQUEST,
  GET_STUDENT_DASHBOARD_COMPANIES_SUCCESS,
  GET_STUDENT_DASHBOARD_COMPANIES_FAILURE,
} from 'constants/dashboard';

export const getDashboardStatistics = () => ({
  type: GET_DASHBOARD_STATISTICS_REQUEST,
});

export const getDashboardStatisticsSuccess = response => ({
  type: GET_DASHBOARD_STATISTICS_SUCCESS,
  response,
});

export const getDashboardStatisticsFailure = message => ({
  type: GET_DASHBOARD_STATISTICS_FAILURE,
  message,
});

export const getStudentDashboardCompanies = () => ({
  type: GET_STUDENT_DASHBOARD_COMPANIES_REQUEST
});

export const getStudentDashboardCompaniesSuccess = response => ({
  type: GET_STUDENT_DASHBOARD_COMPANIES_SUCCESS,
  response,
});

export const getStudentDashboardCompaniesFailure = message => ({
  type: GET_STUDENT_DASHBOARD_COMPANIES_FAILURE,
  message,
});