import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getStudentsPerYearSuccess,
  getStudentsPerYearFailure,
  getInternshipsSuccess,
  getInternshipsFailure
} from 'actions/companyActions';
import {
  GET_STUDENTS_PER_YEAR_REQUEST,
  GET_INTERNSHIPS_REQUEST
} from 'constants/company';
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

export function* getStudentsPerYearSaga() {
  yield takeLatest(GET_STUDENTS_PER_YEAR_REQUEST, doGetStudentsPerYear);
}

export function* doGetInternships() {
  const requestURL = 'https://localhost:44340/internships';

  try {
    const data = yield call(request, requestURL);
    yield put(getInternshipsSuccess(data));
  } catch (err) {
    yield put(getStudentsPerYearFailure(err.response));
  }
}

export function* getInternshipsSaga() {
  yield takeLatest(GET_INTERNSHIPS_REQUEST, doGetInternships);
}
