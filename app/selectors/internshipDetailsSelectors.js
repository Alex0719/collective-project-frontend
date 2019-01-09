import { createSelector } from 'reselect';

const selectInternshipDetails = state =>state.get('internshipDetails').toJS() || null;

const internshipDetailsSelector = () =>
  createSelector(() => selectInternshipDetails);

export { selectInternshipDetails, internshipDetailsSelector };
