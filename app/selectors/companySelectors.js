import { createSelector } from 'reselect';

const selectStudentsPerYear = state =>
  state.getIn(['company', 'studentsPerYear']);

const selectInternships = state =>
  state.getIn(['company', 'internships']);

const studentsPerYearSelector = () =>
  createSelector(() => selectStudentsPerYear);

const internshipsSelector = () =>
  createSelector(() => selectInternships);

export { selectStudentsPerYear, studentsPerYearSelector, internshipsSelector };
