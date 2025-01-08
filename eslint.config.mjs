import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
    "extends": [
      "some-other-config-you-use",
      "prettier"
  ]
  },

  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
