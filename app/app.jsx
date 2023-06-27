// Needed for redux-saga es6 generator support
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import '../style/tailwind.scss';
import i18n from './i18n';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { WrapperContext } from 'containers/WrapperContext';
const queryClient = new QueryClient();
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  const queryClient = new QueryClient();

  ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <WrapperContext>
          <App />
        </WrapperContext>
      </QueryClientProvider>
    </React.StrictMode>,
    MOUNT_NODE
  );
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <WrapperContext>
          <App />
        </WrapperContext>
      </QueryClientProvider>
    </React.StrictMode>,
    render
  ); // eslint-disable-next-line no-console
  // reportWebVitals(console.log);
}
render();
