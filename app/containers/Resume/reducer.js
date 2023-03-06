/*
 *
 * ProjectsPage reducer
 *
 */
import produce from 'immer';
import { ASYNC_START, ASYNC_END, SET_EXPERIENCES, SET_PUBLIC_USER } from 'containers/Resume/constants.js';

export const initialState = {
  experiences: {
    experiences: [],
    isLoading: false,
    errors: []
  },
  user: {
    user: {},
    isLoading: false,
    errors: []
  }
};
/* eslint-disable default-case, no-param-reassign */
const experiencesReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_EXPERIENCES:
      draft.experiences.experiences = action.experiences;
      break;
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
      break;
    case SET_PUBLIC_USER:
      draft.user.user = action.user;
      break;
  }
}, initialState);

export default experiencesReducer;
