import { createSelector } from 'reselect';
import { initialState } from 'containers/App/reducer';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

const selectGlobal = (state) => state.global || initialState;

const selectRouter = (state) => state.router;

const makeLoggedInUserSelector = () => createSelector(selectGlobal, (globalState) => globalState.user);

const makeIsLoggedSelector = () => createSelector(selectGlobal, (globalState) => globalState.isLogged);

const makeSelectLocation = () => createSelector(selectRouter, (routerState) => routerState.location);

const makeHideHeaderSelector = () => createSelector(selectGlobal, (globalState) => globalState.hideHeader);

const makeIsLoadingSelector = () => createSelector(selectGlobal, (globalState) => globalState.isLoading);

const makeDeviceSelector = () => createSelector(selectGlobal, (globalState) => globalState.device);

const makeCollapsedSelector = () => createSelector(selectGlobal, (globalState) => globalState.collapsed);

const stateSelector = createStructuredSelector({
  user: makeLoggedInUserSelector(),
  device: makeDeviceSelector(),
  collapsed: makeCollapsedSelector(),
  isLogged: makeIsLoggedSelector(),
  isLoading: makeIsLoadingSelector()
});

export {
  makeCollapsedSelector,
  makeDeviceSelector,
  makeIsLoadingSelector,
  makeHideHeaderSelector,
  makeLoggedInUserSelector,
  makeIsLoggedSelector,
  makeSelectLocation,
  stateSelector
};
/*
export const useUser = () => {
  return useSelector((state) => state.appPageReducer.user);
};*/
