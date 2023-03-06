/*
 *
 * ProjectsPage reducer
 *
 */
import produce from 'immer';
import { SET_PROJECTS, ASYNC_START, ASYNC_END } from 'containers/Projets/constants';

export const initialState = {
  projects: [],
  isLoading: false,
  errors: []
};

/* eslint-disable default-case, no-param-reassign */
const projectsReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      draft.projects = action.projects;
      break;
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
      break;
  }
}, initialState);

export default projectsReducer;
