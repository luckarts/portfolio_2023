import { createBrowserHistory } from 'history';
import { createReduxHistoryContext, reachify } from 'redux-first-history';

export const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory()
  //other options if needed
});
