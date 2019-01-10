import { createSelector } from 'reselect';

const selectStudentsPerYear = state =>
  state.getIn(['company', 'studentsPerYear']).toJS();

const selectInternships = state =>
  state.getIn(['company', 'internships']).toJS();

const selectOurRatings = state =>
  state.getIn(['company', 'ratings']).toJS();

const studentsPerYearSelector = () =>
  createSelector(() => selectStudentsPerYear);

const internshipsSelector = () =>
  createSelector(() => selectInternships);

const ourRatingsSelector = () =>
  createSelector(() => selectOurRatings);

export {
  selectStudentsPerYear,
  studentsPerYearSelector,
  internshipsSelector,
  ourRatingsSelector
};
