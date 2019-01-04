import { createSelector } from 'reselect';

export const selectStudent = state =>
  state.getIn(['studentsReducer', 'student']).toJS();

export const selectUpdateStudent = () => createSelector(() => selectStudent);
