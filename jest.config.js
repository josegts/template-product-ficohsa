const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })
const customJestConfig = {
  testEnvironment: 'jsdom',
  verbose: true,
  moduleFileExtensions: ['js', 'tsx', 'ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/src/shared/models/mocks/matchMedia.mock'],
  collectCoverage: true,
  moduleNameMapper: {
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
  },
  clearMocks: true,
  coverageReporters: [
    'html',
    'lcov',
    'cobertura'
  ], // Tipos de reportes que se generan
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './coverage/', outputName: 'junit.xml' }],
    [
      'jest-html-reporters',
      { publicPath: './coverage/', filename: 'report-jest.html' },
    ],
    'jest-sonar',
  ],
  collectCoverageFrom: [
    './src/components/**',
    './src/pages/**',
    '!**/*.stories.tsx',
    '!**/*.d.ts',
  ],
};

module.exports = createJestConfig(customJestConfig)
