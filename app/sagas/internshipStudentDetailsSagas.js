import { takeLatest, call, put } from 'redux-saga/effects';
import Alert from 'react-s-alert';

import {
  wasParticipantSuccess,
  wasParticipantFailure,
  updateRatingSuccess,
  updateRatingFailure,
  addTestimonialSuccess,
  addTestimonialFailure,
} from 'actions/internshipStudentDetailsActions';
import {
  WAS_PARTICIPANT_REQUEST,
  UPDATE_RATING_REQUEST,
  ADD_TESTIMONIAL_REQUEST,
} from 'constants/internshipStudentDetails';
import request from 'utils/request';

export function* wasParticipant({ id }) {
  const requestURL = `https://localhost:44340/internships/${id}/participant`;
  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'GET',
  };

  try{
    const data = yield call(request, requestURL, options);
    yield put(wasParticipantSuccess(data));
  } catch(err) {
    yield put(wasParticipantFailure(err.response));
  }
}

export function* wasParticipantSaga() {
  yield takeLatest(WAS_PARTICIPANT_REQUEST, wasParticipant);
}

export function* updateRating({ ratings, id }) {
  const requestURL = `https://localhost:44340/internships/${id}/rating`;
  const requestURL2 = `https://localhost:44340/internships/details/${id}`;
  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(ratings),
  };
  const options2 = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'GET',
  };

  try{
    yield call(request, requestURL, options);
    const data = yield call(request, requestURL2,options2);

    yield put(updateRatingSuccess(data));
    Alert.success("Rating modificat cu succes!", {
          position: 'top-right',
          effect: 'jelly'
        });
  } catch(err) {
    yield put(updateRatingFailure(err.response));
    Alert.error("Eroare la modificarea rating-ului!", {
          position: 'top-right',
          effect: 'jelly'
        });
  }
}

export function* updateRatingSaga() {
  yield takeLatest(UPDATE_RATING_REQUEST, updateRating);
}

export function* addTestimonial({ testimonial, id }) {
  const requestURL = `https://localhost:44340/internships/${id}/testimonial`;
  const requestURL2 = `https://localhost:44340/internships/${id}/testimonials`;
  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(testimonial),
  };
  const options2 = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'GET',
  };

  try{
    yield call(request, requestURL, options);
    const data = yield call(request, requestURL2, options2);
    yield put(addTestimonialSuccess(data));
    Alert.success("Testimonial adăugat cu succes!", {
          position: 'top-right',
          effect: 'jelly'
        });
  } catch(err) {
    yield put(addTestimonialFailure(err.response));
    Alert.error("Eroare la adăugarea testimonialului!", {
          position: 'top-right',
          effect: 'jelly'
        });
  }
}

export function* addTestimonialSaga() {
  yield takeLatest(ADD_TESTIMONIAL_REQUEST, addTestimonial);
}
