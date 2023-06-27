import * as React from 'react';
import { AdminContext } from './AdminContext';
import { useQuery } from 'react-query';
import { GetUser } from 'utils/api';

export const AdminContextProvider = ({ children }) => {
  const {
    data: user,
    isLoading,
    error
  } = useQuery('getUserAdmin', () => GetUser(), {
    enabled: !!localStorage.getItem('token')
  });

  return <AdminContext.Provider value={user}>{children}</AdminContext.Provider>;
};
