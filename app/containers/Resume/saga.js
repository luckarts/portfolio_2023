import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_EXPERIENCES, GET_EXPERIENCE, UPDATE_EXPERIENCE } from 'containers/Resume/constants';
import { asyncEndAction, asyncStartAction, setExperienceAction, setExperiencesAction } from 'containers/Resume/actions';
import { showAlert } from 'common/saga';
import ApiEndpoint from 'utils/api';
import { GET, POST } from 'utils/constants';
import request from 'utils/request';
import { push } from 'redux-first-history';

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
export function* handleGetExperience({ company }) {
  const requestUrl = ApiEndpoint.getExperiencesByCompanyPath(company);
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null);

  yield put(asyncStartAction());
  try {
    const { listExperiences } = yield call(request, payload);
    if (listExperiences) {
      yield put(setExperienceAction(listExperiences));
    }
    return yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
    return yield showAlert('error', error.message);
  }
}
export function* handleUpdateExperience(experience) {
  const requestUrl = ApiEndpoint.updateExperiencePath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, POST, experience);

  yield put(asyncStartAction());
  try {
    const { experiences } = yield call(request, payload);
    if (experiences) {
      yield put(setExperienceAction(experiences));
    }
    yield put(asyncEndAction());
    yield put(push('/'));
    window.location.reload();
  } catch (error) {
    yield put(asyncEndAction());
    return yield showAlert('error', error.data.message);
  }
}
export default function* projectPageSaga() {
  yield takeLatest(GET_EXPERIENCES, handleGetExperiences);
  yield takeLatest(GET_EXPERIENCE, handleGetExperience);
  yield takeLatest(UPDATE_EXPERIENCE, handleUpdateExperience);
}
