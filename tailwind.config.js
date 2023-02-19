const extend = require('./tailwindExtend.js');
const animations = require('./tailwindAnimations.js');
module.exports = {
  content: ['./app/components/**/*.{js,ts,jsx,tsx}', './app/containers/**/*.{js,ts,jsx,tsx}'],
  target: 'ie11',
  experimental: {
    optimizeUniversalDefaults: true
  },
  options: {
    prefix: '',
    important: false,
    separator: ':'
  },
  theme: {
    screens: {
      xs: { max: '500px' },
      sm: { max: '992px' },
      xsl: '500px',
      md: '992px',
      lg: '1024px',
      xl: '1280px'
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '1-5xl': '1.5rem',
      '1-6xl': '1.65rem',
      '1-8xl': '1.875rem',
      '2xl': '2em',
      '2-2xl': '2.25rem',
      '2-8xl': '2.8rem',
      '3xl': '3rem'
    },

    linearGradientColors: {
      home: ['#1b2735 ', '#090a0f '],
      default: ['#f9f9f9 90%', '#dcdcdc'],
      ykari: ['#6b8d77', '#bdd1b5']
    },
    fontStyle: {
      italic: 'italic'
    },
    fontFamily: {
      portfolio: ['"Open sans"', 'sans-serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },

    inset: {
      0: 0,
      1.5: '1.5rem',
      3: '3rem',
      '1/2': '50%',
      '1/3': '30%',
      1: '1em',
      n1: '-1em'
    },

    // load typographie
    leading: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      loose: 2,
      medium: ' 4vw',
      big: ' 5.619vw'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '40%': '40%',
      16: '4rem'
    },
    textTransform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      'normal-case': 'normal-case'
    },
    tracking: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em'
    },
    zIndex: {
      0: 0,
      1: 1,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto'
    },
    extend,
    animations,

    animationDelay: {
      // defaults to these values
      default: '0s',
      '0s': '0s',
      '02s': '-0.2s',
      '04s': '-0.4s',
      '0.5s': '0.5s',
      '1s': '1s',
      '1.5s': '1.5s',
      '2s': '2s',
      '2.5s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s'
    }
  },
  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColors: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontSize: ['responsive', 'hover', 'focus'],
    fontWeights: ['responsive', 'hover'],
    height: ['responsive', 'hover'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive', 'hover', 'active', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive', 'hover', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive'],
    svgFill: [],
    svgStroke: [],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive', 'hover'],
    zIndex: ['responsive']
  },
  corePlugins: {},
  plugins: []
};
