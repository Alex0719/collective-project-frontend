import { createSelector } from 'reselect';

const selectCountries = state => state.getIn(['test', 'countries']);

const countriesSelector = () => createSelector(() => selectCountries);

export { selectCountries, countriesSelector };
