import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_EXPERIENCES, GET_EXPERIENCE, GET_PUBLIC_USER, UPDATE_EXPERIENCE } from 'containers/Resume/constants';
import {
  asyncEndAction,
  asyncStartAction,
  setExperiencesAction,
  updateExperienceAction,
  setUserAction
} from 'containers/Resume/actions';
import { showAlert } from 'common/saga';
import ApiEndpoint from 'utils/api';
import { GET, POST } from 'utils/constants';
import request from 'utils/request';

export function* handleGetExperiences() {
  const requestUrl = ApiEndpoint.getExperiencesPath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null);

  yield put(asyncStartAction());
  try {
    const { listExperiences } = yield call(request, payload);
    if (listExperiences) {
      yield put(setExperiencesAction(listExperiences));
    }
    return yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
    return yield showAlert('error', error.message);
  }
}
export function* handleGetExperience(company) {
  const requestUrl = ApiEndpoint.getExperiencesByCompanyPath(company);
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null);

  yield put(asyncStartAction());
  try {
    const { listExperiences } = yield call(request, payload);
    if (listExperiences) {
      yield put(updateExperienceAction(listExperiences));
    }
    return yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
    return yield showAlert('error', error.message);
  }
}
export function* handleGetUSer() {
  const requestUrl = ApiEndpoint.getUserPublicPath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null);

  // yield put(asyncStartAction());
  try {
    const { user } = yield call(request, payload);
    if (user) {
      yield put(setUserAction(user));
    }
    //return yield put(asyncEndAction());
  } catch (error) {
    console.log(error, 'err');
    yield put(asyncEndAction());
    return yield showAlert('error', error.message);
  }
}

export function* handleUpdateUSer(user) {
  const requestUrl = ApiEndpoint.updateExperiencePath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, POST, user);

  // yield put(asyncStartAction());
  try {
    const { user } = yield call(request, payload);
    if (user) {
      yield put(setUserAction(user));
    }
    //return yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
    return yield showAlert('error', error.data.message);
  }
}
export default function* projectPageSaga() {
  yield takeLatest(GET_EXPERIENCES, handleGetExperiences);
  yield takeLatest(GET_EXPERIENCE, handleGetExperience);
  yield takeLatest(GET_PUBLIC_USER, handleGetUSer);
  yield takeLatest(UPDATE_EXPERIENCE, handleUpdateUSer);
}
