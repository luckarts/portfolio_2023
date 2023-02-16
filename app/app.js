// Needed for redux-saga es6 generator support
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'containers/App';
import history from 'utils/history';
import { store } from './store';
import 'sanitize.css/sanitize.css';
import '../tailwind.scss';

const MOUNT_NODE = document.getElementById('app');
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    MOUNT_NODE
  );
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(
    <Provider store={store}>
      <App />
    </Provider>,
    render
  ); // eslint-disable-next-line no-console
  // reportWebVitals(console.log);
}
render();
