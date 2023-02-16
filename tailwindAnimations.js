module.exports = {
  FadeUp: {
    '0%': {
      opacity: '0',
      transform: 'translateY(50px)'
    },
    '100%': {
      opacity: '100',
      transform: 'translateY(0)'
    }
  },

  bulging: {
    '100%': {
      transform: 'scale(0)',
      opacity: '0.5'
    },
    '0%': {
      transform: 'scale(1)',
      opacity: '1'
    }
  }
};
