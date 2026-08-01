module.exports = {
  root: true,
  extends: [require.resolve('@pinklemon/configs/eslint-preset.js')],
  ignorePatterns: [
    '**/dist/**',
    '**/.next/**',
    '**/node_modules/**',
    '**/storybook-static/**',
    'apps/playground/**',
  ],
};
