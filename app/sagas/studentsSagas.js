import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import Cookies from 'js-cookie';
import Alert from 'react-s-alert';

import {
  UPDATE_STUDENT_REQUEST,
  GET_STUDENT_REQUEST,
  GET_STUDENT_CV_REQUEST,
  UPLOAD_CV_REQUEST,
} from 'constants/student';
import request from 'utils/request';
import {
  updateStudentSuccess,
  updateStudentFailure,
} from 'actions/updateStudentActions';
import {
  getStudentSuccess,
  getStudentFailure,
  getStudentCvSuccess,
  getStudentCvFailure,
  uploadCVFailure,
  uploadCVSuccess,
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

export function* getStudentCv(params) {
  const requestURL = `https://localhost:44340/student/cv`;

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

  try {
    const data = yield call(request, requestURL, options, false, true);
    data.arrayBuffer().then(rs => {
    const file = new Blob([rs], { type: 'application/pdf' });
    var windowHandler = window.open("");
    const fileURL = windowHandler.URL.createObjectURL(file);
    var link =windowHandler.document.createElement('a');
    link.href = fileURL;
    link.download=params.student+".pdf";
    link.click();
    windowHandler.close();
})
    yield put(getStudentCvSuccess(data));
  } catch (err) {
    yield put(getStudentCvFailure(err.response));
    Alert.error("CV-ul tau nu a putut fi incarcat", {
      position: 'top-right',
      effect: 'jelly'
    });
  }
}

export function* getStudentCvSaga() {
  yield takeLatest(GET_STUDENT_CV_REQUEST, getStudentCv);
}

export function* uploadCV({ file }) {
  const requestURL = 'https://localhost:44340/students/cv';
  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'POST',
    body: file,
  };

  try {
    const response = yield call(request, requestURL, options, true);
    yield put(uploadCVSuccess(response));
    Alert.success("CV încărcat cu succes!", {
            position: 'top-right',
            effect: 'jelly'
          });
  } catch (err) {
    yield put(uploadCVFailure(err.response));
    Alert.error("Eroare la încărcarea CV-ului!", {
          position: 'top-right',
          effect: 'jelly'
        });
  }
}

export function* uploadCVSaga() {
  yield takeLatest(UPLOAD_CV_REQUEST, uploadCV)
}
