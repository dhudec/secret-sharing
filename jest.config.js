module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tests/tsconfig.json',
    },
  },
  preset: 'ts-jest',
  transform: {
    '.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@basis-theory/basis-theory-portal-commons)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
  moduleDirectories: ['<rootDir>', 'components', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/node_modules/',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      lines: 100,
      functions: 100,
    },
  },
};
