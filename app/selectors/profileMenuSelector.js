import { createSelector } from 'reselect';

export const selectUser = state => state.getIn(['loggedUser']).toJS();

export const selectLoggedUser = () => createSelector(() => selectUser);
