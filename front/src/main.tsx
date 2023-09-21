import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import WrapperContext from 'containers/WrapperContext';
import * as serviceWorker from './serviceWorker';
import './i18n';
import './assets/style/tailwind.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WrapperContext>
      <App />
    </WrapperContext>
  </React.StrictMode>
);

serviceWorker.register();
