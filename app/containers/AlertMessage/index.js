/**
 *
 * Alert Message
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/AlertMessage/reducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/AlertMessage/saga';
import { createStructuredSelector } from 'reselect';
import {
  makeAlertMessageSelector,
  makeAlertMessageTypeSelector,
  makeAlertShowSelector,
  makeIdSelector
} from 'containers/AlertMessage/selectors';
import { autoDismissAlertAction } from 'containers/AlertMessage/actions';
import classNames from 'classnames';

const key = 'alertMessage';

const stateSelector = createStructuredSelector({
  message: makeAlertMessageSelector(),
  show: makeAlertShowSelector(),
  type: makeAlertMessageTypeSelector(),
  id: makeIdSelector()
});

export default function AlertMessage() {
  const dispatch = useDispatch();

  const autoDismiss = () => dispatch(autoDismissAlertAction());

  useInjectReducer({ key, reducer });

  useInjectSaga({ key, saga });

  const { type, id, message, show } = useSelector(stateSelector);

  useEffect(() => {
    if (message !== '') {
      autoDismiss();
    }
  }, [message]);
  if (!show) {
    return <></>;
  }

  return (
    <div className={classNames(`alert_${type}`, ' alert_container')} role="alert">
      <span className="block sm:inline">{message}</span>
      <span className="alert_svg_container">
        <svg
          className={classNames(`text_${type}`, ' alert_svg')}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
}
