module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  setupFilesAfterEnv: ['./jest/setup.js', '@testing-library/jest-dom'],
  verbose: false,
  collectCoverage: true,
  verbose: true,
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/'
  },
  bail: true,
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  transform: {
    '^.+\\.jsx?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },

  moduleNameMapper: {
    '^contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^jest/(.*)$': '<rootDir>/jest/$1',
    '^containers/(.*)$': '<rootDir>/src/containers/$1'
  },
  // Ajoutez d'autres alias si nécessaire
  moduleFileExtensions: ['js', 'ts', 'json', 'tsx'],
  testRegex: '.*\\.spec\\.tsx$',
  snapshotSerializers: [],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  // transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$']
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)']
};
