import { createSelector } from 'reselect';

const selectDashboardStatistics = state => state.getIn(['dashboard', 'statistics']);

const dashboardStatisticsSelector = () => createSelector(() => selectDashboardStatistics);

export {
  selectDashboardStatistics,
  dashboardStatisticsSelector
};
