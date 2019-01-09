import { createSelector } from 'reselect';

const selectStudentsPerYear = state =>
  state.getIn(['company', 'studentsPerYear']).toJS();

const selectInternships = state =>
  state.getIn(['company', 'internships']).toJS();

const studentsPerYearSelector = () =>
  createSelector(() => selectStudentsPerYear);

const internshipsSelector = () =>
  createSelector(() => selectInternships);

export { selectStudentsPerYear, studentsPerYearSelector, internshipsSelector };
