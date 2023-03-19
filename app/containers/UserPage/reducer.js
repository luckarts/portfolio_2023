/*
 *
 * ProjectsPage reducer
 *
 */
import produce from 'immer';
import { ASYNC_START, ASYNC_END, SET_PUBLIC_USER } from 'containers/UserPage/constants.js';

export const initialState = {
  formValues: {},

  user: { description: null, cv: null },
  isLoading: false,
  errors: []
};
/* eslint-disable default-case, no-param-reassign */
const userProfileReducer = produce((draft, action) => {
  switch (action.type) {
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
      break;
    case SET_PUBLIC_USER:
      draft.user = action.user;
      break;
  }
}, initialState);

export default userProfileReducer;
