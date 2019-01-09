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
  getAvailabilityFailure
} from 'actions/studentManagement';
import {
  GET_APPLICATIONS_REQUEST,
  GET_CV_REQUEST,
  SELECT_STUDENT_REQUEST,
  APPROVE_STUDENT_REQUEST,
  REJECT_STUDENT_REQUEST
} from 'constants/studentManagement';

import request from 'utils/request';
import { GET_AVAILABILITY_REQUEST } from '../constants/studentManagement';

export function* getApplications({redirectFunction}) {
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
    yield put(getApplicationsSuccess(data));
  } catch (err) {
    yield put(getApplicationsFailure(err.response));
    if(err.response.status=="401")
    {
      redirectFunction();
    }
  }
}

export function* getApplicationsSaga() {
  yield takeLatest(GET_APPLICATIONS_REQUEST, getApplications);
}

export function* getCV(params) {
  const requestURL = 'https://localhost:44340/students/'+params.values+'/cv';
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
    params.fun();
    yield put(getCvSuccess(data));
  } catch (err) {
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
    const data=yield call(request, requestURL,options);
    params.fun(data);
    yield put(selectStudentSuccess(data));
    params.funAlert("Studentul a fost selectat pentru internship. In scurt timp, ii vom trimite un email.", false);
  } catch (err) {
    yield put(selectStudentFailure(err.response));
    params.funAlert("Nu am putut modifica statusul studentului.", true);
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
    const data=yield call(request, requestURL,options);
    params.fun();
    yield put(approveStudentSuccess(data));
    params.funAlert("Studentul a fost admis la internship. In scurt timp, ii vom trimite un email.", false);
  } catch (err) {
    yield put(approveStudentFailure(err.response));
    params.funAlert("Nu am putut modifica statusul studentului.", true);
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
    const data=yield call(request, requestURL,options);
    params.fun();
    yield put(rejectStudentSuccess(data));
    params.funAlert("Studentul a fost respins. In scurt timp, ii vom trimite un email.", false);

  } catch (err) {
    yield put(rejectStudentFailure(err.response));
    params.funAlert("Nu am putut modifica statusul studentului.", true);
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

  try {
    const data = yield call(request, requestURL,options);
    yield put(getAvailabilitySuccess(data));
  } catch (err) {
    yield put(getAvailabilityFailure(err.response));
  }
}

export function* getAvailabilitySaga() {
  yield takeLatest(GET_AVAILABILITY_REQUEST, getAvailability);
}
