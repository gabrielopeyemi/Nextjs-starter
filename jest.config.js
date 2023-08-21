module.exports = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: [
      '**/*.{js,ts,jsx,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!**/.next/**',
      '!**/coverage/**',
      '!**/pages/api/hello.ts',
      '!**/pages/_app.tsx',
      '!**/nyc.config.js',
      '!**/postcss.config.js',
      '!**/next.config.js',
      '!**/jest.config.js',
      '!**/tailwind.config.js',
    ],
  };
  