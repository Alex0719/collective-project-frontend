import { takeLatest, call, put } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { UPDATE_STUDENT_REQUEST, GET_STUDENT_REQUEST } from 'constants/student';
import request from 'utils/request';
import {
  updateStudentSuccess,
  updateStudentFailure,
} from 'actions/updateStudentActions';
import {
  getStudentSuccess,
  getStudentFailure,
} from '../actions/getStudentActions';

export function* getStudent() {
  const requestURL = 'https://localhost:44340/student';

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
    let student;
    if (Cookies.get('Identity')) {
      student = yield call(request, requestURL, options);
      console.log(student);
    } else {
      console.log('not authorized');
    }
    yield put(getStudentSuccess(student));
  } catch (err) {
    console.log(`err in get student saga ${err}`);
    yield put(getStudentFailure(err.response));
  }
}

export function* getStudentSaga() {
  yield takeLatest(GET_STUDENT_REQUEST, getStudent);
}

export function* updateStudent({ values }) {
  const requestURL = 'https://localhost:44340/students';
  console.log('saga', values);
  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'PUT',
    body: JSON.stringify(values),
  };

  try {
    let updatedStudent;
    if (Cookies.get('Identity')) {
      console.log('in update saga');
      updatedStudent = yield call(request, requestURL, options, true);
      console.log(updatedStudent);
      yield put(updateStudentSuccess(updatedStudent));
    } else {
      console.log('not authorized');
    }
  } catch (err) {
    console.log(`err in update put saga ${err}`);
    yield put(updateStudentFailure(err.response));
  }
}

export function* updateStudentSaga() {
  yield takeLatest(UPDATE_STUDENT_REQUEST, updateStudent);
}
