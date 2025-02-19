import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      // Enforces the use of double quotes for strings and throws an error if violated
      quotes: ["error", "double"],
    },
  },
];
