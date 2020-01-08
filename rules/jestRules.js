module.exports = {
  rules: {
    "jest/no-if": 'error',
    "jest/valid-title": 'error',
    "jest/require-top-level-describe":'error',
    "jest/require-to-throw-message": 'error',
    "jest/prefer-todo": 'error',
    "jest/prefer-strict-equal": 'error',
    "jest/prefer-spy-on": 'error',
    "jest/prefer-hooks-on-top": "error",
    "jest/no-truthy-falsy": 'error',
    "jest/no-test-return-statement": "error",
    "jest/no-duplicate-hooks": "error",
    "jest/consistent-test-it": [
      "error",
      {
        "fn": "test",
        "withinDescribe": "test"
      }
    ],
    "jest/lowercase-name": ["error", { "allowedPrefixes": ["GET", "POST", "PUT", "PATCH", "DELETE"] }],
  }
}