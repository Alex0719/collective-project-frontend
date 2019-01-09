import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getDashboardStatisticsSuccess,
  getDashboardStatisticsFailure,
  getStudentDashboardCompaniesSuccess,
  getStudentDashboardCompaniesFailure,
  subscribeStudentSuccess,
  subscribeStudentFailure,
} from 'actions/dashboardActions';
import {
  GET_DASHBOARD_STATISTICS_REQUEST,
  GET_STUDENT_DASHBOARD_COMPANIES_REQUEST,
  SUBSCRIBE_STUDENT_REQUEST,
  UNSUBSCRIBE_STUDENT_REQUEST
} from 'constants/dashboard';

import request from 'utils/request';

export function* getDashboardStatistics() {
  const requestURL = 'https://localhost:44340/statistics/general';

  try {
    const data = yield call(request, requestURL);
    yield put(getDashboardStatisticsSuccess(data));
  } catch (err) {
    yield put(getDashboardStatisticsFailure(err.response));
  }
}

export function* getDashboardStatisticsSaga() {
  yield takeLatest(GET_DASHBOARD_STATISTICS_REQUEST, getDashboardStatistics);
}

export function* getStudentDashboardCompanies() {
  const requestURL = 'https://localhost:44340/companies/subscriptions';
  let options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'GET'
  };
  try {
    const data = yield call(request, requestURL, options);
    console.table(data);
    yield put(getStudentDashboardCompaniesSuccess(data));
  } catch (err) {
    console.log("err", err);
    yield put(getStudentDashboardCompaniesFailure(err.response));
  }
}

export function* getStudentDashboardCompaniesSaga() {
  yield takeLatest(GET_STUDENT_DASHBOARD_COMPANIES_REQUEST, getStudentDashboardCompanies);
}

export function* subscribeStudent(req) {
  const requestURL = 'https://localhost:44340/students/subscriptions';
  console.log(req);
  let options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({ CompanyId: req.companyId, StudentId: 1 })
  };
  try {
    let data = yield call(request, requestURL, options);
    console.log("subscribe", data);
    yield put(subscribeStudentSuccess(data));
  } catch (err) {
    console.log("err", err);
    yield put(subscribeStudentFailure(err.response));
  }
}

export function* subscribeStudentSaga() {
  yield takeLatest(SUBSCRIBE_STUDENT_REQUEST, subscribeStudent);
}

export function* unsubscribeStudent(req) {
  console.log("unsub");
  const requestURL = 'https://localhost:44340/students/subscriptions';
  console.log(req);
  let options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'PUT',
    body: JSON.stringify({ CompanyId: req.companyId, StudentId: 1 })
  };
  try {
    let data = yield call(request, requestURL, options);
    console.log("unsubscribe", data);
    yield put(subscribeStudentSuccess(data));
  } catch (err) {
    console.log("err", err);
    yield put(subscribeStudentFailure(err.response));
  }
}

export function* unsubscribeStudentSaga() {
  yield takeLatest(UNSUBSCRIBE_STUDENT_REQUEST, unsubscribeStudent);
}


