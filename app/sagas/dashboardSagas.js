import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getStudentCountSuccess,
  getStudentCountFailure,
  getCompanyCountSuccess,
  getCompanyCountFailure,
  getInternshipCountSuccess,
  getInternshipCountFailure,
} from 'actions/dashboardActions';
import {
  GET_STUDENT_COUNT_REQUEST,
  GET_COMPANY_COUNT_REQUEST,
  GET_INTERNSHIP_COUNT_REQUEST,
} from 'constants/dashboard';

import request from 'utils/request';

export function* getStudentCount() {
  const requestURL = 'https://localhost:44340/students';

  try {
    const data = yield call(request, requestURL);
    yield put(getStudentCountSuccess(data.length));
  } catch (err) {
    yield put(getStudentCountFailure(err.response));
  }
}

export function* getCompanyCount() {
  const requestURL = 'https://localhost:44340/companies';

  try {
    const data = yield call(request, requestURL);
    yield put(getCompanyCountSuccess(data.length));
  } catch (err) {
    yield put(getCompanyCountFailure(err.response));
  }
}

export function* getInternshipCount() {
  const requestURL = 'https://localhost:44340/internships';

  try {
    const data = yield call(request, requestURL);
    yield put(getInternshipCountSuccess(data.length));
  } catch (err) {
    yield put(getInternshipCountFailure(err.response));
  }
}

export function* getStudentCountSaga() {
  yield takeLatest(GET_STUDENT_COUNT_REQUEST, getStudentCount);
}

export function* getCompanyCountSaga() {
  yield takeLatest(GET_COMPANY_COUNT_REQUEST, getCompanyCount);
}

export function* getInternshipCountSaga() {
  yield takeLatest(GET_INTERNSHIP_COUNT_REQUEST, getInternshipCount);
}
