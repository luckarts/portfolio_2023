import { createSelector } from 'reselect';
import { initialState } from 'containers/AlertMessage/reducer';

const selectAlertMessage = ({ alertMessage }) => {
  return alertMessage || initialState;
};

const makeAlertMessageSelector = () => createSelector(selectAlertMessage, (substate) => substate.message);

const makeAlertMessageTypeSelector = () => createSelector(selectAlertMessage, (substate) => substate.type);

const makeAlertShowSelector = () => createSelector(selectAlertMessage, (substate) => substate.show);

const makeIdSelector = () => createSelector(selectAlertMessage, (substate) => substate.id);

export { makeIdSelector, makeAlertShowSelector, makeAlertMessageSelector, makeAlertMessageTypeSelector };
