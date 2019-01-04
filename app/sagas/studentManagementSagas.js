import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getApplicationsSuccess,
  getApplicationsFailure,
  getCvSuccess,
  getCvFailure,
  selectStudentSuccess,
  selectStudentFailure,
  approveStudentSuccess,
  approveStudentFailure,
  rejectStudentFailure,
  rejectStudentSuccess,
  getAvailabilitySuccess,
  getAvailabilityFailure,
} from 'actions/studentManagement';
import {
  GET_APPLICATIONS_REQUEST,
  GET_CV_REQUEST,
  SELECT_STUDENT_REQUEST,
  APPROVE_STUDENT_REQUEST,
  REJECT_STUDENT_REQUEST,
} from 'constants/studentManagement';

import request from 'utils/request';
import { GET_AVAILABILITY_REQUEST } from '../constants/studentManagement';

export function* getApplications() {
  const requestURL = 'https://localhost:44340/internships/1/management';

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
    console.log('in saga ', data);
    yield put(getApplicationsSuccess(data));
  } catch (err) {
    console.log('in saga error ', err);
    yield put(getApplicationsFailure(err.response));
  }
}

export function* getApplicationsSaga() {
  yield takeLatest(GET_APPLICATIONS_REQUEST, getApplications);
}

export function* getCV(params) {
  const requestURL = `https://localhost:44340/students/${params.values}/cv`;

  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Accept':'application/octet-stream'
    },
    responseType: 'blob',
    credentials: 'include',
    method: 'GET',
  };

  console.log(params.fun);
  try {
    const data = yield call(request, requestURL, options,false,true);
    data.arrayBuffer().then(rs => {console.log("blob:",rs);
    console.log("in saga", );
    const file = new Blob([rs], { type: 'application/pdf' });
    var windowHandler = window.open("");
    
    const fileURL = windowHandler.URL.createObjectURL(file);

    var link =windowHandler.document.createElement('a');
  link.href = fileURL;
  link.download=params.fun.Fullname+".pdf";
  link.click();
  windowHandler.close();
})
   
    yield put(getCvSuccess(data));
  } catch (err) {
    console.log('in saga error ', err);
    yield put(getCvFailure(err.response));
  }
}

export function* getCvSaga() {
  yield takeLatest(GET_CV_REQUEST, getCV);
}

export function* selectStudent(params) {
  const requestURL = 'https://localhost:44340/internships/1/students/select';
  try {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(params.values),
    };
    const data = yield call(request, requestURL, options);
    params.fun(data);
    yield put(selectStudentSuccess(data));
  } catch (err) {
    console.log('in saga error ', err);
    yield put(selectStudentFailure(err.response));
  }
}

export function* selectStudentSaga() {
  yield takeLatest(SELECT_STUDENT_REQUEST, selectStudent);
}

export function* approveStudent(params) {
  const requestURL = 'https://localhost:44340/internships/1/students/aprove';

  try {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(params.values),
    };
    const data = yield call(request, requestURL, options);
    params.fun();
    yield put(approveStudentSuccess(data));
  } catch (err) {
    console.log('in saga error ', err);
    yield put(approveStudentFailure(err.response));
  }
}

export function* approveStudentSaga() {
  yield takeLatest(APPROVE_STUDENT_REQUEST, approveStudent);
}

export function* rejectStudent(params) {
  const requestURL = 'https://localhost:44340/internships/1/students/reject';

  try {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(params.values),
    };
    const data = yield call(request, requestURL, options);
    params.fun();
    yield put(rejectStudentSuccess(data));
  } catch (err) {
    console.log('in saga error ', err);
    yield put(rejectStudentFailure(err.response));
  }
}

export function* rejectStudentSaga() {
  yield takeLatest(REJECT_STUDENT_REQUEST, rejectStudent);
}

export function* getAvailability(params) {
  const requestURL = 'https://localhost:44340/internships/availability/1';

  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'GET',
  };

  console.log(requestURL);
  try {
    const data = yield call(request, requestURL,options);
    console.log('in saga ', data);
    yield put(getAvailabilitySuccess(data));
  } catch (err) {
    console.log('in saga error ', err);
    yield put(getAvailabilityFailure(err.response));
  }
}

export function* getAvailabilitySaga() {
  yield takeLatest(GET_AVAILABILITY_REQUEST, getAvailability);
}
