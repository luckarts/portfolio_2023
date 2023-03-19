/*
 *
 * ProjectsPage reducer
 *
 */
import produce from 'immer';
import { SET_PROJECTS, ASYNC_START, ASYNC_END, SET_PROJECT, UPDATE_PROJECT } from 'containers/Projets/constants';

export const initialState = {
  projects: [],
  isLoading: false,
  errors: [],
  formValues: {
}
};

/* eslint-disable default-case, no-param-reassign */
const projectsReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      draft.projects = action.projects;
      break;
    case SET_PROJECT:
      draft.formValues = action.project;
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
      break;
  }
}, initialState);

export default projectsReducer;
