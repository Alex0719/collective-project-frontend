import { createSelector } from 'reselect';

const selectStudentsPerYear = state =>
  state.getIn(['company', 'studentsPerYear']);

const studentsPerYearSelector = () =>
  createSelector(() => selectStudentsPerYear);

export { selectStudentsPerYear, studentsPerYearSelector };
