/** @type {import('tailwindcss').Config} */

module.exports = {
  colors: {
    bg: '#111213',
    'bg-secondary': '#1e1e22',
    transparent: 'transparent',
    primary: '#2d3748',
    secondary: 'rgb(8, 112, 209)',
    black: '#000',
    white: '#fff',
    contrasteWhite: '#e0e0e0',
    'gray-100': '#f9f9f9',
    textTitle: '#1c1e21',
    fromHome: '#1b2735',
    fromDefault: '#f9f9f9',
    toDefault: '#dcdcdc',
    textSecondary: '#65676b',
    toHome: '#090a0f',
    'gray-800': '#2d3748',
    'border-color': 'var(--border-color)',
    'border-color-focus': 'var(--border-color-focus)',
    'input-bg': 'var(--input-bg-color)',
    text: 'var(--text-color)',
    title: 'var(--title-color)'
  },
  spacing: {
    'n1/2': '-50%'
  },
  scale: {
    0: '0',
    90: '.9',
    95: '.95',
    50: '.5',
    125: '1.25',
    200: '2'
  },
  margin: {
    27: '27px'
  },
  height: {
    72: '18rem',
    80: '20rem',
    105: '105%'
  },
  maxWidth: {
    250: '250px',
    200: '200px',
    300: '300px',
    500: '500px',
    '1/4': '25%',
    '3/7': '42%',
    '1/2': '50%',
    '3/5': '60%',
    '3/4': '75%',
    '9/5': '95%'
  },
  minWidth: {
    300: '300px',
    250: '250px',
    200: '200px'
  },

  borderRadius: {
    xlg: '1rem',
    'rounded-t-xlg': '1rem'
  },

  transitionDelay: {
    '0s': '0ms',
    '200s': '200ms',
    '400s': '600ms',
    '800s': '800ms',
    '1000s': '1000ms',
    '1500s': '1500ms',
    '2000s': '2000ms',
    '2500s': '2500ms',
    '3000s': '3000ms',
    '3500s': '3500ms',
    '4000s': '4000ms'
  },
  animationDelay: {
    // defaults to these values
    default: '0s',
    '0s': '0s',
    '02s': '-0.2s',
    '04s': '-0.4s',
    '0.5s': '0.5s',
    200: '200ms',
    400: '400ms',
    600: '600ms',
    800: '800ms',
    1000: '1000ms',
    1200: '1200ms',
    1400: '1400ms',
    1500: '1500ms',
    1600: '1600ms',
    2000: '2000ms',
    2500: '2500ms',
    3000: '3000ms'
  },
  transitionDuration: {
    2000: '2000ms'
  }
};
