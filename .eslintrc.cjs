// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    // override rules.
    'eslint-config-prettier',
    'prettier'
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, '')],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json')
      }
    }
  },
  env: {
    node: true,
    jest: true
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    // warning <a target='_blank'> not rel="noreferrer"
    'react/jsx-no-target-blank': 'warn',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-multi-spaces': 'error',
    'keyword-spacing': 'error',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
}
