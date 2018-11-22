import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getDashboardStatisticsSuccess,
  getDashboardStatisticsFailure,
} from 'actions/dashboardActions';
import {
  GET_DASHBOARD_STATISTICS_REQUEST,
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

