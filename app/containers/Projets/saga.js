import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_PROJECTS } from 'containers/Projets/constants';
import { asyncEndAction, asyncStartAction, setProjectsAction } from 'containers/Projets/actions';
import { showAlert } from 'common/saga';
import ApiEndpoint from 'utils/api';
import { GET, POST } from 'utils/constants';
import request from 'utils/request';

export function* handleGetProjects() {
  const requestUrl = ApiEndpoint.getProjectsByTagPath('');
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null);

  yield put(asyncStartAction());
  try {
    const { projects } = yield call(request, payload);
    if (projects) {
      yield put(setProjectsAction(projects));
    }
    return yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
    return yield showAlert('error', error.message);
  }
}

export default function* projectPageSaga() {
  yield takeLatest(GET_PROJECTS, handleGetProjects);
}
