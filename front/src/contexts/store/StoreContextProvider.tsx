import { useReducer } from 'react';
import { StoreContext } from './StoreContext';
import { storeReducer } from './reducer';
import { OnlyChildrenProps } from 'src/type';

export function StoreContextProvider<T>({ children }: OnlyChildrenProps) {
  const [store, dispatch] = useReducer(storeReducer<T>, {});
  return <StoreContext.Provider value={[store, dispatch]}>{children}</StoreContext.Provider>;
}
