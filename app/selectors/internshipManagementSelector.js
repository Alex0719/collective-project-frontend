import { createSelector } from 'reselect';

export const selectInternshipsForStudent = state => state.getIn(['internshipManagement', 'internships']).toJS();

export const internshipManagementSelector = () => createSelector(() => selectInternshipsForStudent);
