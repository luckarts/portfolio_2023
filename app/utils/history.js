import { store } from '../store';
import { createReduxHistory } from 'utils/routerHistory';
export const history = createReduxHistory(store);
