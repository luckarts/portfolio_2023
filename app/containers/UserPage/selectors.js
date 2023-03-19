import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUser = ({ userProfileReducer }) => {
  return userProfileReducer || initialState;
};
/**
 * Select the language locale
 */
const makeSelectUSer = () => createSelector(selectUser, (state) => state.user);
const makeSelectUSerLoading = () => createSelector(selectUser, (state) => state.isLoading);

export { makeSelectUSer, selectUser, makeSelectUSerLoading };
