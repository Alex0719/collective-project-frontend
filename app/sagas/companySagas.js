import { takeLatest, call, put } from 'redux-saga/effects';
import { routerMiddleware, push } from 'react-router-redux';

import {
  getStudentsPerYearSuccess,
  getStudentsPerYearFailure,
  getInternshipsSuccess,
  getInternshipsFailure,
  addInternship,
  addInternshipSuccess,
  addInternshipFailure,
  getOurRatings,
  getOurRatingsSuccess,
  getOurRatingsFailure
} from 'actions/companyActions';
import {
  GET_STUDENTS_PER_YEAR_REQUEST,
  GET_INTERNSHIPS_REQUEST,
  ADD_INTERNSHIP,
  GET_OUR_RATINGS_REQUEST,
} from 'constants/company';
import request from 'utils/request';

let options = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
  credentials: 'include',
  method: 'GET',
};

export function* doGetStudentsPerYear() {
  const requestURL = 'https://localhost:44340/statistics/evolution';

  try {
    const data = yield call(request, requestURL, options);
    yield put(getStudentsPerYearSuccess(data));
  } catch (err) {
    yield put(getStudentsPerYearFailure(err.response));
  }
}

export function* getStudentsPerYearSaga() {
  yield takeLatest(GET_STUDENTS_PER_YEAR_REQUEST, doGetStudentsPerYear);
}

export function* doGetInternships({redirectFunction}) {
  const requestURL = 'https://localhost:44340/internships';

  try {
    const data = yield call(request, requestURL, options);
    yield put(getInternshipsSuccess(data));
  } catch (err) {
    yield put(getStudentsPerYearFailure(err.response));
    if(err.response.status===401)
    {
      redirectFunction();
    }
  }
}

export function* getInternshipsSaga() {
  yield takeLatest(GET_INTERNSHIPS_REQUEST, doGetInternships);
}

export function* doGetOurRatings() {
  const requestURL = 'https://localhost:44340/statistics/ratings';

  try{
    const data = yield call(request, requestURL, options);
    yield put(getOurRatingsSuccess(data));
  } catch (err) {
    console.log(err.response);
    yield put(getOurRatingsFailure(err.response));
    if(err.response.status == "401"){
      yield put(push('/unauthorized'));
    }
  }
}

export function* getOurRatingsSaga() {
  yield takeLatest(GET_OUR_RATINGS_REQUEST, doGetOurRatings);
}

export function* doAddInternship( params ) {
  const requestURL = 'https://localhost:44340/internships/add';
  let options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(params.values),
  };

  try {
    const internship = yield call(request, requestURL, options);
    yield put(addInternshipSuccess(internship));
    params.fun("Internship-ul a fost adaugat cu success!",false);
  } catch (err) {
    yield put(addInternshipFailure(err.response));
    params.fun("Nu s-a putut adauga internship-ul",true);
  }
}

export function* addInternshipSaga() {
  yield takeLatest(ADD_INTERNSHIP, doAddInternship);
}
