import { createSelector } from 'reselect';

import { selectEntities } from './entitySelector';

export const selectUser = state => state.getIn(['login', 'loggedUser']);

export const selectLoggedUser = () => createSelector(
  () => selectUser);
