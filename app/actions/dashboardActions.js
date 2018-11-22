import {
  GET_DASHBOARD_STATISTICS_REQUEST,
  GET_DASHBOARD_STATISTICS_SUCCESS,
  GET_DASHBOARD_STATISTICS_FAILURE,
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
