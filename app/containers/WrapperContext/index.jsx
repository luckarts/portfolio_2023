import * as React from 'react';
import { AdminContextProvider } from 'containers/AdminContext/AdminContextProvider';
import { I18nContextProvider } from 'containers/I18nContext/I18nContextProvider';
import { NotificationContextProvider } from 'containers/Notification/NotificationContextProvider';
import { StoreContextProvider } from 'store/StoreContextProvider';

export const WrapperContext = ({ children }) => {
  return (
    <AdminContextProvider>
      <I18nContextProvider>
        <NotificationContextProvider>
          <StoreContextProvider>{children}</StoreContextProvider>
        </NotificationContextProvider>
      </I18nContextProvider>
    </AdminContextProvider>
  );
};
