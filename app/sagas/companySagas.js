import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getStudentsPerYearSuccess,
  getStudentsPerYearFailure
} from 'actions/companyActions';
import { GET_STUDENTS_PER_YEAR_REQUEST } from 'constants/company';
import request from 'utils/request';

export function* doGetStudentsPerYear() {
  const requestURL = 'https://localhost:44340/statistics/evolution';

  try {
    const data = yield call(request, requestURL);
    yield put(getStudentsPerYearSuccess(data));
  } catch (err) {
    yield put(getStudentsPerYearFailure(err.response));
  }
}

export default function* getStudentsPerYearSaga() {
  yield takeLatest(GET_STUDENTS_PER_YEAR_REQUEST, doGetStudentsPerYear);
}
