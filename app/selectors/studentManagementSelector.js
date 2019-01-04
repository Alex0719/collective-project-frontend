import { createSelector } from 'reselect';

export const selectApplications = state => state.getIn(['studentManagement']).toJS();

export const studentManagementSelector = () => createSelector(() => selectApplications);
