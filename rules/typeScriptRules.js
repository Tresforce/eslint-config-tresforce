module.exports = {
  rules: {
    // Typescript specific rules
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/quotes": [
      "error",
      "single",
      { allowTemplateLiterals: true }
    ],
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1
      }
    ],
    "@typescript-eslint/brace-style": [
      "error",
      "1tbs",
      { allowSingleLine: false }
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/no-inferrable-types": ["warn"],
    "@typescript-eslint/no-explicit-any": 'off',
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-extra-parens": ["error"],
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        ignoreVoid: true
      }
    ],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false
      }
    ],
    "@typescript-eslint/no-this-alias": ["error"],
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        ignoreRhs: true,
        allowNullable: true
      }
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": [
      "error",
      {
        allowedPromiseNames: ["Thenable"],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true
      }
    ],
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/unified-signatures": "error"
  }
}