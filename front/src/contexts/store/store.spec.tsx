import { render } from '@testing-library/react';
import { StoreContextProvider } from './StoreContextProvider';
import { useEffect } from 'react';
import { useStore } from './useStore';
import { OnlyChildrenProps } from 'src/type';
// Simuler le hook useAdmin

export const App = ({ children }: OnlyChildrenProps) => {
  return <StoreContextProvider>{children}</StoreContextProvider>;
};

export const UpdateStore = () => {
  const { setStore } = useStore();
  useEffect(() => {
    setStore('tag', 'react');
  }, []);

  return null;
};

export const Tags = () => {
  const { getStore } = useStore();
  const tag = getStore('tag');

  return <p>{tag}</p>;
};

describe('<Store />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('affiche le tag ', () => {
    const { getByText } = render(
      <App>
        <UpdateStore />
        <Tags />
      </App>
    );
    // expect(divElement).toHaveClass('alert_error');
    expect(getByText('react')).toBeInTheDocument();
  });
});
