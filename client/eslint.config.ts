// eslint.config.js
import { defineConfig } from "eslint/config";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default defineConfig([
  { ignores: ["dist", "node_modules", "package-lock.json"] },

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.es2020 },
    },
    plugins: {
      react,
      "react-hooks": reactHooks as any,
      "react-refresh": reactRefresh as any,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      semi: "error",
      eqeqeq: ["error", "always"], // No more '==' vs '===' confusion
      "no-console": ["warn", { allow: ["warn", "error"] }], // Clean production logs
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // No dead variables
      "prefer-const": "error", // Immutability by default
      curly: "error", // Avoid "dangling else" bugs

      "react/jsx-no-target-blank": "error", // Security: Prevents tab-nabbing
      "react/no-array-index-key": "error", // Prevents UI glitches on lists

      "react-hooks/rules-of-hooks": "error", // Must follow Hook rules
      "react-hooks/exhaustive-deps": "warn", // THE most important rule for useEffect
    },
  },
]);
