import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getInternshipsForStudentSuccess,
  getInternshipsForStudentFailure,
  confirmExamAttendanceSuccess,
  confirmExamAttendanceFailure,
  confirmInternshipParticipationSuccess,
  confirmInternshipParticipationFailure,
  refuseInternshipSuccess,
  refuseInternshipFailure,
} from 'actions/internshipManagement';

import {
  GET_INTERNSHIPS_FOR_STUDENT_REQUEST,
  CONFIRM_EXAM_ATTENDANCE_REQUEST,
  CONFIRM_INTERNSHIP_PARTICIPATION_REQUEST,
  REFUSE_INTERNSHIP_REQUEST
} from 'constants/internshipManagement';
import request from 'utils/request';

export function* getInternshipsForStudent() {
  const requestURL = 'https://localhost:44340/student-internships';

  try {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
      credentials: 'include',
      method: 'GET',
    };
    const data = yield call(request, requestURL, options);
    yield put(getInternshipsForStudentSuccess(data));
  } catch (err) {
    yield put(getInternshipsForStudentFailure(err.response));
  }
}

export function* getInternshipsForStudentSaga() {
  yield takeLatest(
    GET_INTERNSHIPS_FOR_STUDENT_REQUEST,
    getInternshipsForStudent,
  );
}


export function* confirmExamAttendance(params) {
  const requestURL = 'https://localhost:44340/internships/students/confirm-exam-attendance';
  try {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
      credentials: 'include',
      method: 'PUT',
      body: JSON.stringify(params.values),
    };
    const data = yield call(request, requestURL, options);
    params.fun(data);
    yield put(confirmExamAttendanceSuccess(data));
  } catch (err) {
    yield put(confirmExamAttendanceFailure(err.response));
  }
}

export function* confirmExamAttendanceSaga() {
  yield takeLatest(CONFIRM_EXAM_ATTENDANCE_REQUEST, confirmExamAttendance);
}

export function* confirmInternshipParticipation(params) {
  const requestURL = 'https://localhost:44340/internships/students/confirm-participation';

  try {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
      credentials: 'include',
      method: 'PUT',
      body: JSON.stringify(params.values),
    };
    const data = yield call(request, requestURL, options);
    params.fun();
    yield put(confirmInternshipParticipationSuccess(data));
  } catch (err) {
    yield put(confirmInternshipParticipationFailure(err.response));
  }
}

export function* confirmInternshipParticipationSaga() {
  yield takeLatest(
    CONFIRM_INTERNSHIP_PARTICIPATION_REQUEST,
    confirmInternshipParticipation,
  );
}

export function* refuseInternship(params) {
  const requestURL = 'https://localhost:44340/internships/students/refuse';

  try {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
      credentials: 'include',
      method: 'PUT',
      body: JSON.stringify(params.values),
    };
    const data = yield call(request, requestURL, options);
    params.fun();
    yield put(refuseInternshipSuccess(data));

  } catch (err) {
    yield put(refuseInternshipFailure(err.response));
  }
}

export function* refuseInternshipSaga() {
  yield takeLatest(REFUSE_INTERNSHIP_REQUEST, refuseInternship);
}
