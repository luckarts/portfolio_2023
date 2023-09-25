import { render, fireEvent, screen } from '@testing-library/react';
import { FormProvider } from './FormProvider';
import { Notification } from '../Notification';
import { NotificationContextProvider } from '../Notification';
import { Form } from 'src/components';
import { rules } from '../../common/rules';
import { waitFor } from '@testing-library/react';
import { OnlyChildrenProps } from 'src/type';

const fields = [
  {
    name: 'email',
    label: 'email',
    type: 'email'
  }
];
export const App = ({ children }: OnlyChildrenProps) => {
  return (
    <NotificationContextProvider>
      <Notification />
      {children}
    </NotificationContextProvider>
  );
};
describe('<FormCOntext />', () => {
  let mockOnSubmit: any;
  beforeEach(() => {
    mockOnSubmit = jest.fn();
  });

  it('affiche une erreur le champs est vide ', async () => {
    const { container, getByText } = render(
      <App>
        <FormProvider fields={fields} rules={rules} title={'Login'} onSubmit={mockOnSubmit}>
          <Form />;
        </FormProvider>
      </App>
    );
    fireEvent.click(screen.getByText('Valider'));

    await waitFor(() => {
      expect(getByText('email require')).toBeInTheDocument();
      const inputElements = container.querySelectorAll('input');
      expect(inputElements[0]).toHaveClass('error');
    });
  });
  it('call submit si les champs sont rempli', async () => {
    const { container } = render(
      <App>
        <FormProvider fields={fields} rules={rules} title={'Login'} onSubmit={mockOnSubmit}>
          <Form />;
        </FormProvider>
      </App>
    );

    const inputElement = container.querySelector('input[type="email"]');
    if (inputElement) {
      fireEvent.change(inputElement, { target: { value: 'test@test.com' } });
      fireEvent.click(screen.getByText('Valider'));
    } else console.error('Email input element not found!');

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
