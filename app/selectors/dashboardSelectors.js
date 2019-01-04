import { createSelector } from 'reselect';

// dashboard
const selectDashboardStatistics = state => state.getIn(['dashboard', 'statistics']);

const dashboardStatisticsSelector = () => createSelector(() => selectDashboardStatistics);

// student dashboard
const selectStudentDashboardCompanies = state => state.getIn(['studentDashboard', 'companies']);

const studentDashboardSelector = () => createSelector(() => selectStudentDashboardCompanies);

export {
  selectDashboardStatistics,
  dashboardStatisticsSelector,
  selectStudentDashboardCompanies,
  studentDashboardSelector
};
