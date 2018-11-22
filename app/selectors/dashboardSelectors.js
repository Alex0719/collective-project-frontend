import { createSelector } from 'reselect';

const selectStudentCount = state => state.getIn(['dashboard', 'studentCount']);

const studentCountSelector = () => createSelector(() => selectStudentCount);

const selectCompanyCount = state => state.getIn(['dashboard', 'companyCount']);

const companyCountSelector = () => createSelector(() => selectCompanyCount);

const selectInternshipCount = state =>
  state.getIn(['dashboard', 'internshipCount']);

const internshipCountSelector = () =>
  createSelector(() => selectInternshipCount);

export {
  selectStudentCount,
  studentCountSelector,
  selectCompanyCount,
  companyCountSelector,
  selectInternshipCount,
  internshipCountSelector,
};
