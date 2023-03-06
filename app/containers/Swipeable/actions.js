/*
 *
 * RegisterPage actions
 *
 */

import { SET_TAB_ID } from 'containers/Swipeable/constants';

export function setTab(tabId) {
  return {
    type: SET_TAB_ID,
    tabId
  };
}
