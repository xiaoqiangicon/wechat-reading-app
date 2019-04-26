module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": 'off',
    "comma-dangle": 'off',//对象字面量项尾不能有逗号
    'indent': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
