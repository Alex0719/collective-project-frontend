import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getApplicationsSuccess,
  getApplicationsFailure,
  getCvSuccess,
  getCvFailure
} from 'actions/studentManagement';
import {
  GET_APPLICATIONS_REQUEST,
  GET_CV_REQUEST
} from 'constants/studentManagement';

import request from 'utils/request';

export function* getApplications() {
  const requestURL = 'https://localhost:44340/internships/1/management';

  try {
    const data = yield call(request, requestURL);
    console.log("in saga ",data)
    yield put(getApplicationsSuccess(data));
  } catch (err) {
    console.log("in saga error ",err)
    yield put(getApplicationsFailure(err.response));
  }
}

export function* getApplicationsSaga() {
  yield takeLatest(GET_APPLICATIONS_REQUEST, getApplications);
}

export function* getCV(params) {
  const requestURL = 'https://localhost:44340/students/'+params.values+'/cv';
  console.log(requestURL)
  try {
    const data = yield call(request, requestURL);
    console.log("in saga ",data)
    // params.fun(data);
    const file = new Blob(
      [data], 
      {type: 'application/pdf'});
  const fileURL = URL.createObjectURL(file);
  window.location.href = URL.createObjectURL(file);
  
  //Open the URL on new Window
  window.open(fileURL);
    yield put(getCvSuccess(data));
  } catch (err) {
    console.log("in saga error ",err)
    yield put(getCvFailure(err.response));
  }
}

export function* getCvSaga() {
  yield takeLatest(GET_CV_REQUEST, getCV);
}