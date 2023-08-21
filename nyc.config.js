module.exports = {
    extension: ['.js', '.jsx', '.ts', '.tsx'],
    reporter: ['text', 'html'],
    exclude: ['node_modules', '.next'],
    include: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
    branches: 80,
    lines: 80,
    functions: 80,
    statements: 80,
  };
  