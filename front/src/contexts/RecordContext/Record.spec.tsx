import { render } from '@testing-library/react';
import { RecordProvider } from './RecordContextProvider';
import { QueryClientProvider, QueryClient } from 'react-query';
import { useQuery } from 'react-query';
import { NotificationContextProvider } from '../Notification';
import { Notification } from '../Notification';
import { ReactNode } from 'react';

type ReturnTypeOfUseQuery = ReturnType<typeof useQuery>;

// Simuler le hook useAdmin

export interface OnlyChildrenProps {
  children?: ReactNode;
}

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn<ReturnTypeOfUseQuery, any>()
}));
const queryClient = new QueryClient();

export const Element = () => {
  return <p>Contenu</p>;
};
export const App = ({ children }: OnlyChildrenProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationContextProvider>
        <Notification />
        {children}
      </NotificationContextProvider>
    </QueryClientProvider>
  );
};
describe('<Authenticated />', () => {
  let mockOnCallback: any;
  beforeEach(() => {
    mockOnCallback = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('affiche une erreur si name de la callback n existe pas  ', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      isError: false
    });
    const renderComponent = () =>
      render(
        <App>
          <RecordProvider name="" callback={mockOnCallback}>
            <Element />
          </RecordProvider>
        </App>
      );
    expect(renderComponent).toThrow('a name of callback to get Data is required');
  });
  it('affiche le component loader ', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      isError: false
    });
    const { getByTestId } = render(
      <App>
        <RecordProvider name="getData" callback={mockOnCallback}>
          <Element />
        </RecordProvider>
      </App>
    );
    const element = getByTestId('loading');
    expect(element).toBeInTheDocument();
  });
  it('affiche une erreur  ', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: new Error('Some error')
    });
    const { getByText } = render(
      <App>
        <RecordProvider name="getData" callback={mockOnCallback}>
          <p>Contenu</p>
        </RecordProvider>
      </App>
    );
    expect(getByText('error get Data from getData')).toBeInTheDocument();
  });
});
