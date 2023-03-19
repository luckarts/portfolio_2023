/*
 *
 * ProjectsPage reducer
 *
 */
import produce from 'immer';
import { ASYNC_START, ASYNC_END, SET_EXPERIENCES, SET_EXPERIENCE } from 'containers/Resume/constants.js';

export const initialState = {
  experiences: [],
  isLoading: false,
  errors: [],
  formValues: {}
};
/* eslint-disable default-case, no-param-reassign */
const experiencesReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_EXPERIENCES:
      draft.experiences = action.experiences;
      break;
    case SET_EXPERIENCE:
      draft.formValues = action.experience;
      break;
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
  }
}, initialState);

export default experiencesReducer;
