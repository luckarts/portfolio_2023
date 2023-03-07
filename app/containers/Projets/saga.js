import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_PROJECTS, NEW_PROJECT, UPDATE_PROJECT, GET_PROJECT } from 'containers/Projets/constants';
import { asyncEndAction, asyncStartAction, setProjectsAction, setFormValueAction } from 'containers/Projets/actions';
import { showAlert } from 'common/saga';
import ApiEndpoint from 'utils/api';
import { GET, POST } from 'utils/constants';
import request from 'utils/request';

export function* handleGetProjects() {
  const requestUrl = ApiEndpoint.getProjects();
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
export function* handleGetProject({ projectName }) {
  const requestUrl = ApiEndpoint.getProjectName(projectName);
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null);

  yield put(asyncStartAction());
  try {
    const { projects } = yield call(request, payload);

    if (projects) {
      yield put(setFormValueAction(projects));
    }
    return yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
    return yield showAlert('error', error.message);
  }
}

export function* handleAddProjects(action) {
  const requestUrl = ApiEndpoint.createProjectPath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, POST, action);

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
export function* handleUpdateProjects({ project, id }) {
  const requestUrl = ApiEndpoint.updateProjectPath(id);
  const payload = ApiEndpoint.makeApiPayload(requestUrl, POST, project);

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
  yield takeLatest(GET_PROJECT, handleGetProject);
  yield takeLatest(UPDATE_PROJECT, handleUpdateProjects);
  yield takeLatest(NEW_PROJECT, handleAddProjects);
}
