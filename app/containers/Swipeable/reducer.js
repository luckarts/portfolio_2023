/*
 *
 * TabsReducer reducer
 *
 */
import produce, { setAutoFreeze } from 'immer';
import { SET_TAB_ID } from 'containers/Swipeable/constants';

export const initialState = {
  tab_id: 0
};

setAutoFreeze(false);
/* eslint-disable default-case, no-param-reassign */
const tabsReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_TAB_ID:
      draft.tab_id = action.tab_id;
      break;
    default:
  }
}, initialState);

export default tabsReducer;
