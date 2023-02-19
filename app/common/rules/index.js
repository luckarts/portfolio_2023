export const rules = {
  email: {
    required: {
      value: true,
      message: 'email require'
    },
    type: 'email',
    whitespace: true
  },

  password: {
    required: {
      value: true,
      message: 'password require'
    },
    whitespace: true,
    type: 'password',
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
      message: 'password too low'
    }
  },

  username: {
    required: {
      value: true,
      message: 'username require'
    },
    whitespace: true
  }
};
