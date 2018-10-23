import { takeLatest, call, put } from 'redux-saga/effects';

import { getCountriesSuccess, getCountriesFailure } from 'actions/testActions';
import { GET_COUNTRIES_REQUEST } from 'constants/test';
import request from 'utils/request';

export function* doGetCountries() {
  const requestURL = 'https://api.openaq.org/v1/countries';

  try {
    const countries = yield call(request, requestURL);
    yield put(getCountriesSuccess(countries));
  } catch (err) {
    yield put(getCountriesFailure(err.response));
  }
}

export default function* getCountriesSaga() {
  yield takeLatest(GET_COUNTRIES_REQUEST, doGetCountries);
}
