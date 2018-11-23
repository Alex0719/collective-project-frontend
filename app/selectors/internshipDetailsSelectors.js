import { createSelector } from 'reselect';

const selectInternshipDetails = state => state.get(['internshipDetails']);

const internshipDetailsSelector = () =>
  createSelector(() => selectInternshipDetails);

export { selectInternshipDetails, internshipDetailsSelector };
