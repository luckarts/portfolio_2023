import { render } from '@testing-library/react';
import { Authenticated } from './Authenticated';
import { AdminContextProvider } from './AdminContextProvider';
import { QueryClientProvider, QueryClient } from 'react-query';
import { useQuery } from 'react-query';
import { LocalStorage } from '../../../jest/localstorage';

type ReturnTypeOfUseQuery = ReturnType<typeof useQuery>;

// Simuler le hook useAdmin

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn<ReturnTypeOfUseQuery, any>()
}));
const queryClient = new QueryClient();

export const App = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminContextProvider>{children}</AdminContextProvider>
    </QueryClientProvider>
  );
};
describe('<Authenticated />', () => {
  global.localStorage = new LocalStorage(jest);
  global.sessionStorage = new LocalStorage(jest);

  // Clear mocks before each test
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('affiche les enfants quand isAdmin est vrai', () => {
    localStorage.setItem('token', 'token...');
    (useQuery as jest.Mock).mockReturnValue({
      data: { id: 0 },
      error: null
    });
    const { getByText } = render(
      <App>
        <Authenticated>
          <p>Contenu</p>
        </Authenticated>
      </App>
    );
    expect(getByText('Contenu')).toBeInTheDocument();
  });
  it('affiche les enfants quand isAdmin est vrai', () => {
    localStorage.setItem('token', 'token...');
    (useQuery as jest.Mock).mockReturnValue({
      data: { id: 0 },
      error: null
    });
    const { getByText } = render(
      <App>
        <Authenticated adminLabel={'Admin'} userLabel={'anonyme User'}></Authenticated>
      </App>
    );
    expect(getByText('Admin')).toBeInTheDocument();
  });
  it('affiche les enfants quand isAdmin est vrai', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      error: new Error('Some error')
    });
    const { getByText } = render(
      <App>
        <Authenticated adminLabel={'Admin'} userLabel={'anonyme User'}></Authenticated>
      </App>
    );
    expect(getByText('anonyme User')).toBeInTheDocument();
  });
  it('ne montre rien quand isAdmin est faux', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      error: new Error('Some error')
    });
    const { queryByText } = render(
      <App>
        <Authenticated>Contenu</Authenticated>
      </App>
    );
    expect(queryByText('Contenu')).toBeNull();
  });
});
