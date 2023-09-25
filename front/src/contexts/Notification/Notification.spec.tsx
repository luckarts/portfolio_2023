import { render } from '@testing-library/react';
import { NotificationContextProvider } from './NotificationContextProvider';
import { useEffect } from 'react';
import { Notification } from './Notification';
import { useNotification } from './useContextNotification';
// Simuler le hook useAdmin

export const ErrorToNotification = () => {
  const { setNotifications } = useNotification();
  useEffect(() => {
    setNotifications([{ type: 'error', message: 'Test error message' }]);
  }, []);

  return null;
};

export const SuccessToNotification = () => {
  const { setNotifications } = useNotification();
  useEffect(() => {
    setNotifications([{ type: 'success', message: 'Succes login' }]);
  }, []);

  return null;
};

describe('<Notification />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("affiche l'erreur ", () => {
    const { container, getByText } = render(
      <NotificationContextProvider>
        <ErrorToNotification />
        <Notification />
      </NotificationContextProvider>
    );
    const divElement = container.firstChild?.firstChild;
    expect(divElement).toHaveClass('alert_error');
    expect(getByText('Test error message')).toBeInTheDocument();
  });

  it("affiche l'erreur ", () => {
    const { container, getByText } = render(
      <NotificationContextProvider>
        <SuccessToNotification />
        <Notification />
      </NotificationContextProvider>
    );
    const divElement = container.firstChild?.firstChild;
    expect(divElement).toHaveClass('alert_success');
    expect(getByText('Succes login')).toBeInTheDocument();
  });
});
