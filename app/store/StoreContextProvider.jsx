import React, { useReducer } from 'react';
import { StoreContext } from './StoreContext';
import { reducer } from './reducer.js';

const initialState = {
  tabs_id: 0
};
export const StoreContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  const value = {
    store,
    dispatch
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
