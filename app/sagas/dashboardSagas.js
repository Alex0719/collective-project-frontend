import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getDashboardStatisticsSuccess,
  getDashboardStatisticsFailure,
  getStudentDashboardCompaniesSuccess,
  getStudentDashboardCompaniesFailure
} from 'actions/dashboardActions';
import {
  GET_DASHBOARD_STATISTICS_REQUEST,
  GET_STUDENT_DASHBOARD_COMPANIES_REQUEST
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
  const requestURL = 'https://localhost:44340/companies';

  try {
    const data = yield call(request, requestURL);
    console.log("companies", data);
    yield put(getStudentDashboardCompaniesSuccess(data));
  } catch (err) {
    console.log("err", err);
    yield put(getStudentDashboardCompaniesFailure(err.response));
  }
}

export function* getStudentDashboardCompaniesSaga() {
  yield takeLatest(GET_STUDENT_DASHBOARD_COMPANIES_REQUEST, getStudentDashboardCompanies);
}