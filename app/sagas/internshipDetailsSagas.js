import { takeLatest, call, put } from 'redux-saga/effects';
import Alert from 'react-s-alert';
import {
  getInternshipDetailsSuccess,
  getInternshipDetailsFailure,
} from 'actions/internshipDetailsActions';

import {
  getInternshipTestimonialsSuccess,
  getInternshipTestimonialsFailure,
} from 'actions/internshipDetailsActions';

import {
  putInternshipDetailsSuccess,
  putInternshipDetailsFailure,
} from 'actions/internshipDetailsActions';

import { GET_INTERNSHIP_DETAILS_REQUEST } from 'constants/internshipDetails';
import { GET_INTERNSHIP_TESTIMONIALS_REQUEST } from 'constants/internshipDetails';
import { PUT_INTERNSHIP_DETAILS_REQUEST } from 'constants/internshipDetails';

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
    yield put(getInternshipDetailsSuccess(data));
  } catch (err) {
    yield put(getInternshipDetailsFailure(err.response));
  }
}

export function* putInternshipDetails({ id,obj }) {
  const requestURL = `https://localhost:44340/internships/${id}`;

  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body:JSON.stringify(obj),
    credentials: 'include',
    method: 'PUT',
  };

  try {
    const data = yield call(request, requestURL, options,false,true);
    yield put(putInternshipDetailsSuccess(data));
    Alert.success("Modificarile au fost salvate cu succes", {
      position: 'top-right',
      effect: 'jelly'
    });
  } catch (err) {
    yield put(putInternshipDetailsFailure(err.response));
    Alert.error("Modificarile nu au putut fi salvate", {
      position: 'top-right',
      effect: 'jelly'
    });
  }
}

export function* getInternshipTestimonials({ id }) {
  const requestURL = `https://localhost:44340/internships/${id}/testimonials`;

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
    const data  = yield call(request, requestURL, options);
    yield put(getInternshipTestimonialsSuccess(data));
  } catch (err) {
    yield put(getInternshipTestimonialsFailure(err.response));
  }
}

export function* getInternshipDetailsSaga() {
  yield takeLatest(GET_INTERNSHIP_DETAILS_REQUEST, getInternshipDetails);
}


export function* putInternshipDetailsSaga() {
  yield takeLatest(PUT_INTERNSHIP_DETAILS_REQUEST, putInternshipDetails);
}

export function* getInternshipTestimonialsSaga() {
  yield takeLatest(GET_INTERNSHIP_TESTIMONIALS_REQUEST, getInternshipTestimonials);
}
