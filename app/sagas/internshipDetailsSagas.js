import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getInternshipDetailsSuccess,
  getInternshipDetailsFailure,
} from 'actions/internshipDetailsActions';
import { GET_INTERNSHIP_DETAILS_REQUEST } from 'constants/internshipDetails';

import request from 'utils/request';

export function* getInternshipDetails({ id }) {
  const requestURL = `https://localhost:44340/internships/details/${id}`;

  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'GET',
  };

  try {
    const data = yield call(request, requestURL, options);
    console.log(data);
    yield put(getInternshipDetailsSuccess(data));
  } catch (err) {
    yield put(getInternshipDetailsFailure(err.response));
  }
}

export function* getInternshipDetailsSaga() {
  yield takeLatest(GET_INTERNSHIP_DETAILS_REQUEST, getInternshipDetails);
}
