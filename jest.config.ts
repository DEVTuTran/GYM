export default {
  injectGlobals: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  // modulePaths: ['<rootDir>/src'],
  // moduleNameMapper: {
  //   '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  // },
  setupFilesAfterEnv: ['<rootDir>/src/setup.ts'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__tests__/*'
  },
  testMatch: ['**/*.test.ts']
}
