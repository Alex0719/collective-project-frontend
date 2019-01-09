import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import Cookies from 'js-cookie';
import Alert from 'react-s-alert';

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
    } else {
      yield put(push('/unauthorized'));
    }
    yield put(getStudentSuccess(student));
  } catch (err) {
    yield put(getStudentFailure(err.response));
    if(err.response.status === 401) {
      yield put(push('/unauthorized'));
    }

  }
}

export function* getStudentSaga() {
  yield takeLatest(GET_STUDENT_REQUEST, getStudent);
}

export function* updateStudent({ values }) {
  const requestURL = 'https://localhost:44340/students';
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
      updatedStudent = yield call(request, requestURL, options, true);
      yield put(updateStudentSuccess(updatedStudent));
      Alert.success("Profilul s-a modificat cu succes!", {
            position: 'top-right',
            effect: 'jelly'
          });
    } else {
      yield put(push('/unauthorized'));
    }
  } catch (err) {
    yield put(updateStudentFailure(err.response));
    Alert.error("Eroare la modificarea profilului!", {
          position: 'top-right',
          effect: 'jelly'
        });
  }
}

export function* updateStudentSaga() {
  yield takeLatest(UPDATE_STUDENT_REQUEST, updateStudent);
}
