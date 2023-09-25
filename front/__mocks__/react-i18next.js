// __mocks__/react-i18next.js
const React = require('react');
const reactI18next = require('react-i18next');
console.log('translationss');

const hasChildren = (node) => node && (node.children || (node.props && node.props.children));

const getChildren = (node) => (node && node.children ? node.children : node.props && node.props.children);

const renderNodes = (reactNodes) => {
  if (typeof reactNodes === 'string') {
    return reactNodes;
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key];
    const isElement = React.isValidElement(child);

    if (typeof child === 'string') {
      return child;
    }
    if (hasChildren(child)) {
      const inner = renderNodes(getChildren(child));
      return React.cloneElement(child, { ...child.props, key: i }, inner);
    }
    if (typeof child === 'object' && !isElement) {
      return Object.keys(child).reduce((str, childKey) => `${str}${child[childKey]}`, '');
    }

    return child;
  });
};
const mockTranslations = {
  en: {
    hello: 'Hello',
    welcome: 'Welcome'
    // ... ajoutez d'autres traductions ici
  },
  fr: {
    hello: 'Bonjour',
    welcome: 'Bienvenue'
    // ... ajoutez d'autres traductions ici
  }
  // ... ajoutez d'autres langues ici si nécessaire
};
const currentLanguage = 'fr';

module.exports = {
  ...reactI18next,

  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: (k) => k };
    return Component;
  },
  useTranslation: () => {
    return {
      t: (k) => mockTranslations[currentLanguage][k] || k,

      i18n: {
        changeLanguage: () => new Promise(() => {}),
        language: 'fr'
      }
    };
  },
  Trans: ({ children }) => renderNodes(children),
  Translation: ({ children }) => children((k) => k, { i18n: {} })
};
