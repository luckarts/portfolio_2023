const JSDOMEnvironment = require('jest-environment-jsdom');

class CustomEnvironment extends JSDOMEnvironment {
  constructor(config) {
    super({
      ...config,
      url: 'http://localhost'
    });
  }
}

module.exports = CustomEnvironment;
