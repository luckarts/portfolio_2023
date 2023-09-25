import { render } from '@testing-library/react';
import { I18nContextProvider } from './I18nContextProvider';
import { OnlyChildrenProps } from 'src/type';

import { useTranslation } from '../../../__mocks__/react-i18next';

// Simuler le hook useAdmin

export const App = ({ children }: OnlyChildrenProps) => {
  return <I18nContextProvider>{children}</I18nContextProvider>;
};
describe('<Authenticated />', () => {
  const Component = () => {
    const { t } = useTranslation();

    return <div>{t('welcome')}</div>;
  };

  it('affiche les enfants quand isAdmin est vrai', () => {
    const { debug } = render(
      <App>
        <Component />
      </App>
    );
    debug();
    // expect(getByText('Bienvenue')).toBeInTheDocument();
  });
});
