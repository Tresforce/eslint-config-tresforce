module.exports = {
    globals: {
        MyGlobal: true
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    extends: [
      './rules/baseRules',
      './rules/jestRules',
      './rules/typeScriptRules'
    ].map(require.resolve),
    rules: {}
};