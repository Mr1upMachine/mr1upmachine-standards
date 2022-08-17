/* eslint-disable */

module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
      ],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  rules: {
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { accessibility: "no-public", overrides: { properties: "explicit" } },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "variable",
        modifiers: ["destructured"],
        format: null,
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],

    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/promise-function-async": "warn",
    "@typescript-eslint/require-array-sort-compare": "warn",
    "@typescript-eslint/sort-type-union-intersection-members": "warn",
    "@typescript-eslint/type-annotation-spacing": "error",
    "accessor-pairs": "error",
    "consistent-return": "error",
    curly: "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    eqeqeq: "error",
    "grouped-accessor-pairs": "warn",
    "max-params": ["warn", 5],
    "no-console": "warn",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "warn",
    "no-extend-native": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-lonely-if": "error",
    "no-magic-numbers": ["warn", { ignore: [1] }],
    "no-multi-assign": "error",
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-param-reassign": "error",
    "no-promise-executor-return": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": ["error", { builtinGlobals: true }],
    "no-template-curly-in-string": "warn",
    "no-throw-literal": "error",
    "no-undefined": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable-loop": "error",
    "no-unused-expressions": ["error", { enforceForJSX: true }],
    "no-unused-private-class-members": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "warn",
    "no-useless-constructor": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "object-shorthand": "error",
    "operator-assignment": "warn",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-object-has-own": "warn",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prettier/prettier": "error",
    "require-atomic-updates": "warn",
    "require-await": "warn",
    "sort-imports": "error",
    "spaced-comment": "warn",
    yoda: "warn",
  },
};
